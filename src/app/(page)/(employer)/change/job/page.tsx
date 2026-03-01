import { Metadata } from "next";
import Link from "next/link";
import { ChangeJobComponent } from "@/app/components/ChangeJobComponent/ChangeJobComponent"

export const metadata:Metadata={
    title:"Trang thêm, sửa công việc",
    description:" Thêm sửa công việc",
}

export default function ChangeJob(){
    return (
        <>
        {/* section 9 */}
        <div className="mt-[60px]">
            <div className="container">
                <div className="rounded-[8px] p-[20px]" style={{border: "1px solid #DEDEDE"}}>
                    <div className="flex justify-between sm:flex-row flex-col">
                        <div className="font-[700] text-[20px] text-[#000000]">Thêm mới công việc</div>
                        <Link href="#" className="text-[14] font-[400] text-[#0088FF] underline">Quay lại danh sách</Link>
                    </div>
                   <ChangeJobComponent/> 
                </div>
            </div>
        </div>
        {/* end section 9 */}

        </>
    )
}