
import React from 'react'

import Logo from '@/components/atoms/Logo'
import Menu from '@/components/molecules/Menu'

const Navbar = () => {
  return (
    <header className='z-40 bg-transparent py-5 md:py-10'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-2'>
        <Logo />
        <Menu />
      </div>

    </header>
  )
}

export default Navbar