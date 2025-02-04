import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello, <br/> <span className='text-3xl font-semibold'>Abhishek Duggal👋</span></h1>
      <buton className='bg-red-600 text-white p-2 rounded text-xl cursor-pointer'>Logout</buton>
    </div>
  )
}

export default Header
