import { Metadata } from "next";

export const metadata:Metadata={
    title:"Thông tin cá nhân",
    description:"Thông tin cá nhân của ứng viên",
}
export default function IndividualInfor(){
    return (
        <>
        <div className="mt-[60px]">
            <div className="container">
                <div className="rounded-[8px] p-[20px]" style={{border: "1px solid #DEDEDE"}}>
                    <div className="font-[700] text-[20px] text-[#000000]">Thông tin cá nhân</div>
                    <form action="" className="mt-[20px] flex flex-col gap-[15px] font-[500] text-[14px] text-[#000000]">
                        <div>
                            <label htmlFor="fullname">Họ tên *</label>
                            <input type="text" id="fullname" className="rounded-[4px] w-full p-[14px_20px]" style={{border: "1px solid #DEDEDE"}} />
                        </div>
                        <div>
                            <label htmlFor="avatar">Avatar</label>
                            <input type="file" id="avatar" className="rounded-[4px] w-full p-[14px_20px]" style={{border: "1px solid #DEDEDE"}} />
                        </div>
                        <div className="w-full grid md:grid-cols-2 gap-[20px]">
                            <div >
                                <label htmlFor="email">Email *</label>
                                <input type="email" id="email" className="rounded-[4px] w-full p-[14px_20px]" style={{border: "1px solid #DEDEDE"}}/>
                            </div>
                            <div >
                                <label htmlFor="phone">Số điện thoại</label>
                                <input type="text" className="rounded-[4px] w-full p-[14px_20px]" style={{border: "1px solid #DEDEDE"}}/>
                            </div>
                        </div>
                        <button className="rounded-[4px] bg-[#0088FF] p-[14px_20px] w-fit font-[700] text-[16px] text-[#FFFFFF]">Cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}