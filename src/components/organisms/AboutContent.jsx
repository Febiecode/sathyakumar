import React from 'react'
import { CircleDashed } from "lucide-react"

const AboutContent = () => {
    return (
        <>
            <main>
                <div className='mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0'>
                    <main className='mb-auto'>
                        <div className="pt-8">
                            <div>

                            </div>
                            <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">

                                <div className="text-center sm:text-left space-y-3">
                                    <h1 className="text-xl font-bold md:text-3xl lg:text-4xl text-primary">Sathyakumar</h1>
                                    <h2 className="text-sm md:text-base font-semibold dark:text-h1Subtitle text-muteGray">Junior Software Developer at <span className="font-semibold">RapidSoft</span></h2>
                                </div>
                                <div>
                                    <img alt="Sathyakumar" loading="lazy" width="130" height="130" decoding="async" data-nimg="1" className="rounded-full object-scale-down grayscale" src="https://avatars.githubusercontent.com/u/93641901?v=4" style={{ color: "transparent" }} />
                                </div>
                            </div>
                            <div className=" max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
                                <p className='mb-8 text-lg sm:text-md text-wrap dark:text-h1Subtitle text-muteGray'>
                                    I am a Software Developer with a strong focus on developing web using Next.js and Tailwind CSS, and integrating API endpoints for seamless functionality. At <a target="_blank" rel="noopener noreferrer" href="https://rapidsoft.net/" className="font-bold"><span className='line'>RapidSoft</span></a> , I contributed to key projects like ERPAnswers, a customer support application, and Naiduhall Dashboard, a management tool. I also have experience mentoring interns and trainees, enhancing their programming skills at <a target="_blank" rel="noopener noreferrer" href="https://www.infogrotech.com/" className="line font-bold">Infogrotech</a>. I am committed to delivering efficient and innovative software solutions.</p>

                                <p id="timeline" className='text-lg font-bold md:text-xl lg:text-2xl my-10 dark:text-h2'>Timeline</p>

                                {/* 2024 */}
                                <h3 id="2024" className='text-md font-bold md:text-lg lg:text-xl my-10'>2024</h3>
                                <div className='space-y-3 text-sm font-normal md:text-base dark:text-h3Subpoints text-muteGray'>
                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: '#004AAD' }} />
                                        </div>
                                        <p>Started a job as Junior Software Developer at <a target="_blank" rel="noopener noreferrer" href="https://rapidsoft.net/" className=" font-bold"> <span className='line'>RapidSoft Solutions</span></a></p></li>

                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: '#004AAD' }} />
                                        </div>
                                        <p>Learned how to develop a web application using  <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/" className="font-bold"> Next.js</a> and <a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/" className="font-bold"><span className='line'> Tailwind CSS</span></a>
                                        </p>

                                    </li>

                                    <li className='flex items-center gap-3'><div className='w-5'>
                                        <CircleDashed size={15} style={{ color: '#004AAD' }} />
                                    </div><p>Learned how to integrate the api using <span className="line font-bold">Axios</span></p></li>

                                    <li className='flex items-center gap-3'><div className='w-5'>
                                        <CircleDashed size={15} style={{ color: '#004AAD' }} />
                                    </div><p> Worked as full-time remote job</p></li>

                                    <li className='flex items-center gap-3'><div className='w-5'>
                                        <CircleDashed size={15} style={{ color: '#004AAD' }} />
                                    </div><p className='leading-7'> Worked on projects such as <a rel="noopener noreferrer" href={"/projects/erp-answers"} className="font-bold"><span className='line'> ERPAnswers</span></a>(customer support platform) and <a rel="noopener noreferrer" href={"/projects/naiduhall"} className="font-bold"><span className='line'> Naiduhall Dashboard</span></a></p></li>

                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: '#004AAD' }} />
                                        </div>
                                        <p>
                                            One of my workshop is now part of the Don Bosco College 
                                            <a rel="noopener noreferrer" target='blank' href="https://media.licdn.com/dms/image/D5622AQEllXkopXZ8gg/feedshare-shrink_1280/0/1709294152226?e=1723680000&v=beta&t=caS-ogM3ymsPgT74UEkMLp41xLk9E563HogwU9WfJCA"> <span className='line'>Magazine</span>!</a>
                                        </p>
                                    </li>
                                </div>
                                <br />
                                <br />
                                <hr />

                                {/* 2023 */}
                                <h3 id="2023" className='text-md font-bold md:text-lg lg:text-xl my-10'>2023</h3>
                                <div className='space-y-3 text-sm font-normal md:text-base dark:text-h3Subpoints text-muteGray'>
                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: '#004AAD' }} />
                                        </div>
                                        <p>I was Technical Support as well as Trainer at <a target="_blank" rel="noopener noreferrer" href="https://www.infogrotech.com/" className=" font-bold"> <span className='line'>Infogro Technology</span></a></p></li>

                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: '#004AAD' }} />
                                        </div>
                                        <p>Conducted a PHP<a className="font-bold" rel="noopener noreferrer" href={"/gallery"}> <span className="line">Workshop</span></a> for BCA students at <a target="_blank" rel="noopener noreferrer" href="https://www.dgvaishnavcollege.edu.in/" className="line font-bold"> DG Vaishnava</a> , collaborate with Infogro Technology</p>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: '#004AAD' }} />
                                        </div>
                                        <p>Learned
                                            <a target="_blank" rel="noopener noreferrer" href="https://react.dev/" className="font-bold"> <span className='line'>React.js</span></a> ,
                                            <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/" className=" font-bold"> <span className='line'>Next.js</span></a> ,
                                            <a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/" className="font-bold"> <span className='line'>Tailwind CSS</span></a>
                                        </p>
                                    </li>




                                </div>

                                <br />
                                <br />
                                <hr />

                                {/* 2022 */}
                                <h3 id="2022" className='text-md font-bold md:text-lg lg:text-xl my-10'>2022</h3>
                                <div className='space-y-3 text-sm font-normal md:text-base dark:text-h3Subpoints text-muteGray'>
                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: '#004AAD' }} />
                                        </div>
                                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.infogrotech.com/" className="font-bold"><span className='line'> Infogro Technology</span></a> hired me as a web developer intern. I tasked to do Student Registration form
                                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/infogrotech/Registeration-Form" className="font-bold"> <span className='line'>Project</span></a>
                                        </p>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: '#004AAD' }} />
                                        </div>
                                        <p> Learned Version Control System, PHP, cPanel hosting.
                                        </p>
                                    </li>
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