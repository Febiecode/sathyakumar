'use client'
import React from 'react'
import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'
import SnapFilters from '@/components/pages/SnapFilters'

const page = () => {
  return (
    <div>
      <Navbar />
      <SnapFilters />
      <Footer />
    </div>
  )
}

export default page