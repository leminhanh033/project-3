import { Metadata } from "next";
import {ManageCard} from "@/app/components/card/ManageCard"

export const metadata: Metadata = {
    title: "Quản lý công việc",
    description: "Quản lý công việc",
}

export default function JobManage() {
    return (
        <>
            <div className="mt-[60px]">
                <div className="container">
                    <div>
                        <div className="mb-[30px] flex sm:justify-between sm:flex-row flex-col ">
                            <div className="font-[700] text-[28px] text-[#121212]">Quản lý công việc</div>
                            <button className="w-fit bg-[#0088FF] rounded-[4px] p-[8px_20px] font-[400] text-[14px] text-[#FFFFFF] cursor-pointer">Thêm mới</button>
                        </div>
                        <ManageCard/>
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