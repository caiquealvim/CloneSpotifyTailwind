import React from 'react'
import {Home as Homeicon, Search, BookUser,} from 'lucide-react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <nav className='space-y-4 mt-10'>
            <a href="#" className='flex gap-2 items-center text-zinc-100'><Homeicon/> Home</a>
            <a href="#" className='flex gap-2 items-center text-zinc-100'><Search/> Search</a>
            <a href="#" className='flex gap-2 items-center text-zinc-100'><BookUser/> Yuor Library</a>
          </nav>

      <nav className='mt-10 pt-10 border-t border-zinc-600 flex flex-col gap-2'>
        <a href="#" className='text=sm text-zinc-400 hover:text-zinc-100'>Hits Brasil</a>
        <a href="#" className='text=sm text-zinc-400 hover:text-zinc-100'>Best musics 2024</a>
        <a href="#" className='text=sm text-zinc-400 hover:text-zinc-100'>song pop rock</a>
        <a href="#" className='text=sm text-zinc-400 hover:text-zinc-100'>My playlist</a>
     

      </nav>
        </aside>
  )
}

export default NavBar