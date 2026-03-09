import { assets } from "../assets/assets";

export default function CompanyHeader() {
  return (
    <div style={{ marginBottom: "20px" }}>
      {/* <h2>บริษัท ไพรม์เทคโซลูชั่นส์ จำกัด</h2>
      <h3>PRIMETECH SOLUTIONS LTD.</h3> */}
      <img
        src={assets.logo_with_name}
        alt="logo"
        className="h-12 w-auto object-contain"
      />

      <hr style={{ border: "2px solid orange" }} />

      <p>555 ถนนตัวอย่าง แขวงบางนา เขตบางนา กรุงเทพมหานคร 10260</p>
    </div>
  );
}
