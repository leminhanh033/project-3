"use client";
import React, { useState } from "react";
import Link from "next/link";
import {HeaderMenu} from "./HeaderMenu.tsx"
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";


export const Header = () => {
    const [showMenu,setShowMenu]=useState(false);

    return (
        <>
            <div className="header bg-[#000071] h-[65px]">
                <div className="container flex items-center justify-between h-[100%]">
                    {/* logo */}
                    <Link href="#" className="logo text-[#FFFFFF] font-[800] text-[20px] sm:text-[28px] lg:flex-none flex-1">28.ITJobs</Link>
                    {/* list */}
                    <HeaderMenu showMenu={showMenu}/>
                    {/* đăng nhập/đăng ký */}
                    <div className="flex gap-[5px]">
                    <Link href="#" className="register text-[#FFFFFF] font-[600] sm:text-[16px] text-[12px]" >Đăng Nhập</Link>
                    <div className="register text-[#FFFFFF] font-[600] sm:text-[16px] text-[12px]"> / </div>
                    <Link href="#" className="register text-[#FFFFFF] font-[600] sm:text-[16px] text-[12px]" >Đăng Ký</Link>
                    </div>
                    {/* icon menu */}
                    <button className="text-[30px] text-[#FFFFFF] lg:hidden ml-[12px] cursor-pointer"
                    onClick={()=>setShowMenu(!showMenu)}
                    > <IoMdMenu /> </button> 
                    <div className={"bg-[#000000] fixed top-[0] left-[0] h-[100%] w-[100%] opacity-[0.3] lg:hidden cursor-pointer "
                        +(showMenu?"":"hidden")
                    }
                    onClick={()=>setShowMenu(false)}
                    ></div>                   
                </div>
            </div>
        </>
    );
}
