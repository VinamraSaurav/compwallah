"use client"
import React from "react";
import { FaCloud, FaEye, FaMobileScreen, FaRegPenToSquare, FaShieldHalved } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsStack } from "react-icons/bs";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#6b4ff1", borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#6b4ff1", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

const Card = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div  >
    <div className="max-w-7xl mx-auto my-20">
        <div className="text-xl text-primary flex justify-center font-bold">
            Our Services
        </div>
        <div className="text-4xl flex justify-center font-bold font-serif my-5">
            We Provide
        </div>
    {/* <div className="max-w-7xl flex flex-wrap justify-evenly items-center mid:hidden">
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
      <SwiperSlide className="w-[360px] h-[340px]">
      <div className="w-[356px] h-[330px] bg-[#f0f6ff] rounded-xl m-4">
        <div className="h-[140px] flex justify-center items-center bg-gradient-card rounded-t-xl">
          <FaEye className="text-5xl text-white"/>
        </div>
        <div className="p-2">
          <div className="font-bold font-satoshi text-lg my-2">Custom Software Development</div>
          <div className="text-md font-serif">
            From concept to implementation, we specialize in bringing your
            vision to life through tailored software solutions that cater
            specifically to your business requirements.
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className="w-[360px] h-[340px]">
      <div className="w-[356px] h-[330px] bg-[#f0f6ff] rounded-xl m-4">
        <div className="h-[140px] flex justify-center items-center bg-gradient-card rounded-t-xl">
          <FaEye className="text-5xl text-white"/>
        </div>
        <div className="p-2">
          <div className="font-bold font-satoshi text-lg my-2">Custom Software Development</div>
          <div className="text-md font-serif">
            From concept to implementation, we specialize in bringing your
            vision to life through tailored software solutions that cater
            specifically to your business requirements.
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className="w-[360px] h-[340px]">
      <div className="w-[356px] h-[330px] bg-[#f0f6ff] rounded-xl m-4">
        <div className="h-[140px] flex justify-center items-center bg-gradient-card rounded-t-xl">
          <FaEye className="text-5xl text-white"/>
        </div>
        <div className="p-2">
          <div className="font-bold font-satoshi text-lg my-2">Custom Software Development</div>
          <div className="text-md font-serif">
            From concept to implementation, we specialize in bringing your
            vision to life through tailored software solutions that cater
            specifically to your business requirements.
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className="w-[360px] h-[340px]">
      <div className="w-[356px] h-[330px] bg-[#f0f6ff] rounded-xl m-4">
        <div className="h-[140px] flex justify-center items-center bg-gradient-card rounded-t-xl">
          <FaEye className="text-5xl text-white"/>
        </div>
        <div className="p-2">
          <div className="font-bold font-satoshi text-lg my-2">Custom Software Development</div>
          <div className="text-md font-serif">
            From concept to implementation, we specialize in bringing your
            vision to life through tailored software solutions that cater
            specifically to your business requirements.
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className="w-[360px] h-[340px]">
      <div className="w-[356px] h-[330px] bg-[#f0f6ff] rounded-xl m-4">
        <div className="h-[140px] flex justify-center items-center bg-gradient-card rounded-t-xl">
          <FaEye className="text-5xl text-white"/>
        </div>
        <div className="p-2 bg-[#f0f6ff] rounded-xl">
          <div className="font-bold font-satoshi text-lg my-2">Custom Software Development</div>
          <div className="text-md font-serif">
            From concept to implementation, we specialize in bringing your
            vision to life through tailored software solutions that cater
            specifically to your business requirements.
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide className="w-[360px] h-[340px]">
      <div className="w-[356px] h-[330px] bg-[#f0f6ff] rounded-xl m-4">
        <div className="h-[140px] flex justify-center items-center bg-gradient-card rounded-t-xl">
          <FaEye className="text-5xl text-white"/>
        </div>
        <div className="p-2">
          <div className="font-bold font-satoshi text-lg my-2">Custom Software Development</div>
          <div className="text-md font-serif">
            From concept to implementation, we specialize in bringing your
            vision to life through tailored software solutions that cater
            specifically to your business requirements.
          </div>
        </div>
      </div>
      </SwiperSlide>
      
      
      </Swiper>
    </div> */}


        <div className="max-w-6xl mx-auto">
    <div className=" mr-8 ml-8 max-w-6xl ">
    <Slider {...settings}>
        <div>
    <div className="h-fit bg-[#f0f6ff] rounded-xl m-4 hover:scale-105 hover:cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_3px_#6b4ff1]">
        <div className="h-[130px] flex justify-center items-center bg-gradient-card rounded-t-xl">
          <FaEye className="text-5xl text-white"/>
        </div>
        <div className="p-2 my-2 text-center">
          <div className="font-bold font-satoshi text-lg my-2 line-clamp-1 text-center">Custom Software Development</div>
          <div className="text-md font-serif line-clamp-4">
            From concept to implementation, we specialize in bringing your
            vision to life through tailored software solutions that cater
            specifically to your business requirements.
          </div>
        </div>
      </div>
      </div>
        <div>
    <div className="h-fit bg-[#f0f6ff] rounded-xl m-4 hover:scale-105 hover:cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_3px_#6b4ff1]">
        <div className="h-[130px] flex justify-center items-center bg-gradient-card rounded-t-xl">
          <BsStack className="text-5xl text-white"/>
        </div>
        <div className="p-2 my-2 text-center">
          <div className="font-bold font-satoshi text-lg my-2 line-clamp-1 text-center">Web Development</div>
          <div className="text-md font-serif line-clamp-4">
          Create a powerful online presence with our expert web development services. We specialize in building responsive, user-friendly, and scalable websites and management portal.
          </div>
        </div>
      </div>
      </div>
        <div>
    <div className="h-fit  bg-[#f0f6ff] rounded-xl m-4 hover:scale-105 hover:cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_3px_#6b4ff1]">
        <div className="h-[130px] flex justify-center items-center bg-gradient-card rounded-t-xl">
          <FaRegPenToSquare className="text-5xl text-white"/>
        </div>
        <div className="p-2 my-2 text-center">
          <div className="font-bold font-satoshi text-lg my-2 text-center">IT Consulting</div>
          <div className="text-md font-serif line-clamp-4">
          Navigate the complex IT landscape with confidence. Our experienced consultants provide strategic guidance to help you make informed technology decisions.
          </div>
        </div>
      </div>
      </div>
        <div>
    <div className=" h-fit bg-[#f0f6ff] rounded-xl m-4 hover:scale-105 hover:cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_3px_#6b4ff1]">
        <div className="h-[130px] flex justify-center items-center bg-gradient-card rounded-t-xl">
          <FaShieldHalved className="text-5xl text-white"/>
        </div>
        <div className="p-2 my-2 text-center">
          <div className="font-bold font-satoshi text-lg my-2 text-center">Fully Secured</div>
          <div className="text-md font-serif line-clamp-4">
          Our team of certified cybersecurity professionals is dedicated to staying ahead of the curve, implementing advanced measures to fortify your systems against cyber threats.
          </div>
        </div>
      </div>
      </div>
        <div>
    <div className="h-fit  bg-[#f0f6ff] rounded-xl m-4 hover:scale-105 hover:cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_3px_#6b4ff1]">
        <div className="h-[130px] flex justify-center items-center bg-gradient-card rounded-t-xl">
          <FaCloud className="text-5xl text-white"/>
        </div>
        <div className="p-2 my-2 text-center">
          <div className="font-bold font-satoshi text-lg my-2 text-center">Cloud Solutions</div>
          <div className="text-md font-serif line-clamp-4">
          Harness the power of the cloud to enhance scalability, flexibility, and security. Our cloud solutions are designed to optimize your business operations.
          </div>
        </div>
      </div>
      </div>
        <div>
    <div className="h-fit bg-[#f0f6ff] rounded-xl m-4 hover:scale-105 hover:cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_3px_#6b4ff1]">
        <div className="h-[130px] flex justify-center items-center bg-gradient-card rounded-t-xl">
          <FaMobileScreen className="text-5xl text-white"/>
        </div>
        <div className="p-2 my-2 text-center">
          <div className="font-bold font-satoshi text-lg my-2 text-center">Mobile App Development</div>
          <div className="text-md font-serif line-clamp-4">
          Reach your audience on the go with our custom mobile app development services. We develop engaging and intuitive applications for iOS and Android platforms.
          </div>
        </div>
      </div>
      </div>
      
    </Slider>


    </div>
    </div>
    </div>
    <div id='whyUs'>

    </div>
    </div>
  );
};

export default Card;
