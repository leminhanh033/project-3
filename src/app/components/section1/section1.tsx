import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export const Section1 = () => (
  <>
    {/* section 1 */}
    <div className="section-1 bg-[#000065]" >
      <div className="container py-[60px] flex flex-col items-center gap-[30px]">
        <div className="font-[700] text-[28px] text-[#FFFFFF] text-center">887 Việc làm IT cho Developer "Chất"</div>
        <div className="w-[100%] flex gap-[15px] flex-col md:flex-row">
          <select className="h-[56px] w-[100%] md:w-[200px] lg:w-[240px] rounded-[4px] bg-[#FFFFFF] py-[18px] px-[20px] font-[500] text-[16px] text-[#121212]">
            <option value="Hà Nội"> Hà Nội </option>
          </select>
          <div className="flex-1 h-[56px] bg-[#FFFFFF] rounded-[4px] py-[18px] pl-[20px] " >
            <input type="text" placeholder="Nhập từ khoá..." />
          </div>
          <button className="h-[56px] w[100%] md:w-[160px] lg:w-[240px] bg-[#0088FF] flex rounded-[4px] gap-[10px] py-[18px] justify-center items-center text-[#FFFFFF] cursor-pointer">
            <CiSearch className="text-[20px]" />
            <span className="font-[500] text-[16px]">Tìm Kiếm</span>
          </button>
        </div>
        <div className="text-[#DEDEDE] font-[500] text-[16px] flex items-center gap-[12px] w-[100%] flex-wrap">
          <div>Mọi người đang tìm kiếm:</div>
          <div className="flex gap-[10px] flex-wrap">
            <Link href="#">
              <div className="p-[8px_22px] bg-[#121212] border-solid border-[1px] border-[#414042] rounded-[20px] cursor-pointer hover:bg-[#414042]">ReactJS</div>
            </Link>
            <Link href="#">
              <div className="p-[8px_22px] bg-[#121212] border-solid border-[1px] border-[#414042] rounded-[20px] cursor-pointer hover:bg-[#414042]">Javascript</div>
            </Link>
            <Link href="#">
              <div className="p-[8px_22px] bg-[#121212] border-solid border-[1px] border-[#414042] rounded-[20px] cursor-pointer hover:bg-[#414042]">NodeJS</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* end section 1 */}
    </>

)