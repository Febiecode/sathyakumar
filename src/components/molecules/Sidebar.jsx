// components/Sidebar.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div className={`fixed inset-0 z-30 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-black text-white`}>
        <div className="p-4 ">
          <h2 className="text-2xl font-bold">s.</h2>
          
            <ul className='flex flex-col justify-center items-center text-lg'>
              <li className='py-2'>
                <Link href={"/"}>Home</Link>
              </li>
              <li className='py-2'>
                <Link href={"/about"}>About</Link>
              </li>
            </ul>

        
        </div>
      </div>
      <div className="flex-1">
        <button
          className="md:hidden"
          onClick={toggleSidebar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </div>
  );
};

export default Sidebar;
