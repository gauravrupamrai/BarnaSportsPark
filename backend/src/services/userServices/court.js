const Booking = require("../../models/bookingCourt");
const User = require("../../models/user");
const Membership = require("../../models/membership");
const connectDatabase = require("../../database/db");
const util = require("../../utils/util");
const auth = require("../../utils/auth");

const verifySecret = process.env.LOGIN_SECRET;

async function getCourtAvailability(body) {
    try {
      await connectDatabase();
      const { token, bookingDate } = body;
  
      if (!token || !bookingDate) {
        return util.buildResponse(401, "Missing Fields", body);
      }
  
      const verified = auth.verifyToken(token, verifySecret);
  
      if (!verified.verified) {
        return util.buildResponse(401, "Invalid Token, Please login again");
      }
  
      const bookings = await Booking.find({ bookingDate: bookingDate });
  
      const bookedSlots = {};
      const availableSlots = {};
  
      const allSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00']; // all possible slots
  
      bookings.forEach((booking) => {
        const { court, bookingSlot } = booking;
  
        if (!bookedSlots[court]) {
          bookedSlots[court] = [];
        }
  
        bookedSlots[court].push(bookingSlot);
      });
  
      // For each court, calculate available slots
      for(let court in bookedSlots) {
        availableSlots[court] = allSlots.filter(slot => !bookedSlots[court].includes(slot));
      }
  
      return util.buildResponse(200, "Court Availability", { bookedSlots, availableSlots });
    } catch (error) {
      // Handle the error appropriately
      console.error("Error in getCourtAvailability:", error);
      // You can choose to log the error, send a specific error response, or handle it in any other desired way.
      // For example, you can return a generic error response:
      return util.buildResponse(500, "Internal Server Error", error);
    }
  }
  

async function bookCourt(body) {
  try {
    await connectDatabase();
    const { token, courtID, userID, membershipID, slotID, date } = body;

    if (!token || !courtID || !userID || !membershipID || !slotID || !date) {
      return util.buildResponse(401, "Missing Fields", body);
    }

    const verified = auth.verifyToken(token, verifySecret);

    if (!verified.verified) {
      return util.buildResponse(401, "Invalid Token, Please login again");
    }

    const bookingsOnDate = await Booking.find({ bookingDate: date });

    const isCourtAvailable = !bookingsOnDate.some(
      (booking) => booking.court === courtID && booking.bookingSlot === slotID
    );

    if (!isCourtAvailable) {
      return util.buildResponse(403, "Court is already booked for this slot");
    }

    const userBookings = bookingsOnDate.filter(
      (booking) => booking.userID === userID
    );

    if (userBookings.length >= 2) {
      return util.buildResponse(
        403,
        "You have already booked two slots for this date"
      );
    }

    // if court is available and user has not booked more than two slots, then book the court
    const newBooking = new Booking({
      user: userID,
      court: courtID,
      bookingSlot: slotID,
      bookingDate: date,
      membership: membershipID,
    });

    await newBooking.save();

    return util.buildResponse(200, "Court booked successfully", newBooking);
  } catch (error) {
    console.error("Error in bookCourt:", error);
    return util.buildResponse(500, "Internal Server Error", error);
  }
}

module.exports.getCourtAvailability = getCourtAvailability;
module.exports.bookCourt = bookCourt;
