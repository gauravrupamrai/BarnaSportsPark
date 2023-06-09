import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GooeyCircleLoader } from "react-loaders-kit";

const courts = [
  {
    courtName: "courtBarna1",
    courtPicture:
      "https://images.unsplash.com/photo-1551773188-0801da12ddae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    timeSlots: [
      { startTime: "09:00", endTime: "10:00", value: true },
      { startTime: "10:00", endTime: "11:00", value: true },
      { startTime: "11:00", endTime: "12:00", value: true },
      { startTime: "12:00", endTime: "13:00", value: true },
      { startTime: "13:00", endTime: "14:00", value: true },
      { startTime: "14:00", endTime: "15:00", value: true },
      { startTime: "15:00", endTime: "16:00", value: true },
      { startTime: "16:00", endTime: "17:00", value: true },
      { startTime: "17:00", endTime: "18:00", value: true },
      { startTime: "18:00", endTime: "19:00", value: true },
      { startTime: "19:00", endTime: "20:00", value: true },
      { startTime: "20:00", endTime: "21:00", value: true },
    ],
  },
  {
    courtName: "courtBarna2",
    courtPicture:
      "https://images.unsplash.com/photo-1551773188-0801da12ddae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    timeSlots: [
      { startTime: "09:00", endTime: "10:00", value: true },
      { startTime: "10:00", endTime: "11:00", value: true },
      { startTime: "11:00", endTime: "12:00", value: true },
      { startTime: "12:00", endTime: "13:00", value: true },
      { startTime: "13:00", endTime: "14:00", value: true },
      { startTime: "14:00", endTime: "15:00", value: true },
      { startTime: "15:00", endTime: "16:00", value: true },
      { startTime: "16:00", endTime: "17:00", value: true },
      { startTime: "17:00", endTime: "18:00", value: true },
      { startTime: "18:00", endTime: "19:00", value: true },
      { startTime: "19:00", endTime: "20:00", value: true },
      { startTime: "20:00", endTime: "21:00", value: true },
    ],
  },
  {
    courtName: "courtBarna3",
    courtPicture:
      "https://images.unsplash.com/photo-1551773188-0801da12ddae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    timeSlots: [
      { startTime: "09:00", endTime: "10:00", value: true },
      { startTime: "10:00", endTime: "11:00", value: true },
      { startTime: "11:00", endTime: "12:00", value: true },
      { startTime: "12:00", endTime: "13:00", value: true },
      { startTime: "13:00", endTime: "14:00", value: true },
      { startTime: "14:00", endTime: "15:00", value: true },
      { startTime: "15:00", endTime: "16:00", value: true },
      { startTime: "16:00", endTime: "17:00", value: true },
      { startTime: "17:00", endTime: "18:00", value: true },
      { startTime: "18:00", endTime: "19:00", value: true },
      { startTime: "19:00", endTime: "20:00", value: true },
      { startTime: "20:00", endTime: "21:00", value: true },
    ],
  },
  {
    courtName: "courtBarna4",
    courtPicture:
      "https://images.unsplash.com/photo-1551773188-0801da12ddae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    timeSlots: [
      { startTime: "09:00", endTime: "10:00", value: true },
      { startTime: "10:00", endTime: "11:00", value: true },
      { startTime: "11:00", endTime: "12:00", value: true },
      { startTime: "12:00", endTime: "13:00", value: true },
      { startTime: "13:00", endTime: "14:00", value: true },
      { startTime: "14:00", endTime: "15:00", value: true },
      { startTime: "15:00", endTime: "16:00", value: true },
      { startTime: "16:00", endTime: "17:00", value: true },
      { startTime: "17:00", endTime: "18:00", value: true },
      { startTime: "18:00", endTime: "19:00", value: true },
      { startTime: "19:00", endTime: "20:00", value: true },
      { startTime: "20:00", endTime: "21:00", value: true },
    ],
  },
  {
    courtName: "courtBarna5",
    courtPicture:
      "https://images.unsplash.com/photo-1551773188-0801da12ddae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    timeSlots: [
      { startTime: "09:00", endTime: "10:00", value: true },
      { startTime: "10:00", endTime: "11:00", value: true },
      { startTime: "11:00", endTime: "12:00", value: true },
      { startTime: "12:00", endTime: "13:00", value: true },
      { startTime: "13:00", endTime: "14:00", value: true },
      { startTime: "14:00", endTime: "15:00", value: true },
      { startTime: "15:00", endTime: "16:00", value: true },
      { startTime: "16:00", endTime: "17:00", value: true },
      { startTime: "17:00", endTime: "18:00", value: true },
      { startTime: "18:00", endTime: "19:00", value: true },
      { startTime: "19:00", endTime: "20:00", value: true },
      { startTime: "20:00", endTime: "21:00", value: true },
    ],
  },
];

const fetchAvailabilityURL = `${process.env.REACT_APP_APP_URL}/get-court-booking`;
const courtBookingURL = `${process.env.REACT_APP_APP_URL}/user-court-booking`;
const apiKey = process.env.REACT_APP_API_KEY;

function CourtBooking() {
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMembership, setSelectedMembership] = useState("");
  const [isAvailabilityFetched, setIsAvailabilityFetched] = useState(false);
  const navigate = useNavigate();
  const [availabilityLoading, setAvailabilityLoading] = useState(false);
  const [bookLoading, setBookLoading] = useState(false);

  const [bookedCourtInfo, setBookedCourtInfo] = useState(courts);
  const { user_token, user_data } = useSelector((state) => state.user);

  const membershipInfo = user_data.user.memberships;

  const availabilityLoadingProps = {
    loading: availabilityLoading,
    size: 80,
    colors: ['#f6b93b', '#5e22f0', '#ef5777']
}

const bookLoadingProps = {
  loading: bookLoading,
  size: 80,
  colors: ['#f6b93b', '#5e22f0', '#ef5777']
}

  const handleSlotSelect = (court, slot) => {
    setSelectedCourt(court);
    setSelectedSlot(slot);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const fetchAvailability = () => {
    setAvailabilityLoading(true);
    const requestConfig = {
      headers: {
        "x-api-key": apiKey,
      },
    };

    const requestBody = {
      token: user_token,
      bookingDate: selectedDate,
    };

    axios
      .post(fetchAvailabilityURL, requestBody, requestConfig)
      .then((response) => {
        setAvailabilityLoading(false);
        console.log(response);
        setBookedCourtInfo(response.data.body.bookedSlots);
        console.log(response.data.body.bookedSlots);
        const updatedCourts = handleAvailability(
          response.data.body.bookedSlots
        );
        setBookedCourtInfo(updatedCourts);
        setIsAvailabilityFetched(true);
      })
      .catch((error) => {
        setAvailabilityLoading(false);
        console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      });
  };

  const handleAvailability = (bookedSlots) => {
    const updatedCourts = courts.map((court) => {
      const courtBookings = bookedSlots[court.courtName];
      if (courtBookings) {
        const updatedSlots = court.timeSlots.map((slot) => {
          if (courtBookings.includes(slot.startTime)) {
            return { ...slot, value: false };
          }
          console.log("slot", slot);
          return slot;
        });
        console.log("updatedSlots:", updatedSlots);
        console.log("court", court);
        return { ...court, timeSlots: updatedSlots };
      }
      console.log("court", court);
      return court;
    });
    console.log("updatedCourts:", updatedCourts);

    return updatedCourts;
  };

  const handleBook = () => {
    setBookLoading(true);
    if (selectedDate && selectedMembership) {
      if (selectedCourt && selectedSlot) {
        console.log(selectedMembership);
        const membershipType =
          membershipInfo.find(
            (member) => member.membershipId === selectedMembership
          )?.membershipType || "";
        const membershipId = selectedMembership || "";

        const requestConfig = {
          headers: {
            "x-api-key": apiKey,
          },
        };

        const requestBody = {
          token: user_token,
          courtID: selectedCourt.courtName,
          userID: user_data.user.userId,
          membershipID: membershipId,
          slotID: selectedSlot.startTime,
          date: selectedDate,
        };

        console.log("requestBody:", requestBody);

        console.log({
          date: selectedDate,
          court: selectedCourt.courtName,
          slot: selectedSlot,
          membershipType: membershipType,
          membershipId: membershipId,
        });

        axios
          .post(courtBookingURL, requestBody, requestConfig)
          .then((response) => {
            setBookLoading(false);
            console.log(response);
            toast.success("Court booked successfully.");
            console.log(response.data.body);
            const bookingData = response.data.body;
            navigate("/user/court-booking-success", { state: { bookingData } });
          })
          .catch((error) => {
            setBookLoading(false);
            console.log(error);
            if (
              error.response.status === 401 ||
              error.response.status === 403
            ) {
              toast.error(error.response.data.message);
            } else {
              toast.error("Something went wrong. Please try again later.");
            }
          });
      } else {
        toast.error("Please select a court and a slot.");
      }
    } else {
      toast.error("Please select a date and a membership.");
    }
  };

  return (
    <>
    <header className="bg-sky-50 shadow">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Book a Court
          </h1>
        </div>
      </header>
      <section className="bg-white py-10 rounded-xl mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
        <div className="flex flex-col items-center space-y-4">
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="w-64 p-2 rounded-md bg-white shadow-md border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />

          <select
            value={selectedMembership}
            onChange={(e) => setSelectedMembership(e.target.value)}
            className="w-64 p-2 rounded-md bg-white shadow-md border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          >
            <option value="">Select Membership</option>
            {membershipInfo.map((member) => (
              <option key={member.membershipId} value={member.membershipId}>
                {member.membershipType}
              </option>
            ))}
          </select>

          { availabilityLoading ? (
            <div className="flex justify-center mt-4">
            <GooeyCircleLoader {...availabilityLoadingProps} />
          </div>
          ) : (
            <button
            onClick={fetchAvailability}
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Fetch Availability
          </button>
          )}
        </div>
        {isAvailabilityFetched && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in-down">
            {bookedCourtInfo.map((court, key) => (
              <div
                className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden transition duration-200 hover:shadow-xl"
                key={key}
              >
                <img
                  src={court.courtPicture}
                  loading="lazy"
                  alt={court.courtName}
                  className="w-full h-60 object-cover"
                />

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl text-gray-900">{court.courtName}</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {court.timeSlots.map((slot) => (
                      <button
                        onClick={() => handleSlotSelect(court, slot)}
                        className={`px-2 py-1 text-xs rounded-md ${
                          slot.value
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        } transition duration-200 hover:shadow-md ${
                          slot === selectedSlot ? "ring-2 ring-blue-500" : ""
                        }`}
                        disabled={!slot.value}
                      >
                        {`${slot.startTime} - ${slot.endTime}`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {isAvailabilityFetched && (
        <div className="flex justify-center mt-8">
        { bookLoading ? (
            <div className="flex justify-center mt-4">
            <GooeyCircleLoader {...bookLoadingProps} />
          </div>
          ) : (
          <button
            onClick={handleBook}
            className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition duration-200"
          >
            Book Court
          </button>
          )}
        </div>
        )}
      </section>
    </>
  );
}

export default CourtBooking;
