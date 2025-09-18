import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return <>
    <section className="h-[552px]">
      <div className='flex justify-center items-center flex-wrap py-24'>
        <h1 className='w-full text-center text-[80px] font-[900] text-second'>NotFound 404</h1>
        <Link to='/' className='mainBtn'><i className="fa-solid fa-arrow-left"></i> Go Back</Link>
      </div>
    </section>
  </>
}
