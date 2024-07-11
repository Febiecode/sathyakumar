import React from 'react'
import Sidebar from './SideBar'
const Menu = () => {

    return (
        <>
            <div className='hidden md:flex justify-evenly font-mukta font-bold text-[16px] gap-5'>
                <nav class="menu menu-1">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </div>
            <div className="lg:hidden md:hidden">
                <Sidebar />
            </div>


        </>
    )
}

export default Menu