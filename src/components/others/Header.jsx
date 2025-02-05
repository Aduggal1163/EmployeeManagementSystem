import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl mr-[64%] font-medium'>Hello, <br/> <span className='text-3xl font-semibold'>{data.name}👋</span></h1>
      <button className='bg-red-600 text-white p-2 rounded text-xl cursor-pointer'>Logout</button>
    </div>
  )
}

export default Header
