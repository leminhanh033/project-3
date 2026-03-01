"use client";
import JustValidate from 'just-validate';
import { useEffect } from "react";

export const RegisterEmployee = () => {
    useEffect(() => {
        const validate = new JustValidate('#RegisterEmployeeForm', {
            errorFieldStyle: {},
        });
        validate
            .addField('#name', [
                {
                    rule: 'required',
                    errorMessage: "Vui lòng nhập họ tên"
                },

            ])
            .addField('#email', [
                {
                    rule: 'required',
                    errorMessage: "Vui lòng nhập email"
                },
                {
                    rule: 'email',
                    errorMessage: "Email không hợp lệ"
                },

            ])
            .addField('#pass', [
                {
                    rule: 'required',
                    errorMessage: "Vui lòng nhập mật khẩu"
                },
            ])
            .onSuccess((event: any) => {
                console.log(event.target.name.value);
                console.log(event.target.email.value);
                console.log(event.target.pass.value);
            })
    }, [])
    return <>
        <form id="RegisterEmployeeForm" action="" className="mt-[20px] flex flex-col gap-[15px] text-[14px] font-[500] text-[#000000]">
            <div>
                <label htmlFor="name">Họ tên * </label>
                <input type="text" id="name" className="rounded-[4px] w-full p-[14px_20px]" style={{ border: "1px solid #DEDEDE" }} />
            </div>
            <div>
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" className="rounded-[4px] w-full p-[14px_20px]" style={{ border: "1px solid #DEDEDE" }} />
            </div>
            <div>
                <label htmlFor="pass">Mật khẩu *</label>
                <input type="password" id="pass" className="rounded-[4px] w-full p-[14px_20px]" style={{ border: "1px solid #DEDEDE" }} />
            </div>
            <button className="rounded-[4px] w-full bg-[#0088FF] p-[14px_20px] text-[16px] font-[700] text-[#FFFFFF] ">Đăng ký</button>
        </form>
    </>
}