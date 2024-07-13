import React from 'react'
import { CircleDashed } from "lucide-react"
import Footer from './Footer'

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
                                    <h2 className="text-sm md:text-base font-semibold text-h1Subtitle">Junior Software Developer at <span className="font-semibold">RapidSoft</span></h2>
                                </div>
                                <div>
                                    <img alt="Sathyakumar" loading="lazy" width="130" height="130" decoding="async" data-nimg="1" className="rounded-full object-scale-down grayscale" src="https://avatars.githubusercontent.com/u/93641901?v=4" style={{ color: "transparent" }} />
                                </div>
                            </div>
                            <div className=" max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
                                <p className='mb-8 text-lg text-wrap text-h1Subtitle'>
                                    I am a Software Developer with a strong focus on developing web using Next.js and Tailwind CSS, and integrating API endpoints for seamless functionality. At <a target="_blank" rel="noopener noreferrer" href="https://rapidsoft.net/" className="horizontal-underline font-bold">RapidSoft</a> , I contributed to key projects like ERPAnswers, a customer support application, and Naiduhall Dashboard, a management tool. I also have experience mentoring interns and trainees, enhancing their programming skills at <a target="_blank" rel="noopener noreferrer" href="https://www.infogrotech.com/" className="horizontal-underline font-bold">Infogrotech</a>. I am committed to delivering efficient and innovative software solutions.</p>

                                <p id="timeline" className='text-lg font-bold md:text-xl lg:text-2xl my-10 text-h2'>Timeline</p>

                                {/* 2024 */}
                                <h3 id="2024" className='text-md font-bold md:text-lg lg:text-xl my-10 text-h3'>2024</h3>
                                <div className='space-y-3 text-sm font-normal md:text-base text-h3Subpoints'>
                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: 'purple' }} />
                                        </div>
                                        <p>Started a job as Junior Software Developer at <a target="_blank" rel="noopener noreferrer" href="https://rapidsoft.net/" className="horizontal-underline font-bold"> RapidSoft Solutions</a></p></li>

                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: 'purple' }} />
                                        </div>
                                        <p>Learned how to develop a web application using  <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/" className="horizontal-underline font-bold"> Next.js</a> and <a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/" className="horizontal-underline font-bold"> Tailwind CSS</a>
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
                                    </div><p className='leading-7'> Worked on projects such as <a rel="noopener noreferrer" href={"/projects/erp-answers"} className="horizontal-underline font-bold"> ERPAnswers</a>(customer support platform) and <a rel="noopener noreferrer" href={"/projects/naiduhall"} className="horizontal-underline font-bold"> Naiduhall Dashboard</a></p></li>

                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: 'purple' }} />
                                        </div>
                                        <p>
                                            One of my workshop is now part of the Don Bosco College
                                            <a className='horizontal-underline' rel="noopener noreferrer" target='blank' href="https://media.licdn.com/dms/image/D5622AQEllXkopXZ8gg/feedshare-shrink_1280/0/1709294152226?e=1723680000&v=beta&t=caS-ogM3ymsPgT74UEkMLp41xLk9E563HogwU9WfJCA"> Magazine!</a>
                                        </p>
                                    </li>
                                </div>
                                <br />
                                <br />
                                <hr />

                                {/* 2023 */}
                                <h3 id="2023" className='text-md font-bold md:text-lg lg:text-xl my-10'>2023</h3>
                                <div className='space-y-3 text-sm font-normal md:text-base text-h3Subpoints'>
                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: 'purple' }} />
                                        </div>
                                        <p>I was Technical Support as well as Trainer at <a target="_blank" rel="noopener noreferrer" href="https://www.infogrotech.com/" className="horizontal-underline font-bold"> Infogro Technology</a></p></li>

                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: 'purple' }} />
                                        </div>
                                        <p>Conducted a PHP<a className="horizontal-underline font-bold" rel="noopener noreferrer" href={"/gallery"}> Workshop</a> for BCA students at <a target="_blank" rel="noopener noreferrer" href="https://www.dgvaishnavcollege.edu.in/" className="horizontal-underline font-bold"> DG Vaishnava</a> , collaborate with Infogro Technology</p>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: 'purple' }} />
                                        </div>
                                        <p>Learned
                                            <a target="_blank" rel="noopener noreferrer" href="https://react.dev/" className="horizontal-underline font-bold"> React.js</a> ,
                                            <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/" className="horizontal-underline font-bold"> Next.js</a> ,
                                            <a target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/" className="horizontal-underline font-bold"> Tailwind CSS</a>
                                        </p>
                                    </li>




                                </div>

                                <br />
                                <br />
                                <hr />

                                {/* 2022 */}
                                <h3 id="2022" className='text-md font-bold md:text-lg lg:text-xl my-10'>2022</h3>
                                <div className='space-y-3 text-sm font-normal md:text-base text-h3Subpoints'>
                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: 'purple' }} />
                                        </div>
                                        <p><a target="_blank" rel="noopener noreferrer" href="https://www.infogrotech.com/" className="horizontal-underline font-bold"> Infogro Technology</a> hired me as a web developer intern. I tasked to do Student Registration form
                                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/infogrotech/Registeration-Form" className="horizontal-underline font-bold"> Project</a>
                                        </p>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <div className='w-5'>
                                            <CircleDashed size={15} style={{ color: 'purple' }} />
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