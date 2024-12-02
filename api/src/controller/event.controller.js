import vine from "@vinejs/vine";
import prisma from "../db/db.config.js";

import { catchAsyncError } from "../middleware/async.error.js";
import { eventSchema } from "../schema/event.schema.js";

export const createEventHandler = catchAsyncError(async (req, res, next) => {
  const body = req.body;

  const validator = vine.compile(eventSchema);
  const payload = await validator.validate(body);

  const event = await prisma.event.create({
    data: payload,
  });

  return res.status(200).json({
    event,
  });
});

export const deleteEventHandler = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;

  await prisma.event.delete({
    where: {
      id: id,
    },
  });

  return res.status(200).json({
    success: true,
    message: "Event deleted successfully",
  });
});

export const updateEventHandler = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;

  const validator = vine.compile(eventSchema);
  const payload = await validator.validate(body);

  const event = await prisma.event.update({
    where: {
      id: id,
    },
    data: payload,
  });

  return res.status(200).json({
    event,
  });
});

export const getEventHandler = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;

  const event = await prisma.event.findUnique({
    where: {
      id: id,
    },
  });

  return res.status(200).json({
    event,
  });
});

export const getAllEventHandler = catchAsyncError(async (req, res, next) => {
  const events = await prisma.event.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });

  return res.status(200).json({
    events,
  });
});
