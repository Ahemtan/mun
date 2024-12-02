import express from "express";

import { createUserHandler, getProfileHandler, loginUserHandler, logoutHandler, refreshTokenHandler } from "../controller/user.controller.js";
import { privateRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/api/users/", createUserHandler);
router.post("/api/users/login", loginUserHandler);
router.post("/api/users/refresh", refreshTokenHandler);
router.post("/api/users/logout", privateRoute, logoutHandler);


router.get("/api/users/me", privateRoute, getProfileHandler)

export default router;