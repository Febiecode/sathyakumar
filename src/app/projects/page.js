'use client'
import React from 'react'
import Projects from '@/components/pages/Projects'
import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'

const page = () => {
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0'>
      <Navbar />
      <Projects />
      <Footer />
    </div>
  )
}

export default page