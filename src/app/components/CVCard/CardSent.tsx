"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";


export const CardSent = () => {
    const [remove, setremove] = useState(false);
    return (
        <>
            <div className={"p-[20px_16px] h-full flex flex-col items-center relative rounded-[8px] overflow-hidden sm:w-auto w-[350px] "+(remove?"hidden":"")}
                style={{ background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)" }}>

                <img src="/images/Frame.png" alt="" className="absolute top-[0] left-[0] " />

                <div className="mt-[20px] mb-[auto] w-[100%] font-[700] md:text-[18px] text-[#121212] text-[14px] text-center px-[16px] line-clamp-2">
                    <Link href="#" className="w-[100%] block">Frontend Engineer (ReactJS)</Link>
                </div>                

                <div className="mt-[12px] flex flex-col items-center gap-[6px] font-[400] text-[14px]">
                    <div>
                        <span>Công ty: </span>
                        <span className="font-[700]">&nbsp;Công ty ABC</span>
                    </div>
                    <div className="font-[600] text-[16px] text-[#0088FF]">1.000$ - 1.500$</div>
                    <div className="flex gap-[8px] items-center">
                        <FaUserTie />
                        <div>Fresher</div>
                    </div>
                    <div className="flex gap-[8px] items-center ">
                        <FaBriefcase />
                        <div>Tại văn phòng</div>
                    </div>                   
                    <div className="flex gap-[8px] items-center ">
                        <FaCircleCheck />
                        <div>Chưa duyệt</div>
                    </div>

                </div>

                <div className="mt-[12px] flex gap-[8px] font-[400] text-[14px] flex-wrap">
                    <Link href="#"> <div className="bg-[#0088FF] text-[#FFFFFF] rounded-[4px] p-[8px_20px] w-fit cursor-pointer">Xem</div></Link>
                    <div className="bg-[#FF0000] text-[#FFFFFF] rounded-[4px] p-[8px_20px] w-fit cursor-pointer" onClick={()=>setremove(true)}>Xoá</div>
                </div>
            </div>
        </>
    )
}