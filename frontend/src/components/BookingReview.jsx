import { useLocation, useNavigate } from "react-router-dom";
import generateBookingId from "../utils/generateBookingId";
import { FaEdit, FaCheck } from "react-icons/fa";

export default function BookingReview() {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingData = location.state;

  if (!bookingData) {
    return (
      <div className="max-w-2xl mx-auto py-10">
        <p>ไม่พบข้อมูลการจอง</p>
        <button
          onClick={() => navigate("/booking")}
          className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 cursor-pointer"
        >
          กลับไปกรอกข้อมูล
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        ตรวจสอบข้อมูลการจองรถ
      </h2>

      <hr className="mb-4" />

      <h3 className="text-base font-semibold text-gray-800 border-l-4 border-yellow-500 pl-3 mb-4">
        ข้อมูลผู้ขอใช้รถ
      </h3>

      <div className="space-y-1 text-gray-600">
        <p>ฝ่าย / แผนก : {bookingData.department}</p>
        <p>ชื่อผู้ขอใช้รถ : {bookingData.requester}</p>
        <p>เบอร์ติดต่อ : {bookingData.contact}</p>
      </div>

      <hr className="my-4" />

      <h3 className="text-base font-semibold text-gray-800 border-l-4 border-yellow-500 pl-3 mb-4">
        รายละเอียดการเดินทาง
      </h3>

      <div className="space-y-1 text-gray-600">
        <p>สถานที่รับ : {bookingData.pickup}</p>
        <p>สถานที่ส่ง : {bookingData.dropoff}</p>
        <p>วัตถุประสงค์ : {bookingData.purpose}</p>
        <p>วันที่ : {bookingData.date}</p>
        <p>เวลา : {bookingData.time}</p>

        <p>
          ประมาณเวลาใช้รถ : {bookingData.durationHours || 0} ชม.{" "}
          {bookingData.durationMinutes || 0} นาที
        </p>
      </div>

      <hr className="my-4" />

      <h3 className="text-base font-semibold text-gray-800 border-l-4 border-yellow-500 pl-3 mb-4">
        รายละเอียดการใช้รถ
      </h3>

      <div className="space-y-1 text-gray-600">
        <p>จำนวนผู้โดยสาร : {bookingData.passengers} คน</p>
        <p>จำนวนรถ : {bookingData.cars} คัน</p>
        <p>ประเภทรถ : {bookingData.vehicle}</p>
      </div>

      <hr className="my-4" />

      {/* <h3 className="font-medium mb-2 text-gray-700">หมายเหตุ</h3> */}
      <h3 className="text-base font-semibold text-gray-800 border-l-4 border-yellow-500 pl-3 mb-4">
        หมายเหตุ
      </h3>
      <p className="text-gray-600 mt-1">{bookingData.notes || "-"}</p>

      <p className="text-gray-600">{bookingData.notes}</p>

      {/* Buttons */}

      <div className="mt-6 pt-6 border-t flex justify-between items-center">
        {/* Edit */}

        <button
          onClick={() =>
            navigate("/booking", {
              state: bookingData,
            })
          }
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer transition hover:shadow-md active:scale-95 flex items-center gap-2"
        >
          <FaEdit size={14} />
          แก้ไขข้อมูล
        </button>

        {/* Confirm */}

        <button
          onClick={() => {
            const bookingWithId = {
              ...bookingData,
              bookingId: generateBookingId(),
              status: "Pending",
              createdAt: new Date().toISOString(),
            };

            navigate("/booking/confirmation", {
              state: bookingWithId,
            });
          }}
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 cursor-pointer transition hover:shadow-md active:scale-95 flex items-center gap-2"
        >
          <FaCheck size={14} />
          ยืนยันการจอง
        </button>
      </div>
    </div>
  );
}
