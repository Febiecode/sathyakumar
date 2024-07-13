import React from 'react'
import LiveButton from '../atoms/LiveButton'
import GithubButton from '../atoms/GithubButton'
import { CircleDashed } from "lucide-react"
import Link from 'next/link'

const ERPAnswersMetaData = {
  githubRepo: "https://github.com/Febiecode/erp_answers",
  live: "https://erp-answers.vercel.app/",
  images: [
    "/static/erpAnswers/landing.png",
  ],
  title: "ERPAnswers",
  description: "Customer Support Platform for Organizational Administrators to Manage Customer Inquiries and Foster Strong Customer Relationships.",
  keyFeatures: [
    "A customer support application with user authentication for both admins and customers.",
    "Customers can submit questions.",
    "Submitted questions appear as cards in the admin panel.",
    "Admins manage questions in two sections: Unanswered questions and Answered questions.",
    "Each question entry features an accordion-style display for responses."
  ]
}

const ErpAnswers = () => {
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0 mt-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center justify-between'>
        <div>
          <h1 className='text-xl font-semibold sm:text-2xl md:text-3xl xl:text-3xl mt-5'>
            {ERPAnswersMetaData.title}
          </h1>
        </div>
        <div className='flex justify-start lg:justify-end md:justify-end gap-5 mt-5'>
          <LiveButton link={ERPAnswersMetaData.live} />
          <GithubButton link={ERPAnswersMetaData.githubRepo} />
        </div>

      </div>

      <div className='my-5'>
        <div className='flex justify-center'>
          {ERPAnswersMetaData.images.map(image => (
            <img src={image} alt="erpAnswerSnap" className='mt-10 rounded-xl border-2 border-[#57575787]' />
          ))}
        </div>


        <div className='mt-10'>
          <p className='font-semibold'>{ERPAnswersMetaData.des}</p>

          <div className='mt-10 space-y-5'>
            <h1 className='text-lg font-bold sm:text-md md:text-lg lg:text-xl'>Key Features</h1>
            <ul className='space-y-3 mt-5'>
              {ERPAnswersMetaData.keyFeatures.map(point => (
                <li className='flex items-center gap-3'>
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
              <div className='flex space-x-2 ms-2'>
                <Link href={"https://nextjs.org/"} target='blank'>
                  <span className='text-[12px] font-semibold flex  items-center '><img src={"/static/icons/nextjs.svg"} alt="next.js" width={20} height={20} /> &nbsp;Next.js</span>
                </Link>
                <Link href={"https://vercel.com/"} target='blank'>
                  <span className='text-[12px] font-semibold flex items-center '><img src={"/static/icons/vercel.svg"} alt="vercel" width={20} height={20} /> &nbsp;Vercel</span>
                </Link>
                <Link href={"https://tailwindcss.com/"} target='blank'>
                  <span className='text-[12px] font-semibold flex items-center '><img src={"/static/icons/tailwindcss.svg"} alt="tailwindcss" width={20} height={20} /> &nbsp;Tailwind CSS</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErpAnswers