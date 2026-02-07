"use client";
import { useEffect } from "react";
import JustValidate from 'just-validate';


export const ApplyForm = () => {
    useEffect(() => {
        const validator = new JustValidate('#apply-form');
        validator.addField("#fullname", [
            {
                rule: 'required',
                errorMessage: "Vui lòng nhập họ và tên",
            },
        ])
            .addField("#email", [
                {
                    rule: 'required',
                    errorMessage: "Vui lòng nhập Email",
                },
                {
                    rule: 'email',
                    errorMessage: "Email không hợp lệ"
                },
            ])
            .addField("#phonenumber", [
                {
                    rule: 'required',
                    errorMessage: "Vui lòng nhập số điện thoại"
                },
                {
                    rule: 'customRegexp',
                    value: /^(0[3|5|7|8|9])([0-9]{8})$/,
                    errorMessage: "Số điện thoại không hợp lệ",
                }
            ])
            .addField("#file", [
                {
                    rule: 'files',
                    value: {
                        files: {
                            extensions: ['pdf'],
                            types: ['application/pdf'],
                        },
                    },
                    errorMessage: "File được chọn phải là file pdf",
                },
                // {
                //     // validator: (files) => {
                //     //     return files.length > 0;
                //     // },
                //     // errorMessage: "Vui lòng chọn file CV",
                // },
            ])
    })
    return (
        <>
            <div className="mt-[20px] p-[20px] rounded-[8px]" style={{ border: "1px solid #DEDEDE" }}>
                <div className="font-[700] text-[20px]">Ứng tuyển ngay</div>
                <form id="apply-form" action="" className="mt-[20px] flex flex-col gap-[15px] flex-wrap">
                    <div className="font-[500] text-[14px]">
                        <div>Họ tên *</div>
                        <input id="fullname" type="text" className="solid border-[1px] border-[#DEDEDE] w-[100%] rounded-[4px] py-[14px] pl-[20px]" />
                    </div>
                    <div className="font-[500] text-[14px] relative">
                        <div>Email *</div>
                        <input id="email" type="text" className="solid border-[1px] border-[#DEDEDE] w-[100%] rounded-[4px] py-[14px] pl-[20px]" />
                    </div>
                    <div className="font-[500] text-[14px] relative">
                        <div>Số điện thoại *</div>
                        <input id="phonenumber" type="text" className="solid border-[1px] border-[#DEDEDE] w-[100%] rounded-[4px] py-[14px] pl-[20px]" />
                    </div>
                    <div className="font-[500] text-[14px] relative">
                        <div>File CV dạng PDF *</div>
                        <input id="file" type="file" className="solid border-[1px] border-[#DEDEDE] w-[100%] rounded-[4px] py-[14px] pl-[20px]" />
                    </div>
                    <button className="bg-[#0088FF] rounded-[4px] py-[14px] font-[700] text-[16px] text-[#FFFFFF] cursor-pointer">Gửi CV ứng tuyển</button>
                </form>
            </div>
        </>
    )
}