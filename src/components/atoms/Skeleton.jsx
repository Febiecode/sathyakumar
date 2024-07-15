"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

function Skeleton({project}) {
    const router = useRouter();

    const handleClick = () => {
        router.push(project.route);
    };
    return (
        <>
            <div onClick={handleClick} className='flex justify-center'>
                <div className='border border-1 border-transparent hover:border hover:border-1 hover:border-[#57575787] flex flex-row justify-between items-center gap-5 w-[350px] dark:bg-[#2020238f] bg-[#cfe4ff] rounded-lg cursor-pointer py-2 px-2'>
                    <div className='w-[25%] p-2 bg-[#1f1f22] rounded-md flex justify-center'>
                        <img src={project.imgSrc} className='rounded-full' width={50} height={50} alt="profile" />
                    </div>
                    <div className='w-[65%] flex flex-col text-left space-y-1'>
                        <p className='font-bold capitalize'>{project.title}</p>
                        <p className='text-gray-400 w-40 overflow-hidden overflow-ellipsis whitespace-nowrap'>{project.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skeleton