import React from 'react';
import myPhoto from "../assets/my-photo.png";

const intro = () => {
  return (
    <div id='home' className='top-35 header finisher-header h-[46vw] w-[100vw] relative left-5'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <div>
            <img className='w-[85%]' src={myPhoto} alt="" />
        </div>
        <div className="relative right-5">
            <p className='bg-[#ff0033] w-[13vw] home-name text-1xl -rotate-8 scale-140 text-center'>PRAKASH SWAMI</p>
            <p className='bg-[#6c0016] relative right-4 top-2 w-[10vw] home-name text-[12px] -rotate-8 scale-110 text-center'>WEB DEVELOPER</p>
        </div>
        
      </div>
    </div>
  )
}

export default intro;
