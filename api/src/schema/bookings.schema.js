import vine from "@vinejs/vine";
import { validationErrorRepoter } from "../utils/errorRepoter.js";

vine.errorReporter = () => new validationErrorRepoter();

export const createBookings = vine.object({
    eventId: vine.string(),
    pxid: vine.string()
})