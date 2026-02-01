import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Đăng nhập",
    description: "Trang đăng nhập của nhà tuyển dụng",
}
export default function Register() {
    return (
        <>
            <div className="mt-[60px]">
                <div className="container flex justify-center">
                    <div className="w-[600px] rounded-[8px] p-[50px_20px]" style={{border: "1px solid #DEDEDE"}}>
                        <div className="text-center text-[20px] font-[700] text-[#000000]">Đăng nhập (Nhà tuyển dụng)</div>
                        <form action="" className="mt-[20px] flex flex-col gap-[15px] text-[14px] font-[500] text-[#000000]">
                            <div>
                                <label htmlFor="email">Email *</label>
                                <input type="email" id="email" className="rounded-[4px] w-full p-[14px_20px]" style={{border: "1px solid #DEDEDE"}}/>
                            </div>
                            <div>
                                <label htmlFor="pass">Mật khẩu *</label>
                                <input type="password" id="pass" className="rounded-[4px] w-full p-[14px_20px]" style={{border: "1px solid #DEDEDE"}}/>
                            </div>
                            <button className="rounded-[4px] w-full bg-[#0088FF] p-[14px_20px] text-[16px] font-[700] text-[#FFFFFF] ">Đăng nhập</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}