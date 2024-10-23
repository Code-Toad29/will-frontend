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


import React from 'react'
import Residencies from './Residencies'
import ResidenciesList from './Residencies';




const  Properties=()=> {
  return (
    <section className='maxx-padd-container'>
    <div className='maxx-padd container bg-primary py-16 xl:py-28 rounded-3xl'>
    <span>Your Future home Awaites</span>    
    <h2 className='h2'>Find your dream home</h2>
    <div className='flexBetween mt-8 mb-6'>
    <h5><span>showing 1-9</span>out of 3k properties</h5>
    </div>
    </div>
    {}
    <Swiper
     autoplay={{
        delay:4000,
        disableInteraction:false,
     }}  
     breakpoints={{
        600:{
            slidesPerview:2,
            spacebetween:30,
        },
        1124:{
            slidesPerview:3,
            spacebetween:30,
        },
        1300:{
            slidesPerview:4,
            spacebetween:30,
        },

     }}
     modules={{Autoplay}}
     className='h-[488px] md-[533px] xl:h-{422px} mt-5'>
        {
            ResidenciesList.map((Properties)=>(
                <SwiperSlide key={Properties.title}>
                    <Item property={property}/>
                </SwiperSlide>
            ))
        }

    </Swiper>
    </section>

  )
}

export default Properties;