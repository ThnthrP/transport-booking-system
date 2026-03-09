import { useState } from "react";
import BookingForm from "../components/BookingForm";
import { useLocation } from "react-router-dom";

export default function BookingPage() {
  const location = useLocation();

  const [bookingData, setBookingData] = useState(
    location.state || {
      requester: "",
      department: "",
      contact: "",
      date: "",
      time: "",
      pickup: "",
      dropoff: "",
      passengers: "",
      cars: "",
      vehicle: "",
      notes: "",
      durationHours: "",
      durationMinutes: "",
      purpose: "",
    },
  );

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <BookingForm bookingData={bookingData} setBookingData={setBookingData} />
    </div>
  );
}
