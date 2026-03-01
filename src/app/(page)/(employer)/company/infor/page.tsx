import { Metadata } from "next";
import {CompanyInforForm} from "@/app/components/companyInfor/companyInforForm"

export const metadata: Metadata = {
    title: "Thông tin công ty",
    description: "Mô tả thông tin công ty",
}

export default function CompanyInfor() {
    
    return (
        <>
            {/* section 7 */}
            <div >
                <div className="container">
                    <div className="mt-[60px] rounded-[8px] p-[20px] text-[#000000]" style={{ border: "1px solid #DEDEDE" }}>
                        <div className="font-[700] text-[20px] ">Thông tin công ty</div>
                        <CompanyInforForm/>
                    </div>
                </div>
            </div>
            {/* end section 7 */}
        </>
    )
}