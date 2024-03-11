"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { FaCross } from 'react-icons/fa6';
import { MdClose } from "react-icons/md";
const Navbar = () => {
    const [open, setOpen]=useState(false);
    const handleClick=()=>{
        if(open===false){
            setOpen(true);
        }
        else{
            setOpen(false);
        }
    }
  return (
    <div className='max-w-7xl '>
        <div className='fixed top-0 left-0 right-0 h-16 nav:h-20 mx-auto bg-white z-20'>
            <div className='flex justify-between items-center p-4'>
            <Link href='/'> <div className='flex gap-3 items-center' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); handleClick() }}>
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
                </div></Link>
                <div>
                <div className='nav:flex items-center gap-6 text-lg font-popins font-bold text-primary hidden'>
                    <Link href='/'><div className='p-2 px-3 hover:text-white hover:bg-primary rounded-lg hover:cursor-pointer' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Home</div></Link>
                    <Link href='#about'><div className='p-2 px-3 hover:text-white hover:bg-primary rounded-md hover:cursor-pointer'>About</div></Link>
                    <Link href='#services'><div className='p-2 px-3 hover:text-white hover:bg-primary rounded-md hover:cursor-pointer'>Services</div></Link>
                    <Link href='#whyUs'><div className='p-2 px-3 hover:text-white hover:bg-primary rounded-md hover:cursor-pointer'>Why Us</div></Link>
                    <Link href='#contactUs'><div className='p-2 px-3 text-white bg-primary rounded-md hover:cursor-pointer'>Contact Us</div></Link>

                </div>
                <div className='flex justify-between items-center' onClick={handleClick}>
                    {open? <MdClose className='text-3xl text-black nav:hidden'/>:<IoMenu className='text-3xl text-black nav:hidden'/>}
                    
                </div>
                </div>
                
            </div>

        </div>
        {
           <div className={`fixed h-[100vh] top-16 w-[50%] flex justify-center bg-black/90 z-10 items-center text-center ${open?'right-0':'right-[-800px] hidden'} transition-all duration-300 ease-in`}>
                <div>
                <Link href='/'><div className='p-2 px-3 text-white hover:bg-primary rounded-lg hover:cursor-pointer font-bold' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); handleClick() }}>Home</div></Link>
                    <Link href='/'><div className='p-2 px-3 text-white hover:bg-primary rounded-md hover:cursor-pointer font-bold' onClick={() => { window.scrollTo({ top: 600, behavior: 'smooth' }); handleClick() }}>About</div></Link>
                    <Link href='/'><div className='p-2 px-3 text-white hover:bg-primary rounded-md hover:cursor-pointer font-bold'onClick={() => { window.scrollTo({ top: 1200, behavior: 'smooth' }); handleClick() }}>Services</div></Link>
                    <Link href='/'><div className='p-2 px-3 text-white hover:bg-primary rounded-md hover:cursor-pointer font-bold' onClick={() => { window.scrollTo({ top: 1800, behavior: 'smooth' }); handleClick() }}>Why Us</div></Link>
                    <Link href='/'><div className='p-2 px-3 text-white hover:bg-primary rounded-md hover:cursor-pointer font-bold'onClick={() => { window.scrollTo({ top: 3460, behavior: 'smooth' }); handleClick() }}>Contact Us</div></Link>
                    </div>
            </div>

        }
    </div>
  )
}

export default Navbar