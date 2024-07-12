'use client'
import React from 'react'
import Navbar from '@/components/organisms/Navbar'
import Footer from '@/components/organisms/Footer'
import Crm from '@/components/pages/Crm'

const page = () => {
    return (
        <div>
            <Navbar />
            <Crm />
            <Footer />
        </div>
    )
}

export default page