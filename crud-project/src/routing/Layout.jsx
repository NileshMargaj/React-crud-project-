import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../crud/Navbar'
import Asidebar from './../crud/Asidebar'


const Layout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)

  const handleMenuClick = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }
  return (
    <>
      <Navbar handleMenuClick={handleMenuClick} />
      <main className="flex h-[calc(100vh-70px)]">
        <Asidebar isSidebarVisible={isSidebarVisible} />
        <section className="flex-1 p-8 bg-slate-600 overflow-y-auto ">
          <Outlet />
        </section>

      </main>
    </>
  )
}

export default Layout

