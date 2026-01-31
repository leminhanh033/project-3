import { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata={
    title:"Trang thêm, sửa công việc",
    description:" Thêm sửa công việc",
}

export default function ChangeJob(){
    return (
        <>
        <div className="mt-[60px]">
            <div className="container">
                <div className="rounded-[8px] p-[20px]" style={{border: "1px solid #DEDEDE"}}>
                    <div className="flex justify-between sm:flex-row flex-col">
                        <div className="font-[700] text-[20px] text-[#000000]">Thêm mới công việc</div>
                        <Link href="#" className="text-[14] font-[400] text-[#0088FF] underline">Quay lại danh sách</Link>
                    </div>
                    <form action="" className="mt-[20px] font-[500] text-[14px] text-[#000000] flex flex-col gap-[15px]">
                        <div>
                            <label htmlFor="job-name">Tên công việc *</label>
                            <input type="text" id="job-name" className="rounded-[4px] w-full py-[14px] pl-[20px]" style={{border: "1px solid #DEDEDE"}} />
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[20px] gap-y-[15px]">
                            <div>
                                <label htmlFor="min-salary">Mức lương tối thiểu ($)</label>
                                <input type="text" id="min-salary" className="rounded-[4px] w-full py-[14px] pl-[20px]" style={{border: "1px solid #DEDEDE"}} />
                            </div>
                            <div>
                                <label htmlFor="max-salary">Mức lương tối đa ($)</label>
                                <input type="text" id="max-salary" className="rounded-[4px] w-full py-[14px] pl-[20px]" style={{border: "1px solid #DEDEDE"}}/>
                            </div>
                            <div>
                                <label htmlFor="level">Cấp bậc *</label>
                                <select name="level" id="level" className="rounded-[4px] w-full py-[14px] pl-[20px]" style={{border: "1px solid #DEDEDE"}}>
                                    <option value="Intern">Intern</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="working-method">Hình thức làm việc *</label>
                                <select name="working-method" id="working-method" className="rounded-[4px] w-full py-[14px] pl-[20px]" style={{border: "1px solid #DEDEDE"}}>
                                    <option value="office">Tại văn phòng</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="tech">Các công nghệ</label>
                            <input type="text" id="tech" className="rounded-[4px] w-full py-[14px] pl-[20px]" style={{border: "1px solid #DEDEDE"}}/>
                        </div>
                        <div>
                            <label htmlFor="image-list">Danh sách ảnh *</label>
                            <input type="file" id="image-list" className="rounded-[4px] w-full py-[14px] pl-[20px]" style={{border: "1px solid #DEDEDE"}}/>
                        </div>
                        <div>
                            <label htmlFor="description-detail">Mô tả chi tiết</label>
                            <textarea name="description-detail" id="description-detail" className="rounded-[4px] w-[100%] h-[350px] py-[14px] px-[20px]" style={{border: "1px solid #DEDEDE"}}></textarea>
                        </div>
                        <button className="bg-[#0088FF] w-fit p-[14px_20px] rounded-[4px] font-[700] text-[16px] text-[#FFFFFF] cursor-pointer">Tạo mới</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}