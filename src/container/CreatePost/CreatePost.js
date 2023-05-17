import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {

    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote", "link", "image", "video"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
    ],
};
const CreatePost = () => {
    const [value, setValue] = useState("");
    return (
        <div className='relative px-14 h-screen'>
            <div className='flex flex-row justify-center h-full w-full items-center'>
                <div className='relative h-full w-[60%] flex flex-col overflow-scroll'>
                    <div className=''>
                        <input placeholder='Tittle' className='w-full h-[100px] placeholder:text-[35px] outline-none placeholder:font-bold' />
                    </div>
                    <ReactQuill className='h-auto w-[100%]'
                        theme="snow"
                        value={value}
                        onChange={setValue}
                        modules={modules}
                    />
                </div>
                <div className='relative h-full w-[50%] flex flex-col border-l border-solid border-black p-[10px] overflow-scroll pt-[150px]'
                    dangerouslySetInnerHTML={{ __html: value }}>
                </div>
            </div>
        </div>

    )
}

export default CreatePost