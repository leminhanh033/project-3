"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

export const Test = () => {
    const [check, setcheck] = useState(false);
    const [ignore, setignore] = useState(false);
    return (
        <>
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
                    <div className={"flex gap-[8px] items-center " + ((!check && !ignore) ? "text-[#FF0000]":"")}>
                        <FaEye />
                        <div>{(!check && !ignore) ? "Chưa xem" : "Đã xem"}</div>
                    </div>
                    <div className={"flex gap-[8px] items-center "+(check?"text-[#47BE02]":"")+(ignore?"text-[#FF5100]":"")}>
                        <FaCircleCheck />
                        <div>{(check?"Đã duyệt":"")+(ignore?"Từ chối":"")+(!check&&!ignore?"Chưa duyệt":"")}</div>
                    </div>

                </div>

                <div className="mt-[12px] flex gap-[8px] font-[400] text-[14px] flex-wrap">
                    <div className="bg-[#0088FF] text-[#FFFFFF] rounded-[4px] p-[8px_20px] w-fit cursor-pointer">Xem</div>
                    <div className={"bg-[#9FDB7C] text-[#000000] rounded-[4px] p-[8px_20px] w-fit cursor-pointer "+ (check&&!ignore?"hidden":"")} onClick={() => { setcheck(true); setignore(false) }}>Duyệt</div>
                    <div className={"bg-[#FF5100] text-[#FFFFFF] rounded-[4px] p-[8px_20px] w-fit cursor-pointer "+(!check&&ignore?"hidden":"")} onClick={() => { setcheck(false); setignore(true) }}>Từ chối</div>
                    <div className="bg-[#FF0000] text-[#FFFFFF] rounded-[4px] p-[8px_20px] w-fit cursor-pointer">Xoá</div>
                </div>
            </div>
        </>
    )
}