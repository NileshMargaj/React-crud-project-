import React from 'react'
import { Link } from 'react-router-dom'

const Asidebar = ({ isSidebarVisible }) => {
  return (
    <aside
      className={`w-[220px] h-full bg-slate-700 text-white p-6 shadow-lg transition-transform duration-300 ${
        isSidebarVisible ? 'translate-x-0 visible' : '-translate-x-full hidden'
      } md:translate-x-0 md:visible md:block`}
    >
      <ul className='flex flex-col gap-4'>
        <li>
          <Link
            to='/create'
            className='block px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300'
          >
            Create User
          </Link>
        </li>
        <li>
          <Link
            to='/viewall'
            className='block px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300'
          >
            Display User
          </Link>
        </li>
        <li>
          <Link
            to='/search'
            className='block px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300'
          >
            Search User
          </Link>
        </li>
        <li>
          <Link
            to='/register'
            className='block px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300'
          >
            Register User
          </Link>
        </li>
        <li>
          <Link
            to='/login'
            className='block px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-300'
          >
            Login User
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Asidebar