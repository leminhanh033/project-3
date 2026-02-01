import { Metadata } from "next";
import Link from "next/link";
import { FaUserTie } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import {Test} from "@/app/components/CVCard/Test";

export const metadata: Metadata = {
    title: "Trang quản lý CV",
}


export default function CVManage() {
    return (
        <>
            <div className="mt-[60px]">
                <div className="container">
                    <div>
                        <div className="font-[700] text-[28px] text-[#121212]">Quản lý CV</div>
                        <div className="mt-[20px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] place-items-center">
                            <div className="p-[20px_16px] h-full flex flex-col items-center relative rounded-[8px] overflow-hidden sm:w-auto w-[350px]"
                                style={{ background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)" }}>

                                <img src="/images/Frame.png" alt="" className="absolute top-[0] left-[0] " />

                                <div className="mt-[20px] mb-[auto] w-[100%] font-[700] md:text-[18px] text-[#121212] text-[14px] text-center px-[16px] line-clamp-2">
                                    <Link href="#" className="w-[100%] block">Frontend Engineer (ReactJS)</Link>
                                </div>

                                <div className="mt-[12px]">
                                    <div className="flex text-[14px] text-[#000000]">
                                        <div className="font-[400]">Ứng viên: </div>
                                        <div className="font-[700]">&nbsp;Lê Văn A</div>
                                    </div>
                                    <div className="flex items-center font-[400] text-[14px]">
                                        <GrMail />
                                        <div>levana@gmail.com</div>
                                    </div>
                                    <div className="flex items-center font-[400] text-[14px]">
                                        <FaPhoneAlt />
                                        <div>0123456789</div>
                                    </div>
                                </div>

                                <div className="mt-[12px] flex flex-col gap-[6px] font-[400] text-[14px]">
                                    <div className="font-[600] text-[16px] text-[#0088FF]">1.000$ - 1.500$</div>
                                    <div className="flex gap-[8px] items-center">
                                        <FaUserTie />
                                        <div>Fresher</div>
                                    </div>
                                    <div className="flex gap-[8px] items-center ">
                                        <FaBriefcase />
                                        <div>Tại văn phòng</div>
                                    </div>
                                    <div className="flex gap-[8px] items-center text-[#FF0000]">
                                        <FaEye />
                                        <div>Chưa xem"</div>
                                    </div>
                                    <div className="flex gap-[8px] items-center">
                                        <FaCircleCheck />
                                        <div>Chưa duyệt</div>
                                    </div>

                                </div>

                               <div className="mt-[12px] flex gap-[8px] font-[400] text-[14px] flex-wrap">
                                <div className="bg-[#0088FF] text-[#FFFFFF] rounded-[4px] p-[8px_20px] w-fit cursor-pointer">Xem</div>
                                <div className="bg-[#9FDB7C] text-[#000000] rounded-[4px] p-[8px_20px] w-fit cursor-pointer" >Duyệt</div>
                                <div className="bg-[#FF5100] text-[#FFFFFF] rounded-[4px] p-[8px_20px] w-fit cursor-pointer" >Từ chối</div>
                                <div className="bg-[#FF0000] text-[#FFFFFF] rounded-[4px] p-[8px_20px] w-fit cursor-pointer">Xoá</div>
                               </div>
                            </div>
                            <div className="p-[20px_16px] h-full flex flex-col items-center relative rounded-[8px] overflow-hidden sm:w-auto w-[350px]"
                                style={{ background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)" }}>

                                <img src="/images/Frame.png" alt="" className="absolute top-[0] left-[0] " />

                                <div className="mt-[20px] mb-[auto] w-[100%] font-[700] md:text-[18px] text-[#121212] text-[14px] text-center px-[16px] line-clamp-2">
                                    <Link href="#" className="w-[100%] block">Frontend Engineer (ReactJS)</Link>
                                </div>

                                <div className="mt-[12px]">
                                    <div className="flex text-[14px] text-[#000000]">
                                        <div className="font-[400]">Ứng viên: </div>
                                        <div className="font-[700]">&nbsp;Lê Văn A</div>
                                    </div>
                                    <div className="flex items-center font-[400] text-[14px]">
                                        <GrMail />
                                        <div>levana@gmail.com</div>
                                    </div>
                                    <div className="flex items-center font-[400] text-[14px]">
                                        <FaPhoneAlt />
                                        <div>0123456789</div>
                                    </div>
                                </div>

                                <div className="mt-[12px] flex flex-col gap-[6px] font-[400] text-[14px]">
                                    <div className="font-[600] text-[16px] text-[#0088FF]">1.000$ - 1.500$</div>
                                    <div className="flex gap-[8px] items-center">
                                        <FaUserTie />
                                        <div>Fresher</div>
                                    </div>
                                    <div className="flex gap-[8px] items-center">
                                        <FaBriefcase />
                                        <div>Tại văn phòng</div>
                                    </div>
                                    <div className="flex gap-[8px] items-center">
                                        <FaEye />
                                        <div>Đã xem</div>
                                    </div>
                                    <div className="flex gap-[8px] text-[#47BE02] items-center">
                                        <FaCircleCheck />
                                        <div>Đã duyệt</div>
                                    </div>

                                </div>

                               <div className="mt-[12px] flex gap-[8px] font-[400] text-[14px] flex-wrap">
                                <div className="bg-[#0088FF] text-[#FFFFFF] rounded-[4px] p-[8px_20px] w-fit cursor-pointer">Xem</div>
                                <div className="bg-[#FF5100] text-[#FFFFFF] rounded-[4px] p-[8px_20px] w-fit cursor-pointer">Từ chối</div>
                                <div className="bg-[#FF0000] text-[#FFFFFF] rounded-[4px] p-[8px_20px] w-fit cursor-pointer">Xoá</div>
                               </div>
                            </div>
                            <div className="p-[20px_16px] h-full flex flex-col items-center relative rounded-[8px] overflow-hidden sm:w-auto w-[350px]"
                                style={{ background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)" }}>

                                <img src="/images/Frame.png" alt="" className="absolute top-[0] left-[0] " />

                                <div className="mt-[20px] mb-[auto] w-[100%] font-[700] md:text-[18px] text-[#121212] text-[14px] text-center px-[16px] line-clamp-2">
                                    <Link href="#" className="w-[100%] block">Frontend Engineer (ReactJS)</Link>
                                </div>

                                <div className="mt-[12px]">
                                    <div className="flex text-[14px] text-[#000000]">
                                        <div className="font-[400]">Ứng viên: </div>
                                        <div className="font-[700]">&nbsp;Lê Văn A</div>
                                    </div>
                                    <div className="flex items-center font-[400] text-[14px]">
                                        <GrMail />
                                        <div>levana@gmail.com</div>
                                    </div>
                                    <div className="flex items-center font-[400] text-[14px]">
                                        <FaPhoneAlt />
                                        <div>0123456789</div>
                                    </div>
                                </div>

                                <div className="mt-[12px] flex flex-col gap-[6px] font-[400] text-[14px]">
                                    <div className="font-[600] text-[16px] text-[#0088FF]">1.000$ - 1.500$</div>
                                    <div className="flex gap-[8px] items-center">
                                        <FaUserTie />
                                        <div>Fresher</div>
                                    </div>
                                    <div className="flex gap-[8px] items-center">
                                        <FaBriefcase />
                                        <div>Tại văn phòng</div>
                                    </div>
                                    <div className="flex gap-[8px] items-center">
                                        <FaEye />
                                        <div>Đã xem</div>
                                    </div>
                                    <div className="flex gap-[8px] text-[#FF5100] items-center">
                                        <FaCircleCheck />
                                        <div>Từ chối</div>
                                    </div>

                                </div>

                               <div className="mt-[12px] flex gap-[8px] font-[400] text-[14px] flex-wrap">
                                <div className="bg-[#0088FF] text-[#FFFFFF] rounded-[4px] p-[8px_20px] w-fit cursor-pointer">Xem</div>
                                <div className="bg-[#9FDB7C] text-[#000000] rounded-[4px] p-[8px_20px] w-fit cursor-pointer">Duyệt</div>
                                <div className="bg-[#FF0000] text-[#FFFFFF] rounded-[4px] p-[8px_20px] w-fit cursor-pointer">Xoá</div>
                               </div>
                            </div>
                            <Test/>
                        </div>
                        <div className="mt-[30px] p-[12px_18px] rounded-[8px] w-fit" style={{ border: "1px solid #DEDEDE" }}>
                            <select name="" id="" className="font-[400] text-[16px] text-[#414042]">
                                <option value="">Trang 1</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}