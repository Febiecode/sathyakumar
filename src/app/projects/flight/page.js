'use client'
import React from 'react'
import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'
import Flight from '@/components/pages/Flight'

const page = () => {
  return (
    <div>
      <Navbar />
      <Flight />
      <Footer />
    </div>
  )
}

export default page