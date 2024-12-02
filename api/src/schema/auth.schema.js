import vine from "@vinejs/vine";
import { validationErrorRepoter } from "../utils/errorRepoter.js";

vine.errorReporter = () => new validationErrorRepoter();

export const registerSchema = vine.object({
    name: vine.string().minLength(2),
    email: vine.string().email(),
    password: vine.string().minLength(8).confirmed()
})

export const loginSchema = vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8)
})