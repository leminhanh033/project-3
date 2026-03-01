import { Metadata } from "next";
import { IndividualInfor } from "@/app/components/IndividualInfor/IndividualInfor";

export const metadata:Metadata={
    title:"Thông tin cá nhân",
    description:"Thông tin cá nhân của ứng viên",
}
export default function IndividualInforPage(){
    return (
        <>
        {/* section 12 */}
        <div className="mt-[60px]">
            <div className="container">
                <div className="rounded-[8px] p-[20px]" style={{border: "1px solid #DEDEDE"}}>
                    <div className="font-[700] text-[20px] text-[#000000]">Thông tin cá nhân</div>
                    <IndividualInfor/>
                </div>
            </div>
        </div>
        {/* section 12 */}

        </>
    )
}