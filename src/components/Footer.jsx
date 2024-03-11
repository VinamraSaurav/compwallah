import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaX, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto mt-20'>
        <div className='bg-primary/90 py-5'>
            <div className='flex justify-center gap-3 items-center my-5 py-5'>
                <FaFacebook className='p-1 hover:bg-white rounded-full hover:text-primary text-white text-4xl hover:cursor-pointer'/>
                <FaInstagram className='p-1 hover:bg-white rounded-full hover:text-pink-500 text-white text-4xl hover:cursor-pointer'/>
                <FaXTwitter className='p-1 hover:bg-white rounded-full hover:text-black text-white text-4xl hover:cursor-pointer'/>
                <FaLinkedin className='p-1 hover:bg-white rounded-full hover:text-primary text-white text-4xl hover:cursor-pointer'/>
            </div>
            <div className='h-[0.5px] bg-white/40 w-8/12 flex justify-center m-2 mx-auto'></div>
            <div className='flex justify-center text-white my-2'>©️ Designed and Developed by Vinamra (Vin)</div>
        </div>
    </div>
  )
}

export default Footer