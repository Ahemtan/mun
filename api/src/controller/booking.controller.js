import vine from "@vinejs/vine";
import prisma from "../db/db.config.js";

import { catchAsyncError } from "../middleware/async.error.js";
import { createBookings } from "../schema/bookings.schema.js";

export const createBookingHandler = catchAsyncError(async (req, res, next) => {
  const body = req.body;

  const validator = vine.compile(createBookings);
  const payload = await validator.validate(body);

    const username = req.user.name

const booking = await prisma.bookings.create({
    data: {
        listingId: payload.listingId,
        name: username,
        pxid: payload.pxid,
        userId: req.user.id,
        eventId: payload.eventId
    }
  });

  return res.status(200).json({
    booking,
  });
});