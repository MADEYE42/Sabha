import React from 'react'

function Header() {
  return (
    <div className='flex flex-row justify-between items-center shadow-lg p-4 border rounded-lg'>
        <button class="btn btn-outline bt-sm md:btn-md btn-primary">+ New Idea</button>
        <h2 className='font-bold text-sm md:text-2xl'>
            Top 20 Ideas
        </h2>
        <div className='flex gap-2 items-center'>
            <img src="" className='w-10 h-10 rounded-full' />
            <h2 className='font-bold text-sm hidden md:block'>By <br />Gouresh Madye</h2>
        </div>
    </div>
  )
}

export default Header
