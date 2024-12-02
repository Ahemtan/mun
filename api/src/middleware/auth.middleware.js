import jwt from "jsonwebtoken";

import { findUserById } from "../service/user.service.js";

import { catchAsyncError } from "../middleware/async.error.js";

export const privateRoute = catchAsyncError(async (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized! Acess denied!" });
  }

  try {
    const decode = jwt.verify(accessToken, process.env.ACESS_TOKEN_SECRECT);
    const user = await findUserById(decode.userId);

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized! Acess denied!" });
    }

    req.user = {
      id: user.id,
      email: user.email,
      name: user.name,
      profile: user.profile,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized! Acess denied!" });
    }
  }
});

export const adminOnly = catchAsyncError(async (req, res, next) => {
  if (req.user && req.user.role === "ADMIN") {
    next();
  } else {
    return res
      .status(403)
      .json({ success: false, message: "Unauthorized! Acess denied!" });
  }
});
