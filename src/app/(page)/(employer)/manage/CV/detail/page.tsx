import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Chi tiết CV",
}

export default function CVDetail() {
    return (
        <>
            <div className="mt-[60px]">
                <div className="container">
                    <div  >
                        <div className="p-[20px] rounded-[8px]" style={{border: "1px solid #DEDEDE"}}>
                            <div className="flex justify-between flex-wrap">
                                <div className="font-[700] text-[20px] text-[#000000]">Thông tin CV</div>
                                <Link href="#" className="font-[400] text-[14px] text-[#0088FF] underline">Quay lại danh sách</Link>
                            </div>
                            <div className="mt-[20px] flex flex-col gap-[10px] text-[16px] font-[400] text-[#000000]">
                                <div >
                                    <span>Họ tên: </span>
                                    <span className="font-[500]">&nbsp;Lê Văn A</span>
                                </div>

                                <div >
                                    <span>Email: </span>
                                    <span className="font-[500]">&nbsp;levana@gmail.com</span>
                                </div>
                                <div >
                                    <span>Số điện thoại: </span>
                                    <span className="font-[500]">&nbsp;0123456789</span>
                                </div>
                                <div>
                                    <div>File CV:</div>
                                    <input type="file" className="mt-[10px] h-[736px] w-[100%] bg-[#D9D9D9]"/>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[20px] p-[20px] rounded-[8px]" style={{border: "1px solid #DEDEDE"}}>
                            <div className="font-[700] text-[20px] text-[#000000]">Thông tin công việc</div>
                            <div className="mt-[20px] flex flex-col gap-[10px] font-[400] text-[16px]">
                                <div >
                                    <span>Tên công việc: </span>
                                    <span className="font-[500]">&nbsp;Frontend Engineer (ReactJS)</span>
                                </div>
                                <div>
                                    <span>Mức lương:  </span>
                                    <span className="font-[500]">&nbsp;1.000$ - 1.500$</span>
                                </div>
                                <div >
                                    <span >Cấp bậc:  </span>
                                    <span className="font-[500]">&nbsp;Fresher</span>
                                </div>
                                <div >
                                    <span>Hình thức làm việc: </span>
                                    <span className="font-[500]">&nbsp;Tại văn phòng  </span>
                                </div>
                                <div >
                                    <span>Công nghệ:   </span>
                                    <span className="font-[500]">&nbsp;HTML5, CSS3, Javascript, ReactJS</span>
                                </div>
                                <div className="font-[400] text-[14px] text-[#0088FF] underline">Xem chi tiết công việc</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}