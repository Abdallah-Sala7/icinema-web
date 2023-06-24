import React from 'react'
import {Sidebar} from '../components'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <main className='bg-lightGray dark:bg-darkGray'>
      <Sidebar />

      <section className="p-2 min-h-screen sm:p-4 lg:px-6 lg:py-4 lg:ml-64">
        <Outlet />
      </section>
    </main>
  )
}

export default RootLayout