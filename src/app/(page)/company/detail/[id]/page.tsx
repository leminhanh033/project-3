import { Metadata } from "next"
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";
import { MdPlace } from "react-icons/md";
import {JobCard} from "@/app/components/card/JobCard"

export const metadata: Metadata = {
    title: "Chi tiết công ty",
    description: "Chi tiết công ty",
}
export default function CompanyDetail() {
    return (
        <>
            <div className="mt-[30px]">
                <div className="container">
                    <div className="right w-[100%] rounded-[8px] p-[20px] " style={{ border: "1px solid #DEDEDE" }}>
                        <div className="flex gap-[12px] flex-col sm:flex-row">
                            <img src="/images/right-detail-image.png" alt="" className="h-[100px] w-[100px] rounded-[4px]" />
                            <div>
                                <div className="font-[700] text-[18px]">LG CNS Việt Nam</div>
                                <div className="font-[400] text-[14px] text-[#121212] flex gap-[8px] items-center">
                                    <MdPlace className="text-[18px]"/>
                                    <div>Tầng 15, tòa Keangnam Landmark 72, Mễ Trì, Nam Tu Liem, Ha Noi</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[20px] font-[400] text-[16px]">
                            <div className="flex ">
                                <div className="text-[#A6A6A6]">Mô hình công ty: &nbsp;</div>
                                <div className="text-[#121212]">Sản phẩm</div>
                            </div>
                            <div className="flex ">
                                <div className="text-[#A6A6A6]">Quy mô công ty:&nbsp;</div>
                                <div className="text-[#121212]">151 - 300 nhân viên</div>
                            </div>
                            <div className="flex ">
                                <div className="text-[#A6A6A6]">Thời gian làm việc:&nbsp;</div>
                                <div className="text-[#121212]">Thứ 2 - Thứ 6</div>
                            </div>
                            <div className="flex ">
                                <div className="text-[#A6A6A6]">Làm việc ngoài giờ:&nbsp;</div>
                                <div className="text-[#121212]">Không có OT</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[20px] p-[20px] rounded-[8px]" style={{ border: "1px solid #DEDEDE" }}>
                        <div>
                            <div className="font-[700] text-[20px] text-[#000000]">What is Lorem Ipsum?</div>
                            <div className="font-[400] text-[14px] text-[#000000]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        </div>
                    </div>
                    <div className="mt-[30px]">
                        <div className="font-[700] text-[28px] text-[#121212]">Công ty có 6 việc làm</div>
                        <JobCard/>
                    </div>
                </div>
            </div>
        </>
    )
}