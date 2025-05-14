import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div >
        <div className="bg-red-500" >
            <Header />
        </div>
        <div>
            {<Outlet />}
        </div>
    </div>
  )
}

export default Layout