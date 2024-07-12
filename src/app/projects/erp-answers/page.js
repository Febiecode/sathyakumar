'use client'
import React from 'react'
import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'
import ErpAnswers from '@/components/pages/ErpAnswers'

const page = () => {
  return (
    <div>
      <Navbar />
      <ErpAnswers />
      <Footer />
    </div>
  )
}

export default page