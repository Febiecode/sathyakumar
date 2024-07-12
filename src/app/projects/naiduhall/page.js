'use client'
import React from 'react'
import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'
import Naiduhall from '@/components/pages/Naiduhall'

const page = () => {
  return (
    <div>
      <Navbar />
      <Naiduhall />
      <Footer />
    </div>
  )
}

export default page