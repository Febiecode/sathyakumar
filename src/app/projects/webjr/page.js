'use client'
import React from 'react'
import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'
import Webjr from '@/components/pages/Webjr'

const page = () => {
  return (
    <div>
      <Navbar />
      <Webjr />
      <Footer />
    </div>
  )
}

export default page