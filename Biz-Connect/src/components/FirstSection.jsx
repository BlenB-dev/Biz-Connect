import React from 'react'
import video1 from "../assets/video1.mp4";
import video3 from "../assets/video3.mp4";
const FirstSection = () => {
  return (
 <div className="flex flex-col items-center mt-6 lg:mt-1">
       <h1 className=" text-4xl sm:text-2xl lg:text-7xl  bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-md">
      Biz-Connect Addis
        
      </h1>
      <p className="mt-10 text-lg text-center  max-w-4xl  ">The city's dynamic environment, coupled with a growing pool of young, innovative minds, has led to an increase in the number of startups. However, despite this burgeoning entrepreneurial spirit, many startups face significant challenges in accessing necessary services and securing investment. 
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
















      </div>
  )
}

export default FirstSection

