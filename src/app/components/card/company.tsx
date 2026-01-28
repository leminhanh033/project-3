import Link from "next/link"
import { FaUserTie } from "react-icons/fa";

export const CompanyCard=()=> {
    const list = [
        {
            name: "LG Electronics Development Vietnam (LGEDV)",
            link: "#",
            image: "/images/LG-image.png"
        },
        {
            name: "MB Bank",
            link: "#",
            image: "/images/MB-image.png"
        },
        {
            name: "FPT Software",
            link: "#",
            image: "/images/FPT-image.png"
        },
         {
            name: "LG Electronics Development Vietnam (LGEDV)",
            link: "#",
            image: "/images/LG-image.png"
        },
        {
            name: "MB Bank",
            link: "#",
            image: "/images/MB-image.png"
        },
        {
            name: "FPT Software",
            link: "#",
            image: "/images/FPT-image.png"
        },
    ]
    return (
        <>
            <div className="mt-[30px] grid lg:grid-cols-3 grid-cols-2 gap-y-[20px] sm:gap-x-[20px] gap-x-[10px] items-stretch ">
                {
                    list.map((item) => (
                        <div className="pt-[32px] flex flex-col items-center gap-[24px] relative rounded-[8px] overflow-hidden h-full"
                            style={{ background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)" }}>

                            <img src="/images/Frame.png" alt="" className="absolute top-[0] left-[0] " />

                            <div className="relative md:h-[160px] md:w-[160px] h-[125px] w-[125px] rounded-[8px] px-[10px] flex items-center bg-[#FFFFFF]"
                                style={{ boxShadow: "0px 4px 24px 0px #0000001F" }}>
                                <Link href={item.link}>
                                    <img src={item.image} alt="" />
                                </Link>
                            </div>

                            <div className="font-[700] md:text-[18px] text-[14px] text-center px-[16px] line-clamp-2">
                                <Link href="#">{item.name}</Link>
                            </div>

                            <div className="mt-[auto] flex sm:flex-row flex-col justify-between items-center w-[100%] py-[12px] px-[16px] bg-[#F7F7F7]">
                                <div className="font-[400] text-[14px] text-[#414042]">Ho Chi Minh</div>
                                <div className="flex items-center gap-[2px]">
                                    <FaUserTie className="text-[#000096] text-[16px] " />
                                    <div className="font-[400] text-[14px] ">5 Việc làm</div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    );
}