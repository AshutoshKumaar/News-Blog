import React from 'react'

function Navbar() {
  return (
    <div className='w-full p-5 flex justify-between items-center bg-slate-400 sticky top-0 z-10'>
      <div>
        <p className='text-slate-100 text-3xl font-[800]'>NewsWebApp</p>
      </div>
      <div>
        <p className='text-slate-100 text-xl font-[800]'>Blog</p>
      </div>
    </div>
  )
}

export default Navbar
