
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='relative h-[25rem] flex'>
            <img src='/Goldbackround.jpg' className='object-cover w-full h-full' alt='Background' />
            <div className='absolute z-30 flex flex-col items-center justify-center w-full h-full p12'>
                <p className='text-white text-[60px] text-center'>
                    A home is a place to start your story
                </p>
            <p className='text-white text-[20px] text-center font-semibold'>
            "Help us help you find a home, where every story begins and every heart finds its place."
            </p>
            <div className='pt4'>
            <input type='search'
            className='bg-white py4 w-[27rem] rounded-full pl-5 placeholder:
            text-gray-500 placeholder:text-[20px]'
            placeholder='Adress'/>

            <div className='absolute w-12 h-12
            FaSearch  text-yellow top-1 right '>

            </div>

            </div>
            </div>
        </div>
    );
};

export default Hero;
