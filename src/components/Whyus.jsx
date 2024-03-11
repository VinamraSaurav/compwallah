import React from "react";
import { FaAddressCard, FaEye, FaGear } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

const Whyus = () => {
  return (
    <div >
    <div  className="max-w-7xl mx-auto my-32 md:mt-40 ">
      <div className="text-xl text-primary flex justify-center font-bold">
        Why Us
      </div>
      <div className="text-2xl md:text-4xl flex justify-center font-bold font-serif my-5 text-center">
        Why Choose CompWallah
      </div>
      <div className="max-w-7xl flex justify-evenly items-center my-10 flex-wrap m-4 gap-y-10">
        <div className="h-fit m-4 relative">
          <FaGear className="text-3xl text-white bg-gradient-card rounded-full h-20 w-20 p-2 absolute top-[-29px] left-[50%] translate-x-[-50%]" />

          <div className="p-2 my-2 text-center w-[350px] bg-[#f0f6ff] rounded-xl">
            <div className="font-bold font-satoshi text-lg my-2 line-clamp-1 text-center mt-12">
              Innovation
            </div>
            <div className="text-md font-serif line-clamp-4 h-24">
              CompWallah thrives on innovation, delivering cutting-edge
              solutions that elevate your business above the ordinary and keep
              it ahead of the curve.
            </div>
          </div>
        </div>
        <div className="h-fit m-4 relative">
          <FaAddressCard className="text-xl text-white bg-gradient-card rounded-full h-20 w-20 p-2 absolute top-[-29px] left-[50%] translate-x-[-50%]" />

          <div className="p-2 my-2 text-center w-[350px] bg-[#f0f6ff] rounded-xl">
            <div className="font-bold font-satoshi text-lg my-2 line-clamp-1 text-center mt-12">
              Client-Centric Approach
            </div>
            <div className="text-md font-serif line-clamp-4 h-24">
              Your success is our priority. We work closely with you to
              understand your goals, challenges, and vision, tailoring our
              services accordingly.
            </div>
          </div>
        </div>
        <div className="h-fit m-4 relative">
          <TiTick className="text-3xl text-white bg-gradient-card rounded-full h-20 w-20 p-2 absolute top-[-29px] left-[50%] translate-x-[-50%]" />

          <div className="p-2 my-2 text-center w-[350px] bg-[#f0f6ff] rounded-xl">
            <div className="font-bold font-satoshi text-lg my-2 line-clamp-1 text-center mt-12">
              Reliability
            </div>
            <div className="text-md font-serif line-clamp-4 h-24">
              Count on us for reliable and scalable solutions. We are committed
              to meeting deadlines and exceeding expectations
            </div>
          </div>
        </div>
      </div>

      <div className="text-xl text-primary flex justify-center font-bold mt-32 md:mt-40">
        Check this out
      </div>
      <div className="text-2xl md:text-4xl flex justify-center font-bold font-serif my-5 text-center">
        What Sets Us Apart
      </div>
      <div className="font-popins bg-[#f0f6ff] p-4 m-2 rounded-xl text-lg max-w-6xl mx-auto">
        CompWallah stands out with its commitment to innovation, a
        customer-centric approach prioritizing client success, unwavering
        quality assurance through rigorous testing, and a timely delivery focus
        driven by agile methodologies in the fast-paced digital landscape.
        <div className="flex gap-2 items-center mt-3"><TiTick className="text-primary text-2xl"/>Innovative Solutions</div>
        <div className="flex gap-2 items-center"><TiTick className="text-primary text-2xl"/>Customer-Centric Approach</div>
        <div className="flex gap-2 items-center"><TiTick className="text-primary text-2xl"/>Timely Delivery</div>
        <div className="flex gap-2 items-center"><TiTick className="text-primary text-2xl"/>Quality Assurance</div>
      </div>
    </div>
    </div>
  );
};

export default Whyus;
