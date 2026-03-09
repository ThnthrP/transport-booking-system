import { useNavigate } from "react-router-dom";

export default function BookingForm({ bookingData, setBookingData }) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhone = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    setBookingData({
      ...bookingData,
      contact: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/booking/review", {
      state: bookingData,
    });
  };

  const vehicles = [
    "รถเก๋ง",
    "รถกระบะ",
    "รถตู้",
    "รถบัส",
    "รถ 6 ล้อ",
    "รถ 10 ล้อ",
    "อื่นๆ",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        แบบฟอร์มจองรถ
      </h2>

      {/* ข้อมูลผู้ขอใช้รถ */}

      <h3 className="text-lg font-medium text-gray-700 border-b pb-2 mb-5">
        ข้อมูลผู้ขอใช้รถ
      </h3>

      <div className="grid gap-4">
        <div>
          <label className="text-sm">ฝ่าย / แผนก</label>

          <input
            required
            name="department"
            value={bookingData.department}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="text-sm">ชื่อผู้ขอใช้รถ</label>

          <input
            required
            name="requester"
            value={bookingData.requester}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="text-sm">เบอร์ติดต่อ</label>

          <input
            required
            name="contact"
            value={bookingData.contact || ""}
            onChange={handlePhone}
            className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </div>

      {/* รายละเอียดการเดินทาง */}

      <h3 className="text-lg font-medium text-gray-700 border-b pb-2 mt-8 mb-5">
        รายละเอียดการเดินทาง
      </h3>

      <div className="grid gap-4">
        <div>
          <label className="text-sm">สถานที่รับ</label>

          <input
            required
            name="pickup"
            value={bookingData.pickup}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="text-sm">สถานที่ส่ง</label>

          <input
            required
            name="dropoff"
            value={bookingData.dropoff}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block mb-1">วัตถุประสงค์ :</label>

          <select
            name="purpose"
            value={bookingData.purpose}
            onChange={handleChange}
          >
            <option value="">เลือกวัตถุประสงค์</option>
            <option value="รับ-ส่งพนักงาน">รับ-ส่งพนักงาน</option>
            <option value="ขนส่งอุปกรณ์/สินค้า">ขนส่งอุปกรณ์/สินค้า</option>
            <option value="ปฏิบัติงานหน้างาน">ปฏิบัติงานหน้างาน</option>
            <option value="อื่น ๆ">อื่น ๆ</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm">วันที่</label>

            <input
              required
              type="date"
              name="date"
              value={bookingData.date}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm">เวลา</label>

            <input
              required
              type="time"
              name="time"
              value={bookingData.time}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 mt-1"
            />
          </div>
          {/* ประมาณเวลาใช้รถ */}

          <div>
            <label className="text-sm">ประมาณเวลาใช้รถ</label>

            <div className="flex gap-4 mt-1">
              {/* ชั่วโมง */}

              <div className="flex flex-1">
                <input
                  type="number"
                  min="0"
                  name="durationHours"
                  value={bookingData.durationHours || ""}
                  onChange={handleChange}
                  className="w-full border rounded-l-md px-3 py-2"
                  placeholder="0"
                />

                <span className="bg-gray-100 border border-l-0 px-4 py-2 rounded-r-md">
                  ชม.
                </span>
              </div>

              {/* นาที */}

              <div className="flex flex-1">
                <input
                  type="number"
                  min="0"
                  max="59"
                  name="durationMinutes"
                  value={bookingData.durationMinutes || ""}
                  onChange={handleChange}
                  className="w-full border rounded-l-md px-3 py-2"
                  placeholder="0"
                />

                <span className="bg-gray-100 border border-l-0 px-4 py-2 rounded-r-md">
                  นาที
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* รายละเอียดการใช้รถ */}

      <h3 className="text-lg font-medium text-gray-700 border-b pb-2 mt-8 mb-5">
        รายละเอียดการใช้รถ
      </h3>

      <div className="grid gap-4">
        {/* จำนวนผู้โดยสาร */}

        <div>
          <label className="text-sm">จำนวนผู้โดยสาร</label>

          <div className="flex mt-1">
            <input
              required
              type="number"
              name="passengers"
              min="1"
              value={bookingData.passengers || ""}
              onChange={handleChange}
              className="w-full border rounded-l-md px-3 py-2"
            />

            <span className="bg-gray-100 border border-l-0 px-4 py-2 rounded-r-md">
              คน
            </span>
          </div>
        </div>

        {/* จำนวนรถ */}

        <div>
          <label className="text-sm">จำนวนรถ</label>

          <div className="flex mt-1">
            <input
              required
              type="number"
              name="cars"
              min="1"
              value={bookingData.cars || ""}
              onChange={handleChange}
              className="w-full border rounded-l-md px-3 py-2"
            />

            <span className="bg-gray-100 border border-l-0 px-4 py-2 rounded-r-md">
              คัน
            </span>
          </div>
        </div>

        {/* ประเภทรถ */}

        <div>
          <label className="text-sm block mb-2">ประเภทรถ</label>

          <div className="flex flex-wrap gap-6">
            {vehicles.map((vehicle) => (
              <label
                key={vehicle}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <input
                  type="radio"
                  name="vehicle"
                  value={vehicle}
                  checked={bookingData.vehicle === vehicle}
                  onChange={handleChange}
                />
                {vehicle}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* หมายเหตุ */}

      <h3 className="text-lg font-medium text-gray-700 border-b pb-2 mt-8 mb-5">
        รายละเอียดเพิ่มเติม
      </h3>

      <textarea
        name="notes"
        value={bookingData.notes}
        onChange={handleChange}
        className="w-full border rounded-md px-3 py-2 h-24"
      />

      <button
        type="submit"
        className="mt-8 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-md font-medium transition duration-200 cursor-pointer hover:shadow-md"
      >
        ตรวจสอบข้อมูล
      </button>
    </form>
  );
}
