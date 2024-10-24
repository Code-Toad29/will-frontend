// import React from 'react'
// import Residencies from './Residencies'
// import ResidenciesList from './Residencies';

// const  Properties=()=> {
//   return (
//     <section className='maxx-padd-container'>
//     <div className='maxx-padd container bg-primary py-16 xl:py-28 rounded-3xl'>
//     <span>Your Future home Awaites</span>
//     <h2 className='h2'>Find your dream home</h2>
//     <div className='flexBetween mt-8 mb-6'>
//     <h5><span>showing 1-9</span>out of 3k properties</h5>
//     </div>
//     </div>
//     {}
//     <Swiper
//      autoplay={{
//         delay:4000,
//         disableInteraction:false,
//      }}
//      breakpoints={{
//         600:{
//             slidesPerview:2,
//             spacebetween:30,
//         },
//         1124:{
//             slidesPerview:3,
//             spacebetween:30,
//         },
//         1300:{
//             slidesPerview:4,
//             spacebetween:30,
//         },

//      }}
//      modules={{Autoplay}}
//      className='h-[488px] md-[533px] xl:h-{422px} mt-5'>
//         {
//             ResidenciesList.map((Properties)=>(
//                 <SwiperSlide key={Properties.title}>
//                     <Item property={property}/>
//                 </SwiperSlide>
//             ))
//         }

//     </Swiper>
//     </section>

//   )
// }

// export default Properties;

// import React from 'react'
// import Residencies from './Residencies'
// import ResidenciesList from './Residencies';
// import Swiper from 'swiper';
// import { SwiperSlide } from 'swiper/react';
// import{} from "swiper/modules"

// const  Properties=()=> {
//   return (
//     <section className='maxx-padd-container'>
//     <div className='maxx-padd container bg-primary py-16 xl:py-28 rounded-3xl'>
//     <span>Your Future home Awaites</span>
//     <h2 className='h2'>Find your dream home</h2>
//     <div className='flexBetween mt-8 mb-6'>
//     <h5><span>showing 1-9</span>out of 3k properties</h5>
//     </div>
//     </div>

//     <Swiper
//      autoplay={{
//         delay:4000,
//         disableInteraction:false,
//      }}
//      breakpoints={{
//         600:{
//             slidesPerview:2,
//             spacebetween:30,
//         },
//         1124:{
//             slidesPerview:3,
//             spacebetween:30,
//         },
//         1300:{
//             slidesPerview:4,
//             spacebetween:30,
//         },

//      }}
//      modules={{Autoplay}}
//      className='h-[488px] md-[533px] xl:h-{422px} mt-5'>
//         {
//             ResidenciesList.map((Properties)=>(
//                 <SwiperSlide key={Properties.title}>
//                     <Item property={property}/>
//                 </SwiperSlide>
//             ))
//         }

//     </Swiper>
//     </section>

//   )
// }

// export default Properties;

// 22
// import React from 'react';
// import Item from './item'; // Ensure you have this import
// import ResidenciesList from './Residencies'; // Ensure this import is correct
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper';

// const Properties = () => {
//     return (
//         <section className='maxx-padd-container'>
//             <div className='maxx-padd container bg-primary py-16 xl:py-28 rounded-3xl'>
//                 <span>Your Future Home Awaits</span>
//                 <h2 className='h2'>Find your dream home</h2>
//                 <div className='flexBetween mt-8 mb-6'>
//                     <h5><span>Showing 1-9</span> out of 3k properties</h5>

//                 </div>
//             </div>

//             <Swiper
//                 autoplay={{
//                     delay: 4000,
//                     disableInteraction: false,
//                 }}
//                 breakpoints={{
//                     600: {
//                         slidesPerView: 2,
//                         spaceBetween: 30,
//                     },
//                     1124: {
//                         slidesPerView: 3,
//                         spaceBetween: 30,
//                     },
//                     1300: {
//                         slidesPerView: 4,
//                         spaceBetween: 30,
//                     },
//                 }}
//                 modules={[Autoplay]}
//                 className='h-[488px] md:h-[533px] xl:h-[422px] mt-5'
//             >
//                 {ResidenciesList.map((property) => (
//                     <SwiperSlide key={property.title}>
//                         <Item property={property} />
//                     </SwiperSlide>
//                 ))
// }       </Swiper>
//         </section>
//     );
// };

// export default Properties;

// Properties.js

//test
import React from "react";
import Item from "./ItemSec"; // Ensure you have this import
import ResidenciesList, { residenciesList } from "./Residencies"; // Ensure this import is correct
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const Properties = () => {
  return (
    <section className="maxx-padd-container">
      <div className="maxx-padd container bg-primary py-16 xl:py-28 rounded-3xl">
        <span>Your Future Home Awaits</span>
        <h2 className="h2">Find your dream home</h2>
        <div className="flex justify-between mt-8 mb-6">
          <h5>
            <span>Showing 1-9</span> out of 3k properties
          </h5>
        </div>
      </div>

      {/* CAROUSEL */}
      <Carousel>
        <CarouselContent>
          {residenciesList.map((property) => (
            <CarouselItem className="basis-1/3 md:basis-1/5">
              <Item property={property} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Properties;
