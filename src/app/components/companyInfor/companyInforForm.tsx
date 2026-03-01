"use client";
import { useEffect } from "react";
import JustValidate from 'just-validate';
import { Editor } from '@tinymce/tinymce-react';

export const CompanyInforForm = () => {
    useEffect(() => {
        const validate = new JustValidate('#companyInforForm', {
            errorFieldCssClass: 'is-invalid',
            errorFieldStyle: {},
        });
        validate.addField('#companyName', [
            {
                rule: 'required',
                errorMessage: "Vui lòng nhập tên công ty"
            }
        ]
        )
        .addField('#email', [
            {
                rule: "required",
                errorMessage: "Vui lòng nhập email",
            }
        ])
        .addField('#logo',[
           {
                rule: 'files',
                value: {
                    files: {
                        extensions: ['jpeg', 'jpg', 'png'],
                        types: ['image/jpeg', 'image/jpg', 'image/png'],
                    },
                },
                errorMessage:"Vui lòng chỉ thêm ảnh"
            }, 
        ])
        .onSuccess(( event: any ) => {
            console.log(event.target.companyName.value);
            console.log(event.target.email.value);
        })

    }, [])
    return (
        <>
            <form id="companyInforForm" className="mt-[20px] flex flex-col gap-[15px]">
                <div className="font-[500] text-[14px]">
                    <div>Tên công ty *</div>
                    <input id="companyName" type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{ border: "1px solid #DEDEDE" }} />
                </div>
                <div className="font-[500] text-[14px]">
                    <div>Logo</div>
                    <input id="logo" type="file" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{ border: "1px solid #DEDEDE" }} />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[15px] gap-x-[20px] font-[500] text-[14px]">
                    <div>
                        <div>Thành phố</div>
                        <select name="city" id="" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{ border: "1px solid #DEDEDE" }}>
                            <option value="Hà Nội"> Hà Nội</option>
                        </select>
                    </div>
                    <div>
                        <div>Địa chỉ</div>
                        <input type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{ border: "1px solid #DEDEDE" }} />
                    </div>
                    <div>
                        <div>Mô hình công ty</div>
                        <input type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{ border: "1px solid #DEDEDE" }} />
                    </div>
                    <div>
                        <div>Quy mô công ty</div>
                        <input type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{ border: "1px solid #DEDEDE" }} />
                    </div>
                    <div>
                        <div>Thời gian làm việc</div>
                        <input type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{ border: "1px solid #DEDEDE" }} />
                    </div>
                    <div>
                        <div>Làm việc ngoài giờ</div>
                        <input type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{ border: "1px solid #DEDEDE" }} />
                    </div>
                    <div>
                        <div>Email*</div>
                        <input id="email" type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{ border: "1px solid #DEDEDE" }} />
                    </div>
                    <div>
                        <div>Số điện thoại</div>
                        <input type="text" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] " style={{ border: "1px solid #DEDEDE" }} />
                    </div>
                </div>
                <div className="font-[500] text-[14px]">
                    <div >Mô tả chi tiết</div>
                    {/* <textarea name="" id="" className="py-[14px] pl-[20px] rounded-[4px] w-[100%] h-[350px] " style={{ border: "1px solid #DEDEDE" }}></textarea> */}
                    <Editor
                        apiKey='gfyrsc4o67q5i34ffejb4oy52a599h21n2mdikbdtuw5qtc8'
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount',
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </div>
                <button className="w-fit rounded-[4px] bg-[#0088FF] p-[14px_20px] text-[16px] font-[700] text-[#FFFFFF]">Cập nhật</button>
            </form>
        </>
    )
}