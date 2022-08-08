import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <div className='bg-gray-100 min-h-[calc(100vh-4rem)] p-4'>
                <Outlet />
            </div>
        </>
    )
}

export default DefaultLayout