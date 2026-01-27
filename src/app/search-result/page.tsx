import { Section1 } from "@/app/components/section1/section1"
import { JobCard } from "@/app/components/card/JobCard"

export default function SearchResult() {
    return (
        <>
            <Section1 />

            {/* section 3 */}
            <div className="mt-[60px]">
                <div className="container">
                    <div className="font-[700] text-[28px] flex">
                        <div>76 việc làm</div>
                        <div className="text-[#0088FF]">&nbsp;reactjs</div>
                    </div>
                    <div className="mt-[30px] flex gap-[12px] rounded-[8px] py-[10px] pl-[20px]m flex-wrap"
                        style={{ boxShadow: " 0px 4px 20px 0px #0000000F" }}>
                        <select name="level" id="" className="font-[400] text-[16px] rounded-[20px] py-[8px] px-[18px]"
                            style={{ border: "1px solid #DEDEDE" }}>
                            <option value="">Cấp bậc </option>
                            <option value="intern">Thực tập sinh (Intern)</option>
                            <option value="fresher">Fresher</option>
                            <option value="junior">Junior</option>
                            <option value="senior">Senior</option>
                            <option value="manager">Trưởng phòng (Manager)</option>
                        </select>
                        <select name="" id="" className="font-[400] text-[16px] rounded-[20px] py-[8px] px-[18px]"
                            style={{ border: "1px solid #DEDEDE" }}>
                            <option value="">Hình thức làm việc</option>
                        </select>
                    </div>

                    <JobCard />

                    <div className="mt-[30px] p-[12px_18px] rounded-[8px] w-fit" style={{border: "1px solid #DEDEDE"}}>
                        <select name="" id="" className="font-[400] text-[16px] text-[#414042]">
                            <option value="">Trang 1</option>
                        </select>
                    </div>

                </div>
            </div>

            {/* end section 3 */}
        </>
    );

}