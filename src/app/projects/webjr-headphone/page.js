'use client'
import React from 'react'
import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'
import Ecommerce from '@/components/pages/Ecommerce'

const page = () => {
  return (
    <div>
      <Navbar />
      <Ecommerce />
      <Footer />
    </div>
  )
}

export default page