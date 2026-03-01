import { Metadata } from "next";
import {LoginEmployee} from "@/app/components/LoginEmployee/LoginEmployee"
export const metadata: Metadata = {
    title: "Đăng nhập",
    description: "Trang đăng nhập của Ứng viên",
}
export default function Register() {
    return (
        <>
            <div className="mt-[60px]">
                <div className="container flex justify-center">
                    <div className="w-[600px] rounded-[8px] p-[50px_20px]" style={{border: "1px solid #DEDEDE"}}>
                        <div className="text-center text-[20px] font-[700] text-[#000000]">Đăng nhập (Ứng viên)</div>
                        <LoginEmployee/>
                    </div>

                </div>
            </div>
        </>
    )
}