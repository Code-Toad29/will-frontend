// import React from 'react';
// import { FaSearch } from 'react-icons/fa';

// const Hero = () => {
//     return (
//         <div className='relative h-[25rem] flex'>
//             <img src='/Goldbackground.jpg' className='object-cover w-full h-full' alt='Background' />
//             <div className='absolute z-30 flex flex-col items-center justify-center w-full h-full p12'>
//                 <p className='text-white text-[60px] text-center'>
//                     A home is a place to start your story
//                 </p>
//             <p className='text-white text-[20px] text-center font-semibold'>
//             "Help us help you find a home, where every story begins and every heart finds its place."
//             </p>
//             <div className='pt4'>
//             <input type='search'
//             className='bg-white py4 w-[27rem] rounded-full pl-5 placeholder:
//             text-gray-500 placeholder:text-[20px]'
//             placeholder='Adress'/>

//             <div className='absolute w-12 h-12
//             FaSearch  text-yellow top-1 right '>

//             </div>

//             </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;

import React from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative h-[25rem] flex">
      <img
        src="/Goldbackground.jpg"
        className="object-cover w-full h-full"
        alt="Background"
      />
      <div className="absolute z-30 flex flex-col items-center justify-center w-full h-full p-12">
        <p className="text-white text-[60px] text-center font-bold">
          A home is a place to start your story
        </p>
        <p className="text-white text-[20px] text-center font-semibold max-w-xl">
          "Help us help you find a home, where every story begins and every
          heart finds its place."
        </p>
        <div className="pt-6 flex items-center">
          <input
            type="search"
            className="bg-white py-4 w-[27rem] rounded-full pl-5 placeholder:text-gray-500 placeholder:text-[20px]"
            placeholder="Address"
          />
          <button className="absolute w-12 h-12 right-4 top-1 flex items-center justify-center bg-yellow-500 rounded-full hover:bg-yellow-400 transition duration-300">
            <FaSearch className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
