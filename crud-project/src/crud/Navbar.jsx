import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react';
const Navbar = ({ handleMenuClick }) => {
  return (
    <nav className='h-[70px] w-full flex justify-between items-center px-10 bg-slate-800 shadow-md'>
      <aside>
        <h2 className='text-2xl font-bold text-white tracking-wide cursor-pointer'>
          Logo
        </h2>
      </aside>
      <aside className='flex items-center gap-5 md:hidden'>
        <Menu 
          className='text-white cursor-pointer font-bold text-medium' 
          onClick={handleMenuClick}
        />
      </aside>
    </nav>
  )
}

export default Navbar