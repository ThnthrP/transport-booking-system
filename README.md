# Transport Booking System

A simple internal web application for booking company transportation services.  
This system allows employees to submit transport requests, review booking details, and generate a printable PDF booking form.

---

## 🚀 Demo

This project demonstrates a simple internal company transport booking workflow including form submission, review, confirmation, and PDF generation.

---

## ✨ Features

- Transport booking form
- Booking review before confirmation
- Automatic Booking ID generation
- Booking timestamp (Created At)
- Vehicle type selection
- Printable booking ticket (PDF export)
- Clean and responsive UI

---

## 🛠 Tech Stack

Frontend
- React
- React Router
- Tailwind CSS

Libraries
- html2pdf.js
- react-icons

---

## 🔄 Workflow

1. Employee fills in the booking form
2. Review page shows all entered information
3. User confirms the booking
4. System generates:
   - Booking ID
   - Booking status (Pending)
   - Created timestamp
5. Booking ticket can be exported as PDF

---

## 🚗 Vehicle Types

- Sedan
- Pickup
- Van
- Bus
- 6-Wheel Truck
- 10-Wheel Truck
- Other

---

## 📄 Example Booking Ticket

The system generates a formatted transport booking document that includes:

- Booking ID
- Status
- Created timestamp
- Department
- Requester name
- Travel route
- Purpose
- Travel date & time
- Estimated duration
- Passenger count
- Vehicle type
- Contact number
- Signature fields

The document can be exported as a PDF file for internal approval and record keeping.

---

## 📁 Project Structure

src
├─ components
│ └─ CompanyHeader.jsx
│
├─ pages
│ ├─ BookingForm.jsx
│ ├─ BookingReview.jsx
│ ├─ BookingTicket.jsx
│ └─ HomePage.jsx
│
└─ utils
├─ generateBookingId.js
└─ generatePDF.js

---

## 🎯 Purpose of the Project

This project demonstrates how an internal company system can be built using modern frontend technologies.  
It focuses on user workflow, clean UI design, and generating printable documents.

---

## 🔮 Future Improvements

- Backend integration (Node.js / Laravel)
- Booking database
- Admin approval system
- Booking history
- Pagination for booking records
- Authentication system

---

## Screenshots

Booking Form

Booking Review

Booking Ticket

PDF Export

---

## Live Demo

Coming soon
