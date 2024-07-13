import React from 'react'
import LiveButton from '../atoms/LiveButton'
import GithubButton from '../atoms/GithubButton'
import { CircleDashed } from "lucide-react"
import Link from 'next/link'

const SnapFiltersMetaData = {
    live: "https://www.snapchat.com/add/he_2123",
    images: [
        "/static/snapFilters/eyeLens.svg",
        "/static/snapFilters/makeupLens.svg",
        "/static/snapFilters/scopeCooler.svg",
    ],
    link:[
        "https://www.snapchat.com/lens/d38e3efeca5a49e59be571af526888d7?type=SNAPCODE&metadata=01",
        "https://www.snapchat.com/lens/3a19e296740a4ae7a6284a0684ad3d42?type=SNAPCODE&metadata=01",
        "https://www.snapchat.com/lens/ccf4f1b5c80448c585ae05a7671e0ecc?type=SNAPCODE&metadata=01",
    ],
    title: "Snap Filters",
    description: "",
    keyFeatures: [
        "Accomplished Snap filters proficient in Lens Studio tool",
        "Overall reaches around 26,900plus people and filters should be shared by snap user is 351 count.",
        "From my filters specifically Eye lens filter reached around 25,903 people.",
    ]
}

const SnapFilters = () => {
    return (
        <div className='mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0 mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center justify-between'>
                <div>
                    <h1 className='text-xl font-semibold sm:text-2xl md:text-3xl xl:text-3xl mt-5'>
                        {SnapFiltersMetaData.title}
                    </h1>
                </div>
                <div className='flex justify-start lg:justify-end md:justify-end gap-5 mt-5'>
                    <LiveButton link={SnapFiltersMetaData.live} />
                </div>

            </div>

            <div className='my-5'>
                <div className='flex justify-center flex-wrap gap-5'>
                    {SnapFiltersMetaData.images.map((image, index) => (
                        <Link href={SnapFiltersMetaData.link[index]} target='blank' key={index}>
                            <img src={image} alt="erpAnswerSnap" className='mt-10 rounded-xl border-2 border-[#57575787]' key={index}/>
                        </Link>
                    ))}
                </div>


                <div className='mt-10'>
                    <p className='font-semibold'>{SnapFiltersMetaData.description}</p>

                    <div className='mt-10 space-y-5'>
                        <h1 className='text-lg font-bold sm:text-md md:text-lg lg:text-xl'>Key Features</h1>
                        <ul className='space-y-3 mt-5'>
                            {SnapFiltersMetaData.keyFeatures.map((point,index) => (
                                <li className='flex items-center gap-3' key={index}>
                                    <div className='w-5'>
                                        <CircleDashed size={15} style={{ color: 'purple' }} />
                                    </div>
                                    <p>{point}</p>
                                </li>
                            ))}
                        </ul>

                        <div className=' bg-[#2020238f] p-5 rounded-md border border-1 border-[#57575787] flex flex-col md:flex-row lg:flex-row justify-center items-center'>
                            <div>
                                <h1 className='text-sm font-bold sm:text-sm'>Build with:</h1>
                            </div>
                            <div className='flex space-x-2 ms-2 justify-center items-center'>
                                <Link href={"https://ar.snap.com/download"} target='blank'>
                                    <span className='text-[12px] font-semibold flex  items-center '><img src={"/static/icons/lensStudio.svg"} alt="next.js" width={30} height={30} /> &nbsp;Lens Studio</span>
                                </Link>
                                <Link href={"https://www.snapchat.com/"} target='blank'>
                                    <span className='text-[12px] font-semibold flex items-center '><img src={"/static/icons/snapchat.svg"} alt="vercel" width={25} height={25} /> &nbsp;Snapchat</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SnapFilters