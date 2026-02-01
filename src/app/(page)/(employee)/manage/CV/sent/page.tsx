import { Metadata } from "next";
import {CardSent} from "@/app/components/CVCard/CardSent";

export const metadata: Metadata = {
    title: "Quản lý CV đã gửi",
    description: "Trang quản lý CV đã gửi",
}

export default function ManageCVSent() {
    return (
        <>
            <div className="mt-[60px]">
                <div className="container">
                    <div>
                        <div className="pl-[16px] sm:pl-[0] font-[700] sm:text-[28px] text-[24px] text-[#121212]">Quản lý CV đã gửi</div>
                        <div className="mt-[20px] grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px] place-items-center">
                            <CardSent/>
                            <CardSent/>
                            <CardSent/>
                            <CardSent/>
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