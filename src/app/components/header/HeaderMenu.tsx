"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export const HeaderMenu = (props:{showMenu:boolean}) => {
    const menu = [
        {
            name: "Việc Làm IT",
            link: "#",
            child: [
                {
                    name: "Việc làm IT theo kỹ năng",
                    link: "#",
                    child: [
                        {
                            name: "ReacJS",
                            link: "#",
                            child: []
                        },
                        {
                            name: "NodeJS",
                            link: "#",
                            child: []
                        },
                        {
                            name: "Javascript",
                            link: "#",
                            child: []
                        },
                        {
                            name: "CS3",
                            link: "#",
                            child: []
                        },
                        {
                            name: "PHP",
                            link: "#",
                            child: []
                        }
                    ]
                },
                {
                    name: "Việc làm IT theo công ty",
                    link: "#",
                    child: [
                        {
                            name: "ReacJS",
                            link: "#",
                            child: []
                        },
                        {
                            name: "NodeJS",
                            link: "#",
                            child: []
                        },
                        {
                            name: "Javascript",
                            link: "#",
                            child: []
                        },
                        {
                            name: "CS3",
                            link: "#",
                            child: []
                        },
                        {
                            name: "PHP",
                            link: "#",
                            child: []
                        }

                    ]
                },
                {
                    name: "Việc làm IT theo thành phố",
                    link: "#",
                    child: [
                        {
                            name: "TP HCM",
                            link: "#",
                            child: []
                        },
                        {
                            name: "Hà Nội",
                            link: "#",
                            child: []
                        },
                        {
                            name: "Đà Nẵng",
                            link: "#",
                            child: []
                        },
                        {
                            name: "Cần Thơ",
                            link: "#",
                            child: []
                        },
                        {
                            name: "Hải Phòng",
                            link: "#",
                            child: []
                        }

                    ]
                }
            ]
        },
        {
            name: "Top Công Ty IT",
            link: "#",
            child: [
                {
                    name: "FPT Software",
                    link: "#",
                    child: []
                },
                {
                    name: "Techcombank",
                    link: "#",
                    child: []
                },
                {
                    name: "MB Bank",
                    link: "#",
                    child: []
                }
            ]
        },
        {
            name: "Nhà Tuyển Dụng",
            link: "#",
            child: [
                {
                    name: "Đăng nhập",
                    link: "#",
                    child: []
                },
                {
                    name: "Đăng ký",
                    link: "#",
                    child: []
                },
            ]
        }
    ]
    const{showMenu}=props;
    
    return <>
        <div className={
            "list gap-[30px] h-[100%] fixed lg:relative bg-[#000065] lg:bg-transparent lg:top-[0] top-[65px] left-[0] lg:flex lg:w-[auto] w-[320px] "
            +"p-[20px_10px_0_20px] lg:p-[0_0_0_0] z-[9999]  "
            +(showMenu?"":"hidden")}>
            {menu.map((item, index) => (
                <div className="inner-list lg:flex relative group/sub1 lg:h-[100%] flex-wrap ">
                    <div className="inner-item flex gap-[5px] items-center flex hover:bg-[#000096] " >                        
                        <div className="inner-text text-[#FFFFFF] font-[600] text-[16px] h-[40px] lg:h-[auto] flex-1"><Link href={item.link}> {item.name}</Link></div>
                        {item.child.length>0&&<FaChevronDown className="text-[#FFFFFF]" />}
                    </div>
                    <ul className="inner-list-down lg:absolute flex top-[100%] left-[0] bg-[#000065] w-[300px] rounded-[4px] group-hover/sub1:block flex-wrap hidden">
                        {item.child.map((item2, index2) => (
                            <li className="flex items-center justify-between lg:relative group/sub2 flex flex-wrap w-[100%] h-[100%]">
                                <div className="flex justify-between items-center flex px-[16px] py-[10px]  hover:bg-[#000096] w-[100%] h-[100%]">
                                    <div className="inner-text text-[#FFFFFF] font-[600] text-[16px]" ><Link href={item2.link}>{item2.name}</Link></div>
                                    {item2.child.length>0&&<FaChevronRight className="text-[#FFFFFF]" />}
                                </div>
                                {item2.child.length>0&& 
                                <ul className="small-list-right lg:absolute flex flex-wrap top-[0] left-[300px] bg-[#000065] w-[280px] rounded-[4px] group-hover/sub2:block hidden ">
                                    {item2.child.map((item3)=>(
                                    <li className="text-[#FFFFFF] font-[600] text-[16px] px-[16px] py-[10px] hover:bg-[#000096]"><Link href={item3.link}>{item3.name}</Link></li>
                                    ))}
                                </ul>}
                            </li>
                        ))}

                    </ul>
                </div>

            ))}
            
        </div>
    </>
}

