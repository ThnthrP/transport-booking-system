import { useLocation, useNavigate } from "react-router-dom";
import generatePDF from "../utils/generatePDF";
import CompanyHeader from "../components/CompanyHeader";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

export default function BookingTicket() {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingData = location.state;

  if (!bookingData) {
    return (
      <div className="max-w-2xl mx-auto py-10">
        <p>ไม่พบข้อมูลการจอง</p>
        <button
          onClick={() => navigate("/booking")}
          className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded"
        >
          กลับไปกรอกข้อมูล
        </button>
      </div>
    );
  }

  const isVehicle = (type) => bookingData.vehicle === type;

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const formatDateTime = (dateStr) => {
    if (!dateStr) return "";

    const date = new Date(dateStr);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day} ${month} ${year} ${hours}:${minutes}`;
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <div id="ticket" className="bg-white p-10 text-sm leading-8">
        <CompanyHeader />

        <h2 className="text-lg text-center font-semibold mt-4 mb-8">ใบจองรถ</h2>
        <div className="flex justify-center items-center gap-4 text-sm mb-6">
          <span className="text-gray-500">
            Booking ID: {bookingData.bookingId}
          </span>

          <span className="text-gray-400">|</span>

          <span
            className="status-badge px-3 rounded-full text-[13px]"
            style={{
              display: "inline-block",
              // verticalAlign: "middle",
              backgroundColor: "#fef3c7",
              color: "#b45309",
            }}
          >
            <span className="status-text">{bookingData.status}</span>
          </span>

          <span className="text-gray-400">|</span>

          <span className="text-gray-400 text-xs">
            Created: {formatDateTime(bookingData.createdAt)}
          </span>
        </div>

        {/* <div className="text-center text-xs text-gray-400 mb-4">
          Created at : {formatDateTime(bookingData.createdAt)}
        </div> */}

        <div className="space-y-4">
          {/* ฝ่าย */}
          <div className="flex">
            <span className="w-40">ฝ่าย / แผนก :</span>
            <div className="border-b flex-1 pb-1">{bookingData.department}</div>
          </div>

          {/* ชื่อ */}
          <div className="flex">
            <span className="w-40">ชื่อผู้ขอใช้บริการ :</span>
            <div className="border-b flex-1 pb-1">{bookingData.requester}</div>
          </div>

          {/* เส้นทาง */}
          <div className="flex">
            <span className="w-40">แผนงานการเดินทาง :</span>
            <div className="border-b flex-1 pb-1">
              {bookingData.pickup} → {bookingData.dropoff}
            </div>
          </div>

          {/* Purpose */}
          <div className="flex">
            <span className="w-40">วัตถุประสงค์ :</span>
            <div className="border-b flex-1 pb-1">{bookingData.purpose}</div>
          </div>

          {/* วันที่ + เวลา */}
          <div className="flex gap-6">
            <div className="flex flex-1">
              <span className="w-20">วันที่ :</span>
              <div className="border-b flex-1 pb-1">
                {formatDate(bookingData.date)}
              </div>
            </div>

            <div className="flex flex-1">
              <span className="w-20">เวลา :</span>
              <div className="border-b flex-1 pb-1">{bookingData.time} น.</div>
            </div>
          </div>

          {/* เวลาใช้รถ */}
          <div className="flex">
            <span className="w-40">ประมาณเวลาใช้รถ :</span>
            <div className="border-b flex-1 pb-1">
              {bookingData.durationHours || 0} ชม.{" "}
              {bookingData.durationMinutes || 0} นาที
            </div>
          </div>

          {/* ผู้โดยสาร + รถ */}
          <div className="flex gap-6">
            <div className="flex flex-1">
              <span className="w-32">จำนวนผู้โดยสาร :</span>
              <div className="border-b flex-1 pb-1">
                {bookingData.passengers} คน
              </div>
            </div>

            <div className="flex flex-1">
              <span className="w-20">จำนวนรถ :</span>
              <div className="border-b flex-1 pb-1">{bookingData.cars} คัน</div>
            </div>
          </div>

          {/* ประเภทรถ */}
          <div className="mt-4">
            <p className="mb-2">ประเภทรถ :</p>

            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {[
                "รถเก๋ง",
                "รถกระบะ",
                "รถตู้",
                "รถบัส",
                "รถ 6 ล้อ",
                "รถ 10 ล้อ",
                "อื่นๆ",
              ].map((type) => (
                <div
                  key={type}
                  className="flex items-center gap-2 leading-[20px]"
                >
                  <span
                    className="vehicle-circle inline-block text-[22px] relative"
                    style={{
                      color: isVehicle(type) ? "#22c55e" : "#374151",
                    }}
                  >
                    {isVehicle(type) ? "●" : "○"}
                  </span>

                  <span className="text-[14px] leading-none">{type}</span>
                </div>
              ))}
            </div>
          </div>
          {/* โทร */}
          <div className="flex">
            <span className="w-32">หมายเลขติดต่อ :</span>
            <div className="border-b flex-1 pb-1">{bookingData.contact}</div>
          </div>

          {/* หมายเหตุ */}
          <div className="mt-6">
            <p className="mb-2">หมายเหตุ :</p>

            <div className="border-b h-6"></div>
            <div className="border-b h-6"></div>
            <div className="border-b h-6"></div>
          </div>
        </div>

        {/* ลายเซ็น */}

        <div className="grid grid-cols-2 gap-32 mt-28 text-sm">
          {/* ผู้ขอใช้รถ */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12">ลงชื่อ</span>

              <div className="border-b w-[240px] pb-1 text-center min-h-[30px]">
                {bookingData.requester}
              </div>

              <span className="w-20 whitespace-nowrap">ผู้ขอใช้รถ</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-12">วันที่</span>

              <div className="border-b w-[240px] pb-1 text-center min-h-[30px]">
                {formatDate(bookingData.date)}
              </div>

              <span className="w-20"></span>
            </div>
          </div>

          {/* ผู้อนุมัติ */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12">ลงชื่อ</span>

              <div className="border-b w-[240px] pb-1 min-h-[30px]"></div>

              <span className="w-20 whitespace-nowrap">ผู้อนุมัติ</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-12">วันที่</span>

              <div className="border-b w-[240px] pb-1 min-h-[30px]"></div>

              <span className="w-20"></span>
            </div>
          </div>
        </div>
      </div>

      {/* ปุ่ม */}

      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={() => navigate("/")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer transition hover:shadow-md flex items-center gap-2"
        >
          <FaHome size={14} />
          หน้าหลัก
        </button>

        <button
          onClick={() => navigate("/booking")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer transition hover:shadow-md flex items-center gap-2"
        >
          <FaPlus size={14} />
          จองรถใหม่
        </button>

        <button
          onClick={generatePDF}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer transition hover:shadow-md flex items-center gap-2"
        >
          <FaRegFilePdf size={16} />
          ดาวน์โหลด PDF
        </button>
      </div>
    </div>
  );
}
