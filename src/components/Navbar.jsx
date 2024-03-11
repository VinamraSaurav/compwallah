"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='max-w-7xl fixed top-0 left-0 right-0 h-20 mx-auto bg-white z-10'>
        <div>
            <div className='flex justify-between items-center p-4'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <Image 
                            className='md:h-14 md:w-14 h-10 w-10'
                            src='/logo.svg'
                            height={24}
                            width={100}
                            alt='compwallah_logo'
                        />
                    </div>
                    <div className='text-lg md:text-xl text-primary font-bold font-popins'>
                        CompWallah
                    </div>
                </div>
                <div className='nav:flex items-center gap-6 text-lg font-popins font-bold text-primary hidden'>
                    <Link href='/'><div className='p-2 px-3 hover:text-white hover:bg-primary rounded-lg hover:cursor-pointer' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Home</div></Link>
                    <Link href='#about'><div className='p-2 px-3 hover:text-white hover:bg-primary rounded-md hover:cursor-pointer'>About</div></Link>
                    <Link href='#services'><div className='p-2 px-3 hover:text-white hover:bg-primary rounded-md hover:cursor-pointer'>Services</div></Link>
                    <Link href='#whyUs'><div className='p-2 px-3 hover:text-white hover:bg-primary rounded-md hover:cursor-pointer'>Why Us</div></Link>
                    <Link href='#contactUs'><div className='p-2 px-3 text-white bg-primary rounded-md hover:cursor-pointer'>Contact Us</div></Link>

                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Navbar