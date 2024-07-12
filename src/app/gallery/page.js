'use client'
import React from 'react'
import Gallery from '@/components/pages/Gallery'
import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  )
}

export default page