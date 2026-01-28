import { Metadata } from "next"
import Link from "next/link";
import { FaUserTie } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";

export const metadata: Metadata = {
    title: "Chi tiết công việc",
    description: "Mô tả trang chi tiết công việc...",
}

export default function JobDetail() {
    return (
        <>
            <div className="mt-[30px]">
                <div className="container flex lg:flex-row flex-col gap-[30px] items-start">
                    <div className="left flex-1">
                        <div className="p-[20px] rounded-[8px]" style={{ border: "1px solid #DEDEDE" }}>
                            <div className="font-[700] text-[28px]">Front End Developer ( Javascript, ReactJS)</div>
                            <div className="mt-[10px] font-[400] text-[#414042] text-[14px]">LG CNS Việt Nam</div>
                            <div className="mt-[10px] font-[700] text-[20px] text-[#0088FF]">1.000$ - 1.500$</div>
                            <button className="mt-[20px] bg-[#0088FF] rounded-[4px] w-[100%] py-[14px] font-[700] text-[16px] text-[#FFFFFF] cursor-pointer">Ứng tuyển</button>
                            <div className="mt-[20px] grid grid-cols-3 gap-[16px] w-[100%] ">
                                <img src="/images/job-detail-image-1.png " alt="" className="rounded-[4px] object-contain " />
                                <img src="/images/job-detail-image-2.png " alt="" className="rounded-[4px] object-contain" />
                                <img src="/images/job-detail-image-3.png " alt="" className="rounded-[4px] object-contain" />
                            </div>
                            <div className="mt-[20px] flex flex-col gap-[10px] font-[400] text-[14px]">
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
                                    <div>Tầng 15, tòa Keangnam Landmark 72, Mễ Trì, Nam Tu Liem, Ha Noi</div>
                                </div>
                            </div>
                            <div className="mt-[10px] flex gap-[8px] font-[400] text-[12px] text-[#414042]">
                                <div className="rounded-[20px] p-[6px_16px]" style={{ border: "1px solid #DEDEDE" }}>ReactJS</div>
                                <div className="rounded-[20px] p-[6px_16px]" style={{ border: "1px solid #DEDEDE" }}>NextJS</div>
                                <div className="rounded-[20px] p-[6px_16px]" style={{ border: "1px solid #DEDEDE" }}>Javascript</div>
                            </div>

                        </div>
                        <div className="mt-[20px] p-[20px] rounded-[8px]" style={{ border: "1px solid #DEDEDE" }}>
                            <div>
                                <div className="font-[700] text-[20px] text-[#000000]">What is Lorem Ipsum?</div>
                                <div className="font-[400] text-[14px] text-[#000000]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                            </div>
                        </div>

                        <div className="mt-[20px] p-[20px] rounded-[8px]" style={{ border: "1px solid #DEDEDE" }}>
                            <div className="font-[700] text-[20px]">Ứng tuyển ngay</div>
                            <form action="" className="mt-[20px] flex flex-col gap-[15px]">
                                <div className="font-[500] text-[14px]">
                                    <div>Họ tên *</div>
                                    <input type="text" className="w-[100%] rounded-[4px] py-[14px] pl-[20px]" style={{ border: "1px solid #DEDEDE" }} />
                                </div>
                                <div className="font-[500] text-[14px]">
                                    <div>Email *</div>
                                    <input type="text" className="w-[100%] rounded-[4px] py-[14px] pl-[20px]" style={{ border: "1px solid #DEDEDE" }} />
                                </div>
                                <div className="font-[500] text-[14px]">
                                    <div>Số điện thoại *</div>
                                    <input type="text" className="w-[100%] rounded-[4px] py-[14px] pl-[20px]" style={{ border: "1px solid #DEDEDE" }} />
                                </div>
                                <div className="font-[500] text-[14px]">
                                    <div>File CV dạng PDF *</div>
                                    <input type="file" className="w-[100%] rounded-[4px] py-[14px] pl-[20px]" style={{ border: "1px solid #DEDEDE" }} />
                                </div>
                                <button className="bg-[#0088FF] rounded-[4px] py-[14px] font-[700] text-[16px] text-[#FFFFFF] cursor-pointer">Gửi CV ứng tuyển</button>
                            </form>
                        </div>
                    </div>

                    <div className="right lg:w-[395px] w-[100%] rounded-[8px] p-[20px] " style={{ border: "1px solid #DEDEDE" }}>
                        <div className="flex gap-[12px]">
                            <img src="/images/right-detail-image.png" alt="" className="h-[100px] w-[100px] rounded-[4px]"/>
                            <div>
                                <div className="font-[700] text-[18px]">LG CNS Việt Nam</div>
                                <Link href="#" className="flex items-center gap-[8px] font-[400] text-[16px] text-[#0088FF] cursor-pointer">
                                    <div>Xem công ty</div>
                                    <GrFormNextLink className="text-[24px]"/>
                                </Link>
                            </div>                            
                        </div>
                        <div className="mt-[20px] font-[400] text-[16px]">
                                <div className="flex justify-between">
                                    <div className="text-[#A6A6A6]">Mô hình công ty</div>
                                    <div className="text-[#121212]">Sản phẩm</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-[#A6A6A6]">Quy mô công ty</div>
                                    <div className="text-[#121212]">151 - 300 nhân viên</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-[#A6A6A6]">Thời gian làm việc</div>
                                    <div className="text-[#121212]">Thứ 2 - Thứ 6</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-[#A6A6A6]">Làm việc ngoài giờ</div>
                                    <div className="text-[#121212]">Không có OT</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}