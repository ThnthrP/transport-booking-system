import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import BookingReview from "./components/BookingReview";
import BookingTicket from "./components/BookingTicket";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";

function App() {

  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<HomePage />} />

        {/* ฟอร์มกรอก */}
        <Route path="/booking" element={<BookingPage />} />

        {/* ตรวจสอบข้อมูล */}
        <Route path="/booking/review" element={<BookingReview />} />

        {/* ใบจอง */}
        <Route path="/booking/confirmation" element={<BookingTicket />} />

        <Route path="/contact" element={<ContactPage />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;