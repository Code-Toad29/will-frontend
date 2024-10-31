import React from "react";

const Aboutdes = () => {
  return (
    <div className="relative h-[25rem] flex">
      <img
        src="/Aboutsecimg.jpg"
        className="object-cover w-full h-full"
        alt="Background"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-20 flex flex-col items-center justify-center p-8">
        <p className="text-white text-[36px] md:text-[48px] text-center font-bold leading-tight">
          RealHomes History
        </p>
        <p className="text-white text-[14px] md:text-[18px] text-center font-semibold mt-4 max-w-2xl leading-relaxed">
          RealHomes is a pioneering real estate platform designed to empower
          buyers, sellers, and agents. Founded in 2020 by a team of real estate
          enthusiasts, our mission is to simplify the property search and
          transaction process, making it accessible for everyone. With a growing
          community of over 50,000 active users and a presence in multiple
          regions, RealHomes is quickly becoming a trusted resource in the real
          estate market. Our innovative approach combines cutting-edge
          technology with a user-friendly interface, allowing users to explore
          properties, connect with agents, and access valuable market insights.
          RealHomes is committed to supporting local communities, partnering
          with organizations to give back and promote sustainable housing
          initiatives. Join us as we redefine the real estate experience for a
          better tomorrow.
        </p>
      </div>
    </div>
  );
};

export default Aboutdes;

// import React from 'react';

// const Aboutdes = () => {
//   return (
//     <div className='relative h-[25rem] flex'>
//       <img src='/Aboutsecimg.jpg' className='object-cover w-full h-full' alt='Background' />
//       <div className='absolute z-30 flex flex-col items-center justify-center w-full h-full p-12'>
//         <p className='text-white text-[60px] text-center'>
//         RealHomes History

//         </p>
//         <p className='text-white text-[20px] text-center font-semibold'>
//         RealHomes is a pioneering real estate platform designed to empower buyers, sellers, and agents. Founded in 2020 by a team of real estate enthusiasts, our mission is to simplify the property search and transaction process, making it accessible for everyone. With a growing community of over 50,000 active users and a presence in multiple regions, RealHomes is quickly becoming a trusted resource in the real estate market.
//         Our innovative approach combines cutting-edge technology with a user-friendly interface, allowing users to explore properties, connect with agents, and access valuable market insights. RealHomes is committed to supporting local communities, partnering with organizations to give back and promote sustainable housing initiatives. Join us as we redefine the real estate experience for a better tomorrow.

//         </p>
//         <div className='pt-4'>
//           <input
//             type='search'
//             className='bg-white py-4 w-[27rem] rounded-full pl-5 placeholder:text-gray-500 placeholder:text-[20px]'
//             placeholder='Address'
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Aboutdes;
