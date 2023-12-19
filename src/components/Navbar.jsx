import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-black py-4 px-4'>
       <Link className='hover:text-amber-600 font-bold transition' href={"/"}> <h3 className='text-2xl font-bold'>NEXT CRUD</h3></Link>
       <ul className='flex gap-5 mr-11'>
            <Link className='hover:text-amber-600 font-bold transition' href={"/"}>TASK</Link>
            <Link className='hover:text-amber-600 font-bold transition' href={"/new"}>NEW</Link>
            <Link className='hover:text-amber-600 font-bold transition' href={"/about"}>ABOUT</Link>
       </ul>
    </nav>
  )
}

export default Navbar