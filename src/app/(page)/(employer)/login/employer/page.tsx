import { Metadata } from "next";
import {LoginForEmployer} from "@/app/components/LoginForEmployer/LoginForEmployer"
export const metadata: Metadata = {
    title: "Đăng nhập",
    description: "Trang đăng nhập của nhà tuyển dụng",
}
export default function Register() {
    return (
        <>
        {/* section15 */}
            <div className="mt-[60px]">
                <div className="container flex justify-center">
                    <div className="w-[600px] rounded-[8px] p-[50px_20px]" style={{border: "1px solid #DEDEDE"}}>
                        <div className="text-center text-[20px] font-[700] text-[#000000]">Đăng nhập (Nhà tuyển dụng)</div>
                        <LoginForEmployer/>
                    </div>

                </div>
            </div>
        {/* section15 */}

        </>
    )
}