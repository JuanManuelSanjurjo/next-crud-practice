import React from 'react'
import Link from 'next/link'


function NotFound() {
  return (
    <section className='flex flex-col justify-center items-center h-[calc(100vh-8rem)]'>
        <div className='text-5xl mb-10'>Not Found</div>
        <Link href={"/"} className='bg-blue-950 p-4 rounded-md hover:bg-amber-600 transition'>Go back</Link>
    </section>
  )
}

export default NotFound