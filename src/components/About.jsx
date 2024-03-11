import Image from "next/image";
import React from "react";
import { FaGears, FaUsers } from "react-icons/fa6";
import { PiChatsCircleFill } from "react-icons/pi";

const About = () => {
  return (
    < div >
    <div  className="max-w-7xl flex flex-wrap md:flex-nowrap mx-auto justify-evenly items-center gap-x-10 my-20">
      <div className="md:w-6/12 hidden justify-center md:m-10 m-5 md:flex">

        <Image
          src="/assets/icons/about.svg"
          height={100}
          width={100}
          className="h-80 w-80"
          alt="about"
        />
      </div>
      <div className="md:w-6/12 m-5 md:m-10 flex justify-center">
        <div>
        <div  className="text-xl text-primary font-bold font-popins">About Us</div>
        <div className="text-3xl text-black font-bold font-satoshi my-3" >Providing Top-Notch Software Solutions and IT Services</div>
        <div className="font-inter">
          At CompWallah, we are committed to delivering cutting-edge software
          solutions and comprehensive IT services to empower businesses and
          organizations in their digital journey. With a focus on innovation,
          quality, and customer satisfaction, we strive to be your trusted
          technology partner.
        </div>
        <div className="flex md:justify-between my-6 px-6 py-3 bg-primary rounded-lg text-white ">
            <div className="flex items-center gap-3">
            <FaGears className="text-3xl"/>
            <div>
                <div className="text-lg font-bold ">107</div>
                <div className="text-xs">Active Clients</div>
            </div>
            </div>
            <div className="flex items-center gap-3">
            <FaUsers className="text-2xl"/>
            <div>
                <div className="text-lg font-bold ">12K+</div>
                <div className="text-xs">Visitor Counts</div>
            </div>
            </div>
            <div className="flex items-center gap-3">
            <PiChatsCircleFill className="text-2xl"/>
            <div>
                <div className="text-lg font-bold ">73</div>
                <div className="text-xs">Client Reviews</div>
            </div>
            </div>
            
        
        </div>
      </div>
            
        </div>
       
      
    </div>
    <div id='services'></div>
    </div>
  );
};

export default About;
