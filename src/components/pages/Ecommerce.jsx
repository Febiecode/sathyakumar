import React from 'react'
import LiveButton from '../atoms/LiveButton'
import GithubButton from '../atoms/GithubButton'
import { CircleDashed } from "lucide-react"
import Link from 'next/link'

const ECommerceMetaData = {
  githubRepo: "https://github.com/webjr-web/ecommerce",
  live: "http://ecommerce-webjr-web.vercel.app/",
  images: [
    "/static/ecommerce/landing.png",
  ],
  title: "ECommerce",
  description: "Developed and launched a headphone e-commerce platform",
  keyFeatures: [
    "Integrated payment processing through Stripe APIs.",
    "Facilitated seamless transactions for customers.",
    "Incorporated customer ratings for products.",
    "Ensured mobile responsiveness for a better user experience.",
  ]
}

const Ecommerce = () => {
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0 mt-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center justify-between'>
        <div>
          <h1 className='text-xl font-semibold sm:text-2xl md:text-3xl xl:text-3xl mt-5'>
            {ECommerceMetaData.title}
          </h1>
        </div>
        <div className='flex justify-start lg:justify-end md:justify-end gap-5 mt-5'>
          <LiveButton link={ECommerceMetaData.live} />
          <GithubButton link={ECommerceMetaData.githubRepo} />
        </div>

      </div>

      <div className='my-5 '>
        <div className='flex justify-center'>
          {ECommerceMetaData.images.map(image => (
            <img src={image} alt="erpAnswerSnap" className='mt-10 rounded-xl border-2 border-[#57575787]' />
          ))}
        </div>

        <div className='mt-10'>
          <p className='font-semibold'>{ECommerceMetaData.description}</p>

          <div className='mt-10 space-y-5'>
            <h1 className='text-lg font-bold sm:text-md md:text-lg lg:text-xl'>Key Features</h1>
            <ul className='space-y-3 mt-5'>
              {ECommerceMetaData.keyFeatures.map((point,index)=> (
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
              <div className='flex space-x-2 ms-2'>
                <Link href={"https://nextjs.org/"} target='blank'>
                  <span className='text-[12px] font-semibold flex  items-center '><img src={"/static/icons/nextjs.svg"} alt="next.js" width={22} height={22} /> &nbsp;Next.js</span>
                </Link>
                <Link href={"https://www.sanity.io/"} target='blank'>
                  <span className='text-[12px] font-semibold flex items-center '><img className='rounded-full' src={"/static/icons/sanity.jpg"} alt="vercel" width={18} height={18} />&nbsp;Sanity</span>
                </Link>
                <Link href={"https://docs.stripe.com/api"} target='blank'>
                  <span className='text-[12px] font-semibold flex items-center '><img className='rounded-full' src={"/static/icons/stripe.jpeg"} alt="tailwindcss" width={18} height={18} />&nbsp; Stripe</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce