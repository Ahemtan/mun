import vine from "@vinejs/vine";
import prisma from "../db/db.config.js";

import { catchAsyncError } from "../middleware/async.error.js";
import { formSchema } from "../schema/form.schema.js";

export const createFormHandler = catchAsyncError(async (req, res, next) => {
  const body = req.body;
  const id = req.user.id;

  const validator = vine.compile(formSchema);
  const payload = await validator.validate(body);

  const submittedForm = await prisma.form.findUnique({
    where: {
      userId: id,
    },
  });

  if (submittedForm) {
    return res.status(200).json({
      message: "Hi Your form has been already submitted.",
    });
  }

  const form = await prisma.form.create({
    data: {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      userId: req.user.id,
    }});

  return res.status(200).json({
    success: true,
    message: "Form Submitted Successfully",
    form,
  });
});

export const getFormByUserId = catchAsyncError(async (req, res, next) => {
  const id = req.user.id;

  const form = await prisma.form.findUnique({
    where: {
      userId: id,
    },
  });

  if (form) {
    return res.status(200).json({
      form
    });
  }

  return res.status(200).json({
    message: "You have not submitted any form yet",
  })
});
