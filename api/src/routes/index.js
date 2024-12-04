import express from "express";

import users from "./user.route.js";
import event from "./event.route.js";
import booking from "./booking.route.js";
import form from "./form.route.js";

const router = express.Router();

router.use(users);
router.use(event);
router.use(booking);
router.use(form);

export default router;