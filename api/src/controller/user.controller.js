import vine from "@vinejs/vine";
import bcrypt from "bcryptjs";

import { errorHandler } from "../utils/errorHandler.js";
import { catchAsyncError } from "../middleware/async.error.js";

import { loginSchema, registerSchema } from "../schema/auth.schema.js";
import { createUser, findUserByEmail } from "../service/user.service.js";

import { generateTokens, setCookies } from "../utils/jwt.js";
import { storeRefreshToken } from "../service/jwt.service.js";

import jwt from "jsonwebtoken";
import redis from "../db/redis.config.js";

export const createUserHandler = catchAsyncError(async (req, res, next) => {
  const body = req.body;

  const validator = vine.compile(registerSchema);
  const payload = await validator.validate(body);

  const existingUser = await findUserByEmail(payload.email);

  if (existingUser) {
    return next(new errorHandler("Email is in use, Please login insted!", 422));
  }

  const salt = bcrypt.genSaltSync(10);
  payload.password = bcrypt.hashSync(payload.password, salt);

  const user = await createUser(payload);

  return res.status(200).json({
    user
  });
});

export const loginUserHandler = catchAsyncError(async (req, res, next) => {
  const body = req.body;

  const validator = vine.compile(loginSchema);
  const payload = await validator.validate(body);

  const User = await findUserByEmail(payload.email);

  if (!User) {
    return next(new errorHandler("Invalid Email or Password!", 400));
  }

  const isMatch = bcrypt.compareSync(payload.password, User.password);

  if (!isMatch) {
    return next(new errorHandler("Invalid Email or Password!", 400));
  }

  const { accessToken, refreshToken } = generateTokens(User.id);
  await storeRefreshToken(User.id, refreshToken);

  setCookies(res, accessToken, refreshToken);

  res.status(200).json({
    User
  });
});

export const refreshTokenHandler = catchAsyncError(async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return next(new errorHandler("No refresh token is provided", 422));
  }

  const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRECT);
  const storedToken = await redis.get(`refresh_token:${decoded.userId}`);

  if (storedToken !== refreshToken) {
    return next(new errorHandler("Invalid Refresh Token", 422));
  }

  const accessToken = jwt.sign(
    { userId: decoded.userId },
    process.env.REFRESH_TOKEN_SECRECT,
    { expiresIn: "15m" }
  );

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production",
    sameSite: "strict",
    maxAge: 15 * 60 * 1000,
  });

  res.status(200).json({
    sucess: true,
    message: "Token refreshed sucessfully",
  });
});

export const logoutHandler = catchAsyncError(async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return next(new errorHandler("No refresh token is provided", 422));
  }

  const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRECT);
  await redis.del(`refresh_token:${decoded.userId}`);

  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  res.status(200).json({
    sucess: true,
    message: "Logged out successfully",
  });
});

export const getProfileHandler = catchAsyncError(async (req, res, next) => {
  res.status(200).json({
    user: req.user,
  });
});