export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-semibold mb-4">ติดต่อเรา</h1>

      <p className="text-gray-600 mb-6">
        หากต้องการสอบถามข้อมูลเพิ่มเติมเกี่ยวกับระบบ หรือพบปัญหาในการใช้งาน
        สามารถติดต่อทีมงานได้ตามข้อมูลด้านล่าง
      </p>

      <div className="space-y-2">
        <p>
          <strong>บริษัท :</strong> PrimeTech Solutions Ltd.
        </p>

        <p>
          <strong>ที่อยู่ :</strong> 555 ถนนตัวอย่าง แขวงบางนา เขตบางนา
          กรุงเทพมหานคร 10260
        </p>

        <p>
          <strong>โทร :</strong> 02-123-4567
        </p>

        <p>
          <strong>Email :</strong> support@primetech.co.th
        </p>
      </div>
    </div>
  );
}
