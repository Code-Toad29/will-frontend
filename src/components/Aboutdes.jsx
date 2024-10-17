import React from 'react';

const Aboutdes = () => {
  return (
    <div className='relative h-[25rem] flex'>
      <img src='/Aboutsecimg.jpg' className='object-cover w-full h-full' alt='Background' />
      <div className='absolute z-30 flex flex-col items-center justify-center w-full h-full p-12'>
        <p className='text-white text-[60px] text-center'>
        RealHomes History

        </p>
        <p className='text-white text-[20px] text-center font-semibold'>
        RealHomes is a pioneering real estate platform designed to empower buyers, sellers, and agents. Founded in 2020 by a team of real estate enthusiasts, our mission is to simplify the property search and transaction process, making it accessible for everyone. With a growing community of over 50,000 active users and a presence in multiple regions, RealHomes is quickly becoming a trusted resource in the real estate market.
        Our innovative approach combines cutting-edge technology with a user-friendly interface, allowing users to explore properties, connect with agents, and access valuable market insights. RealHomes is committed to supporting local communities, partnering with organizations to give back and promote sustainable housing initiatives. Join us as we redefine the real estate experience for a better tomorrow.

        </p>
        <div className='pt-4'>
          <input
            type='search'
            className='bg-white py-4 w-[27rem] rounded-full pl-5 placeholder:text-gray-500 placeholder:text-[20px]'
            placeholder='Address'
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutdes;

// const Hero = () => {
//     return (
//         <div className='relative h-[25rem] flex'>
//             <img src='/background.png' className='object-cover w-full h-full' alt='Background' />
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
