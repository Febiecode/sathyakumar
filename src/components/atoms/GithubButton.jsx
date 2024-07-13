import React from 'react'
import { Github } from "lucide-react"
import Link from 'next/link';

const GithubButton = ({link}) => {
    return (
        <>
            <Link href={link} target="_blank">
                <button className='border border-1 border-transparent hover:border hover:border-1 hover:border-[#57575787] bg-[#2020238f] rounded-lg cursor-pointer px-4 py-2 flex justify-center'>
                    <Github size={20} /> <span className='text-sm font-semibold sm:text-md lg:text-md ps-2'>Github</span>
                </button>
            </Link>

        </>
    )
}

export default GithubButton