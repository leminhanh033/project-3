import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thông tin công ty",
    description: "Mô tả thông tin công ty",
}

export default function CompanyInfor() {
    return (
        <>
            {/* section4 */}
            <div >
                <div className="container">
                    <div className="mt-[60px] rounded-[8px] p-[20px] text-[#000000]" style={{ border: "1px solid #DEDEDE" }}>
                        <div className="font-[700] text-[20px] ">Thông tin công ty</div>
                        <form action="" className="mt-[20px] flex flex-col gap-[15px]">
                            <div className="font-[500] text-[14px]">
                                <div>Tên công ty *</div>
                                <input type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{border: "1px solid #DEDEDE"}} />
                            </div>
                            <div className="font-[500] text-[14px]">
                                <div>Logo</div>
                                <input type="file" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{border: "1px solid #DEDEDE"}} />
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[15px] gap-x-[20px] font-[500] text-[14px]">
                                <div>
                                    <div>Thành phố</div>
                                    <select name="city" id="" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{border: "1px solid #DEDEDE"}}>
                                        <option value="Hà Nội"> Hà Nội</option>
                                    </select>
                                </div>
                                <div>
                                    <div>Địa chỉ</div>
                                    <input type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{border: "1px solid #DEDEDE"}}/>
                                </div>
                                <div>
                                    <div>Mô hình công ty</div>
                                    <input type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{border: "1px solid #DEDEDE"}}/>
                                </div>
                                <div>
                                    <div>Quy mô công ty</div>
                                    <input type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{border: "1px solid #DEDEDE"}} />
                                </div>
                                <div>
                                    <div>Thời gian làm việc</div>
                                    <input type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{border: "1px solid #DEDEDE"}}/>
                                </div>
                                <div>
                                    <div>Làm việc ngoài giờ</div>
                                    <input type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{border: "1px solid #DEDEDE"}}/>
                                </div>
                                <div>
                                    <div>Email*</div>
                                    <input type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{border: "1px solid #DEDEDE"}}/>
                                </div>
                                <div>
                                    <div>Số điện thoại</div>
                                    <input type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{border: "1px solid #DEDEDE"}}/>
                                </div>
                            </div>
                            <div className="font-[500] text-[14px]">
                                <div >Mô tả chi tiết</div>
                                <textarea name="" id="" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] h-[350px] " style={{border: "1px solid #DEDEDE"}}></textarea>
                            </div>
                            <button className="w-fit rounded-[4px] bg-[#0088FF] p-[14px_20px] text-[16px] font-[700] text-[#FFFFFF]">Cập nhật</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* end section4 */}
        </>
    )
}