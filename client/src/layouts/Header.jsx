import React from 'react'

const Header = () => {
    return (
        <div className='flex h-16 sticky top-0 bg-white justify-between items-center px-6 py-2 border-b border-black z-10'>
            <h2 className='cursor-pointer font-bold text-xl'>Workout Buddy</h2>
            <ul className='flex'>
                <li className='p-2 mx-4 cursor-pointer'>Link 1</li>
                <li className='p-2 mx-4 cursor-pointer'>Link 2</li>
                <li className='p-2 mx-4 cursor-pointer'>Link 3</li>
            </ul>
        </div>
    )
}

export default Header