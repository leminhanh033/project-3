"use client";
import { useEffect } from "react";
import JustValidate from 'just-validate';
import { Editor } from '@tinymce/tinymce-react';


export const ChangeJobComponent = () => {
    useEffect(()=>{
        const validate = new JustValidate('#changeJobForm',
            {
                errorFieldCssClass: ['invalid'],
                errorFieldStyle: {},
                successFieldCssClass: ['valid'],
                successFieldStyle: {},
            }
        );
        validate.addField('#jobName', [
            {
                rule: 'required',
                errorMessage:"Vui lòng nhập tên công việc",
            },
            
        ])
        .addField('#imageList', [
            {
                rule: 'minFilesCount',
                value: 1,
                errorMessage:"Vui lòng thêm ảnh"
            },
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
        .onSuccess((event:any)=>{
            console.log(event.target.jobName.value);
            console.log(event.target.level.value);
            console.log(event.target.imageList.value);
            console.log(event.target.workingMethod.value);
        })
    },[])
    return (
        <>
            <form id="changeJobForm"action="" className="mt-[20px] font-[500] text-[14px] text-[#000000] flex flex-col gap-[15px]">
                <div>
                    <label htmlFor="jobName">Tên công việc *</label>
                    <input type="text" id="jobName" className="rounded-[4px] w-full py-[14px] pl-[20px]" style={{ border: "1px solid #DEDEDE" }} />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[20px] gap-y-[15px]">
                    <div>
                        <label htmlFor="min-salary">Mức lương tối thiểu ($)</label>
                        <input type="text" id="min-salary" className="rounded-[4px] w-full py-[14px] pl-[20px]" style={{ border: "1px solid #DEDEDE" }} />
                    </div>
                    <div>
                        <label htmlFor="max-salary">Mức lương tối đa ($)</label>
                        <input type="text" id="max-salary" className="rounded-[4px] w-full py-[14px] pl-[20px]" style={{ border: "1px solid #DEDEDE" }} />
                    </div>
                    <div>
                        <label htmlFor="level">Cấp bậc *</label>
                        <select name="level" id="level" className="rounded-[4px] w-full py-[14px] pl-[20px]" style={{ border: "1px solid #DEDEDE" }}>
                            <option value="Intern">Intern</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="workingMethod">Hình thức làm việc *</label>
                        <select name="working-method" id="workingMethod" className="rounded-[4px] w-full py-[14px] pl-[20px]" style={{ border: "1px solid #DEDEDE" }}>
                            <option value="office">Tại văn phòng</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="tech">Các công nghệ</label>
                    <input type="text" id="tech" className="rounded-[4px] w-full py-[14px] pl-[20px]" style={{ border: "1px solid #DEDEDE" }} />
                </div>
                <div>
                    <label htmlFor="imageList">Danh sách ảnh *</label>
                    <input type="file" id="imageList" multiple className="rounded-[4px] w-full py-[14px] pl-[20px]" style={{ border: "1px solid #DEDEDE" }} />
                </div>
                <div>
                    <label htmlFor="description-detail">Mô tả chi tiết</label>
                    {/* <textarea name="description-detail" id="description-detail" className="rounded-[4px] w-[100%] h-[350px] py-[14px] px-[20px]" style={{ border: "1px solid #DEDEDE" }}></textarea> */}
                    <Editor
                        apiKey='v06d785jy5fehyqosw6ftno5i3euam6i0skpu45gbauste7v'
                        init={{
                            plugins: [
                                'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                                'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'advtemplate', 'uploadcare', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf'
                            ],
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                            tinycomments_mode: 'embedded',
                            tinycomments_author: 'Author name',
                            mergetags_list: [
                                { value: 'First.Name', title: 'First Name' },
                                { value: 'Email', title: 'Email' },
                            ],
                            uploadcare_public_key: 'dfaea850acb7e37962c3',
                        }}
                    />
                </div>
                <button className="bg-[#0088FF] w-fit p-[14px_20px] rounded-[4px] font-[700] text-[16px] text-[#FFFFFF] cursor-pointer">Tạo mới</button>
            </form>
        </>
    )
}