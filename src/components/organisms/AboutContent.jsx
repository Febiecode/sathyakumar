import React from 'react'
import { CircleDashed } from "lucide-react"

const AboutContent = () => {
    return (
        <>
            <main>
                <div className='mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0'>
                    <main className='mb-auto'>
                        <div className="pt-8">
                            <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
                                <div className="text-center sm:text-left space-y-3">
                                    <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">Sathyakumar</h1>
                                    <h2 className="text-sm font-normal md:text-base">Junior Software Developer at <span className="font-semibold">RapidSoft</span></h2>
                                </div>
                                <div>
                                    <img alt="Dale Larroder" loading="lazy" width="130" height="130" decoding="async" data-nimg="1" className="rounded-full object-scale-down grayscale" src="https://media.istockphoto.com/id/639085642/vector/user-sign-icon-person-symbol-human-avatar.jpg?s=612x612&w=0&k=20&c=n4Zr1A7GMVTY8rZztu_OnMQ4_dkLBLRRAcTb0IIbQfY=" style={{ color: "transparent" }} />
                                </div>
                            </div>
                            <div className=" max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
                                <p className='mb-8 text-sm font-normal md:text-base text-wrap'>
                                    I am a Software Developer with a strong focus on developing web using Next.js and Tailwind CSS, and integrating API endpoints for seamless functionality. At <a target="_blank" rel="noopener noreferrer" href="https://rapidsoft.net/" className="horizontal-underline font-bold">RapidSoft</a> , I contributed to key projects like ERPAnswers, a customer support application, and Naiduhall Dashboard, a management tool. I also have experience mentoring interns and trainees, enhancing their programming skills at <a target="_blank" rel="noopener noreferrer" href="https://www.infogrotech.com/" className="horizontal-underline font-bold">Infogrotech</a>. I am committed to delivering efficient and innovative software solutions.</p>

                                <p id="timeline" className='text-lg font-bold md:text-xl lg:text-2xl my-10 '>Timeline</p>
                                <h3 id="2024" className='text-md font-bold md:text-lg lg:text-xl my-10'>2024</h3>
                                <div className='space-y-3 text-sm font-normal md:text-base'>
                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: 'purple' }} />
                                        </div>
                                        <p>Started a job as Junior Software Developer at <a target="_blank" rel="noopener noreferrer" href="https://rapidsoft.net/" className="horizontal-underline font-bold"> RapidSoft Solutions</a></p></li>

                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: 'purple' }} />
                                        </div>
                                        <p>Learnt how to develop a web application using  <span className="horizontal-underline font-bold">Next.js</span> and <span className="horizontal-underline font-bold">Tailwind CSS</span>
                                        </p>

                                    </li>

                                    <li className='flex items-center gap-3'><div className='w-5'>
                                        <CircleDashed size={15} style={{ color: 'purple' }} />
                                    </div><p>Learned how to integrate the api using <span className="horizontal-underline font-bold">Axios</span></p></li>

                                    <li className='flex items-center gap-3'><div className='w-5'>
                                        <CircleDashed size={15} style={{ color: 'purple' }} />
                                    </div><p> Worked as full-time remote job</p></li>

                                    <li className='flex items-center gap-3'><div className='w-5'>
                                        <CircleDashed size={15} style={{ color: 'purple' }} />
                                    </div><p className='leading-7'> Worked on projects such as <span className="horizontal-underline font-bold">ERP-Answers</span>(customer support platform) and <span className="horizontal-underline font-bold">Naiduhall Dashboard</span></p></li>
                                </div>
                            </div>

                        </div>
                    </main>
                </div>
            </main>
        </>
    )
}

export default AboutContent