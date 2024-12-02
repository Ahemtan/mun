import logger from "../utils/logger.js";

import { errors as ValidatorError } from "@vinejs/vine";

/**
 * The default error handling middleware for Express
 *
 * @param {Error} err The error object
 * @param {import('express').Request} req The Express request object
 * @param {import('express').Response} res The Express response object
 * @param {import('express').NextFunction} next The next middleware function in the Express chain
 *
 * @returns {void}
 */

export function errorMiddleware(err, req, res, next) {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  logger.error(err);

  if (err.code === "P2002") {
    logger.error(
      "There is a unique constraint violation, a new user cannot be created with this email"
    );
  }

  if (err.code === "P1000") {
    logger.error(
      `Can't reach database server. Please make sure your database server is running`
    );
  }

  if (err.code === "P1013") {
    logger.error("The provided database string is invalid.");
  }

  if (err instanceof ValidatorError.E_VALIDATION_ERROR) {
    return res.status(err.status).json({
      success: false,
      message: err.messages,
    });
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
}
