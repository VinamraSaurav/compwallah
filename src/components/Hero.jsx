import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (<div className='relative mt-20 max-w-7xl mx-auto'>

    <div  className=' flex justify-evenly gap-x-10 items-center mt-40 mb-20  flex-wrap md:flex-nowrap relative'>
        
        <div className='md:m-10 m-5 text-xl md:text-5xl font-bold text-primary font-theboldfont md:w-6/12'>
            <div className='flex flex-col items-center'>
            <div>
            <div className='flex md:justify-start justify-center md:ml-5 text-transparent bg-gradient-card bg-clip-text'>You Run Your Business.</div>
            <div className='flex md:justify-start justify-center md:ml-5 text-transparent bg-gradient-card bg-clip-text'>We Run Your IT.</div>
            <Link href='#services'><div className='px-4 py-2 my-6 bg-primary text-white text-2xl rounded-lg w-[190px] mx-auto md:mx-0 md:ml-5'>Our Services</div></Link>
            </div>
            </div>
        </div>
        <div className='md:w-6/12'>
            <div className='flex justify-center'>

            <Image src='/assets/icons/hero.svg' height={24} width={100} alt='hero' className='m-5 md:m-10 h-64 w-64 md:h-96 md:w-96'/>
            </div>
        </div>
    </div>
    <div id='about'></div>
    </div>
  )
}

export default Hero