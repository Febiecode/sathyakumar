import React from 'react'
import LiveButton from '../atoms/LiveButton'
import GithubButton from '../atoms/GithubButton'
import { CircleDashed } from "lucide-react"
import Link from 'next/link'

const crmMetaData = {
  githubRepo: "https://github.com/Febiecode/Customer-Relationship-Management-CRM-Django-",
  live: "",
  images: [
    "/static/crm/admin.png",
    "/static/crm/user.png",
  ],
  title: "CRM",
  description: "CRM system provides a holistic approach to managing customer relationships, ensuring that restaurants can offer personalized experiences and maintain high levels of customer satisfaction.",
  keyFeatures: [
    "Store and manage detailed customer profiles.",
    "Track customer preferences and dining history.",
    "Secure storage of customer contact information.",
    "Online reservation system with real-time availability.",
    "Unified view of customer interactions and purchase history.",
    "Filter customer data based on preferences, visit frequency, and spending habits.",
  ]
}

const Crm = () => {
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0 mt-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center justify-between'>
        <div>
          <h1 className='text-xl font-semibold sm:text-2xl md:text-3xl xl:text-3xl mt-5'>
            {crmMetaData.title}
          </h1>
        </div>
        <div className='flex justify-start lg:justify-end md:justify-end gap-5 mt-5'>

          {crmMetaData.live === "" ? (
            <div></div>
          ) : (
            <LiveButton link={crmMetaData.live} />
          )}
          
          <GithubButton link={crmMetaData.githubRepo} />
        </div>

      </div>

      <div className='my-5'>
        <div className='flex justify-center flex-col'>
          {crmMetaData.images.map(image => (
            <img src={image} alt="erpAnswerSnap" className='mt-10 rounded-xl border-2 border-[#57575787]' />
          ))}
        </div>


        <div className='mt-10'>
          <p className='font-semibold'>{crmMetaData.des}</p>

          <div className='mt-10 space-y-5'>
            <h1 className='text-lg font-bold sm:text-md md:text-lg lg:text-xl'>Key Features</h1>
            <ul className='space-y-3 mt-5'>
              {crmMetaData.keyFeatures.map(point => (
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
                <Link href={"https://www.djangoproject.com/"} target='blank'>
                  <span className='text-[12px] font-semibold flex  items-center '><img src={"/static/icons/django.webp"} alt="next.js" width={18} height={18} /> &nbsp;django</span>
                </Link>
                <Link href={"https://getbootstrap.com/docs/4.0/getting-started/introduction/"} target='blank'>
                  <span className='text-[12px] font-semibold flex items-center '><img src={"/static/icons/bootstrap.svg"} alt="vercel" width={20} height={20} /> &nbsp;Bootstrap</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crm