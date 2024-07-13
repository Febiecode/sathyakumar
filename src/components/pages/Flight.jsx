import React from 'react'
import LiveButton from '../atoms/LiveButton'
import GithubButton from '../atoms/GithubButton'
import { CircleDashed } from "lucide-react"
import Link from 'next/link'

const FlightMetaData = {
  githubRepo: "https://github.com/Febiecode/Flight-Ticket-Booking",
  live: "",
  images: [
    "/static/flight/landing.png",
  ],
  title: "Flight Ticket Booking Hub",
  description: "Experience seamless flight booking with our user-friendly application.",
  keyFeatures: [
    "User Accounts: Easily create and manage your account.",
    "Book Flights: Choose between one-way or round-trip tickets.",
    "Cancel Tickets: Hassle-free ticket cancellation.",
    "Booking History: View all your past bookings in one place.",
    "Downloadable Tickets: Save your tickets as PDF documents.",
    "Quick Search: Use our as-you-type search for faster flight searches."
  ]
}

const Flight = () => {
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0 mt-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center justify-between'>
        <div>
          <h1 className='text-xl font-semibold sm:text-2xl md:text-3xl xl:text-3xl mt-5'>
            {FlightMetaData.title}
          </h1>
        </div>
        <div className='flex justify-start lg:justify-end md:justify-end gap-5 mt-5'>

          {FlightMetaData.live === "" ? (
            <div></div>
          ) : (
            <LiveButton link={FlightMetaData.live} />
          )}
          
          <GithubButton link={FlightMetaData.githubRepo} />
        </div>

      </div>

      <div className='my-5'>
        <div className='flex justify-center flex-col'>
          {FlightMetaData.images.map(image => (
            <img src={image} alt="erpAnswerSnap" className='mt-10 rounded-xl border-2 border-[#57575787]' />
          ))}
        </div>


        <div className='mt-10'>
          <p className='font-semibold'>{FlightMetaData.des}</p>

          <div className='mt-10 space-y-5'>
            <h1 className='text-lg font-bold sm:text-md md:text-lg lg:text-xl'>Key Features</h1>
            <ul className='space-y-3 mt-5'>
              {FlightMetaData.keyFeatures.map((point,index) => (
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
                <Link href={"https://www.djangoproject.com/"} target='blank'>
                  <span className='text-[12px] font-semibold flex  items-center '><img src={"/static/icons/django.webp"} alt="next.js" width={18} height={18} /> &nbsp;django</span>
                </Link>
                <Link href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"} target='blank'>
                  <span className='text-[12px] font-semibold flex items-center '><img className='rounded-lg' src={"/static/icons/javascript.svg"} alt="vercel" width={20} height={20} /> &nbsp;Javascript</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flight