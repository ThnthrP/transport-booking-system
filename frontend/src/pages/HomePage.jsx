import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-3xl font-semibold mb-4">
        ยินดีต้อนรับสู่ระบบภายในของบริษัท
      </h1>

      <p className="text-gray-600 mb-8 max-w-xl">
        ระบบนี้ถูกพัฒนาขึ้นเพื่อช่วยอำนวยความสะดวกในการจัดการงานภายในองค์กร
        รวมถึงการขอใช้บริการต่าง ๆ ของบริษัท เช่น
        การจองรถสำหรับการเดินทางของพนักงาน
      </p>

      <Link
        to="/booking"
        className="bg-yellow-600 text-white px-6 py-3 rounded hover:bg-yellow-700 transition"
      >
        ไปยังแบบฟอร์มจองรถ
      </Link>
    </div>
  );
}
