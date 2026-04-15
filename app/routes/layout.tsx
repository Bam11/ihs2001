import React from 'react'
import { Outlet } from 'react-router'
import Footer from '~/components/footer'
import Nav from '~/components/nav'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800 bg-white selection:bg-[#FEF5C6] selection:text-[#8A1C21]">
      <Nav />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
