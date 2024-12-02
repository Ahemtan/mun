import vine from "@vinejs/vine";
import { validationErrorRepoter } from "../utils/errorRepoter.js";

vine.errorReporter = () => new validationErrorRepoter();

export const eventSchema = vine.object({
    name: vine.string(),
    address: vine.string(),
    photo: vine.string(),
    desc: vine.string(),
    date: vine.string(),
    extraInfo: vine.string(),
    maxGuests: vine.number(),
    price: vine.number(),
})