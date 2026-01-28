import { Metadata } from "next"
import {CompanyCard} from "@/app/components/card/company"

export const metadata: Metadata = {
    title: "Danh sách công ty",
    description: "Danh sách công ty",
}

export default function ListCompany() {
    return (
        <>
            <div className="mt-[60px]">
                <div className="container">
                    <div className="font-[700] sm:text-[28px] text-[24px] text-center">
                        Danh sách công ty
                    </div>
                    
                    <CompanyCard/>

                    <div className="mt-[30px] p-[12px_18px] rounded-[8px] w-fit" style={{ border: "1px solid #DEDEDE" }}>
                        <select name="" id="" className="font-[400] text-[16px] text-[#414042]">
                            <option value="">Trang 1</option>
                        </select>
                    </div>

                </div>
            </div>
        </>
    )
}