import Link from "next/link"
import { FaUserTie } from "react-icons/fa";
import {CompanyCard} from "@/app/components/card/company";
import {Section1} from "@/app/components/section1/section1"

export default function HomePage() {
  return (
    <>
      <Section1/>
      {/* section 2 */}
      <div className="section-2 mt-[60px]">
        <div className="container">
          <div className="text-center font-[700] sm:text-[28px] text-[24px] ">Nhà tuyển dụng hàng đầu</div>
          <CompanyCard/>          
        </div>
      </div>
      {/* end section 2 */}

      
    </>
  );
}
