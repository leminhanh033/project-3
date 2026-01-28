import Link from "next/link";
import { FaUserTie } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

export const JobCard = () => (
    <>
        <div className="mt-[30px] flex items-center flex-col sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-y-[20px] sm:gap-x-[20px] gap-x-[10px] ">

            <div className="py-[20px] h-full flex flex-col items-center relative rounded-[8px] overflow-hidden sm:w-auto w-[350px]"
                style={{ background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)" }}>

                <img src="/images/Frame.png" alt="" className="absolute top-[0] left-[0] " />

                <div className="relative w-[120px] h-[120px] rounded-[8px] px-[10px] flex items-center bg-[#FFFFFF]"
                    style={{ boxShadow: "0px 4px 24px 0px #0000001F" }}>
                    <Link href="#">
                        <img src="/images/LG-image.png" alt="" />
                    </Link>
                </div>

                <div className="mt-[20px] mb-[auto] w-[100%] font-[700] md:text-[18px] text-[14px] text-center px-[16px] line-clamp-2">
                    <Link href="#" className="w-[100%] block">Frontend Engineer (ReactJS)</Link>
                </div>

                <div className="mt-[6px] font-[400] text-[14px]">LG CNS Việt Nam</div>

                <div className="mt-[12px] font-[600] text-[16px] text-[#0088FF]">1.000$ - 1.500$</div>

                <div className="mt-[6px] flex flex-col gap-[6px] font-[400] text-[14px]">
                    <div className="flex gap-[8px]">
                        <FaUserTie />
                        <div>Fresher</div>
                    </div>
                    <div className="flex gap-[8px] ">
                        <FaBriefcase />
                        <div>Tại văn phòng</div>
                    </div>
                    <div className="flex gap-[8px]">
                        <MdPlace />
                        <div>Ha Noi</div>
                    </div>
                </div>

                <div className="mt-[12px] flex gap-[8px] font-[400] text-[12px] text-[#414042]">
                    <div className="rounded-[20px] p-[6px_16px]" style={{ border: "1px solid #DEDEDE" }}>ReactJS</div>
                    <div className="rounded-[20px] p-[6px_16px]" style={{ border: "1px solid #DEDEDE" }}>NextJS</div>
                    <div className="rounded-[20px] p-[6px_16px]" style={{ border: "1px solid #DEDEDE" }}>Javascript</div>
                </div>
            </div>

            <div className="py-[20px] h-full flex flex-col items-center relative rounded-[8px] overflow-hidden sm:w-auto w-[350px]"
                style={{ background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)" }}>

                <img src="/images/Frame.png" alt="" className="absolute top-[0] left-[0] " />

                <div className="relative w-[120px] h-[120px] rounded-[8px] px-[10px] flex items-center bg-[#FFFFFF]"
                    style={{ boxShadow: "0px 4px 24px 0px #0000001F" }}>
                    <Link href="#">
                        <img src="/images/LG-image.png" alt="" />
                    </Link>
                </div>

                <div className="mt-[20px] mb-[auto] w-[100%] font-[700] md:text-[18px] text-[14px] text-center px-[16px] line-clamp-2">
                    <Link href="#" className="w-[100%] block">Frontend Engineer (ReactJS)</Link>
                </div>

                <div className="mt-[6px] font-[400] text-[14px]">LG CNS Việt Nam</div>

                <div className="mt-[12px] font-[600] text-[16px] text-[#0088FF]">1.000$ - 1.500$</div>

                <div className="mt-[6px] flex flex-col gap-[6px] font-[400] text-[14px]">
                    <div className="flex gap-[8px]">
                        <FaUserTie />
                        <div>Fresher</div>
                    </div>
                    <div className="flex gap-[8px] ">
                        <FaBriefcase />
                        <div>Tại văn phòng</div>
                    </div>
                    <div className="flex gap-[8px]">
                        <MdPlace />
                        <div>Ha Noi</div>
                    </div>
                </div>

                <div className="mt-[12px] flex gap-[8px] font-[400] text-[12px] text-[#414042]">
                    <div className="rounded-[20px] p-[6px_16px]" style={{ border: "1px solid #DEDEDE" }}>ReactJS</div>
                    <div className="rounded-[20px] p-[6px_16px]" style={{ border: "1px solid #DEDEDE" }}>NextJS</div>
                    <div className="rounded-[20px] p-[6px_16px]" style={{ border: "1px solid #DEDEDE" }}>Javascript</div>
                </div>
            </div>
            
            <div className="py-[20px] h-full flex flex-col items-center relative rounded-[8px] overflow-hidden sm:w-auto w-[350px]"
                style={{ background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)" }}>

                <img src="/images/Frame.png" alt="" className="absolute top-[0] left-[0] " />

                <div className="relative w-[120px] h-[120px] rounded-[8px] px-[10px] flex items-center bg-[#FFFFFF]"
                    style={{ boxShadow: "0px 4px 24px 0px #0000001F" }}>
                    <Link href="#">
                        <img src="/images/LG-image.png" alt="" />
                    </Link>
                </div>

                <div className="mt-[20px] mb-[auto] w-[100%] font-[700] md:text-[18px] text-[14px] text-center px-[16px] line-clamp-2">
                    <Link href="#" className="w-[100%] block">Frontend Engineer (ReactJS)</Link>
                </div>

                <div className="mt-[6px] font-[400] text-[14px]">LG CNS Việt Nam</div>

                <div className="mt-[12px] font-[600] text-[16px] text-[#0088FF]">1.000$ - 1.500$</div>

                <div className="mt-[6px] flex flex-col gap-[6px] font-[400] text-[14px]">
                    <div className="flex gap-[8px]">
                        <FaUserTie />
                        <div>Fresher</div>
                    </div>
                    <div className="flex gap-[8px] ">
                        <FaBriefcase />
                        <div>Tại văn phòng</div>
                    </div>
                    <div className="flex gap-[8px]">
                        <MdPlace />
                        <div>Ha Noi</div>
                    </div>
                </div>

                <div className="mt-[12px] flex gap-[8px] font-[400] text-[12px] text-[#414042]">
                    <div className="rounded-[20px] p-[6px_16px]" style={{ border: "1px solid #DEDEDE" }}>ReactJS</div>
                    <div className="rounded-[20px] p-[6px_16px]" style={{ border: "1px solid #DEDEDE" }}>NextJS</div>
                    <div className="rounded-[20px] p-[6px_16px]" style={{ border: "1px solid #DEDEDE" }}>Javascript</div>
                </div>
            </div>


        </div>
    </>
)