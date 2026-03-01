"use client"
import JustValidate from 'just-validate';
import { useEffect } from 'react';

export const IndividualInfor = () => {
    useEffect(()=>{
        const validate = new JustValidate('#IndividualInforForm',{
            errorFieldStyle:{},
            successFieldStyle:{},
        });
        validate.addField('#fullname',[
            {
                rule: 'required',
                errorMessage:"Vui lòng nhập họ tên",
            },
        ])
        .addField('#email',[
            {
                rule: 'required',
                errorMessage:"Vui lòng nhập email",
            },
            {
                rule: 'email',
                errorMessage:"Email không hợp lệ"
            },
        ])
        .onSuccess((event:any)=>{
            console.log(event.target.fullname.value);
            console.log(event.target.email.value);
            console.log(event.target.phone.value);
            console.log(event.target.avatar.value);
        })
    },[])
    return (
        <>
            <form id="IndividualInforForm"action="" className="mt-[20px] flex flex-col gap-[15px] font-[500] text-[14px] text-[#000000]">
                <div>
                    <label htmlFor="fullname">Họ tên *</label>
                    <input type="text" name="fullname" id="fullname" className="rounded-[4px] w-full p-[14px_20px]" style={{ border: "1px solid #DEDEDE" }} />
                </div>
                <div>
                    <label htmlFor="avatar">Avatar</label>
                    <input type="file" name="avatar" id="avatar" className="rounded-[4px] w-full p-[14px_20px]" style={{ border: "1px solid #DEDEDE" }} />
                </div>
                <div className="w-full grid md:grid-cols-2 gap-[20px]">
                    <div >
                        <label htmlFor="email">Email *</label>
                        <input type="email" name="email" id="email" className="rounded-[4px] w-full p-[14px_20px]" style={{ border: "1px solid #DEDEDE" }} />
                    </div>
                    <div >
                        <label htmlFor="phone">Số điện thoại</label>
                        <input type="text" name="phone" className="rounded-[4px] w-full p-[14px_20px]" style={{ border: "1px solid #DEDEDE" }} />
                    </div>
                </div>
                <button className="rounded-[4px] bg-[#0088FF] p-[14px_20px] w-fit font-[700] text-[16px] text-[#FFFFFF]">Cập nhật</button>
            </form>
        </>
    )
}