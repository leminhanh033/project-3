import { Metadata } from "next";
import {RegisterEmployee} from"@/app/components/RegisterEmployee/RegisterEmployee"
export const metadata: Metadata = {
    title: "Đăng ký",
    description: "Trang đăng ký của Ứng viên",
}
export default function Register() { 
    return (
        <>
            <div className="mt-[60px]">
                <div className="container flex justify-center">
                    <div className="w-[600px] rounded-[8px] p-[50px_20px]" style={{border: "1px solid #DEDEDE"}}>
                        <div className="text-center text-[20px] font-[700] text-[#000000]">Đăng ký (Ứng viên)</div>
                        <RegisterEmployee/>
                    </div>

                </div>
            </div>
        </>
    )
}