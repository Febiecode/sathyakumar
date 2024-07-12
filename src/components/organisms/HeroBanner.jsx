import React from 'react'
import { MoveDown, ChevronRight } from "lucide-react"
import SwirlMouseEffect from '../atoms/SwirlMouseEffect'


const HeroBanner = () => {

    return (
        <>
            <main>
                <SwirlMouseEffect />
                <div className='relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]'>
                    <div className='flex cursor-default flex-col space-y-3 absolute top-[180px]'>
                        <h1 className='text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl'>Sathyakumar</h1>
                        <h2 className='text-3xl font-medium opacity-80 sm:text-6xl md:text-6xl xl:text-7xl'>I build things for the web.</h2>
                        <a href="/about" className='flex items-center horizontal-underline text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl'>Read more about me <ChevronRight/></a>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform md:bottom-8 move-down-animation">
                        <div className='flex cursor-pointer flex-col items-center justify-center'>
                            <a href="#gallery"><MoveDown size={20} /></a>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default HeroBanner