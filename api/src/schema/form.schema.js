import vine from "@vinejs/vine";
import { validationErrorRepoter } from "../utils/errorRepoter.js";

vine.errorReporter = () => new validationErrorRepoter();

export const formSchema = vine.object({
    name: vine.string().minLength(2),
    email: vine.string().email(),
    phone: vine.number()
})