

// import React from 'react';
// import { PiShoppingCartLight } from 'react-icons/pi';
// import { MdMenu } from 'react-icons/md';
// import { MdFavorite } from 'react-icons/md';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <header className='bg-black'>
//             <nav className='container mx-auto flex justify-between items-center py-6'>
//                 {/* Logo section */}
//                 <img src='/logo.jpg' alt='Company logo' width={80} />

//                 <div className='text-xl flex items-center  relative gap-20 font-bold uppercase'>
//                     {/* Menu section */}
//                     <div > 
//                         <ul className='flex gap-8 text-yellow-600' role="navigation">

                            
                            
//                             <li><Link to='/home' className='hover:text-white'>Home</Link></li>
//                             <li><Link to='/buy' className='hover:text-white'>Buy</Link></li>
//                             <li><Link to='/rent' className='hover:text-white'>Rent</Link></li>
//                             <li><Link to='/sell' className='hover:text-white'>Sell</Link></li>
//                             <li><Link to='/contact' className='hover:text-white'>Contact</Link></li>
//                             <li>
//                             <a href=''className='text-yellow-600 hover:text-white transition duration-200'> 
//                             <MdFavorite/>
//                             </a>
//                             </li>  
//                             <li>
//                             <a href='' className='text-yellow-600 hover:text-white transition duration-200'>
//                                 <PiShoppingCartLight/> 
//                             </a>   
//                             </li>
//                             <li>
//                             <Link to='/sign-up' className='bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-200'>Sign up</Link>
//                             </li>
//                             {/* <li>
//                               <Link to='/log-in'  className  >className='bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-200'>Log in</li>
//                             </Link>
//                             <li> */}
//                             <li>
//                             <Link to='/log-in' className='bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-200'>
//                              Log in
//                              </Link>
//                              </li>

                    
//                             <a href=''className='text-yellow-600 hover:text-white transition duration-200'> 
//                             <MdMenu/> 
//                             </a>
//                             </li>
        

//                         </ul>   
//                     </div> 
//                 </div>
//             </nav>
//         </header>
//     );
// }

// export default Navbar;
// import React from 'react';
// import { PiShoppingCartLight } from 'react-icons/pi';
// import { MdMenu, MdFavorite } from 'react-icons/md';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <header className='bg-black'>
//             <nav className='container mx-auto flex justify-between items-center py-6'>
//                 {/* Logo section */}
//                 <img src='/logo.jpg' alt='Company logo' width={80} />

//                 <div className='text-xl flex items-center relative gap-20 font-bold uppercase'>
//                     {/* Menu section */}
//                     <ul className='flex gap-8 text-yellow-600' role="navigation">
//                         <li><Link to='/' className='hover:text-white'>Home</Link></li>
//                         <li><Link to='/buy' className='hover:text-white'>Buy</Link></li>
//                         <li><Link to='/rent' className='hover:text-white'>Rent</Link></li>
//                         <li><Link to='/sell' className='hover:text-white'>Sell</Link></li>
//                         <li><Link to='/contact' className='hover:text-white'>Contact</Link></li>
//                         <li>
//                             <Link to='/favorites' className='text-yellow-600 hover:text-white transition duration-200'>
//                                 <MdFavorite />
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to='/cart' className='text-yellow-600 hover:text-white transition duration-200'>
//                                 <PiShoppingCartLight />
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to='/sign-up' className='bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-200'>Sign up</Link>
//                         </li>
//                         <li>
//                             <Link to='/log-in' className='bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-200'>Log in</Link>
//                         </li>
//                         <li>
//                             <Link to='/menu' className='text-yellow-600 hover:text-white transition duration-200'>
//                                 <MdMenu />
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </header>
//     );
// }

// export default Navbar;
// import React, { useState } from 'react';
// import { PiShoppingCartLight } from 'react-icons/pi';
// import { MdMenu, MdFavorite } from 'react-icons/md';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <header className='bg-black'>
//             <nav className='container mx-auto flex justify-between items-center py-6'>
//                 {/* Logo section */}
//                 <img src='/logo.jpg' alt='Company logo' width={80} />

//                 {/* Hamburger Menu for Mobile */}
//                 <button className='md:hidden text-yellow-600' onClick={toggleMenu}>
//                     <MdMenu size={24} />
//                 </button>

//                 {/* Menu section */}
//                 <div className={`absolute md:static left-0 w-full md:w-auto bg-black transition-all duration-300 ${isOpen ? 'top-16' : 'top-[-200px]'}`}>
//                     <ul className='flex flex-col md:flex-row gap-8 text-yellow-600 p-4 md:p-0' role="navigation">
//                         <li><Link to='/' className='hover:text-white'>Home</Link></li>
//                         <li><Link to='/buy' className='hover:text-white'>Buy</Link></li>
//                         <li><Link to='/rent' className='hover:text-white'>Rent</Link></li>
//                         <li><Link to='/sell' className='hover:text-white'>Sell</Link></li>
//                         <li><Link to='/contact' className='hover:text-white'>Contact</Link></li>
//                         <li>
//                             <Link to='/favorites' className='text-yellow-600 hover:text-white transition duration-200'>
//                                 <MdFavorite />
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to='/cart' className='text-yellow-600 hover:text-white transition duration-200'>
//                                 <PiShoppingCartLight />
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to='/sign-up' className='bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-200'>Sign up</Link>
//                         </li>
//                         <li>
//                             <Link to='/log-in' className='bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-200'>Log in</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </header>
//     );
// }

// export default Navbar;


import React, { useState } from 'react';
import { MdMenu, MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };

    return (
        <header className='bg-black'>
            <nav className='container mx-auto flex justify-between items-center py-6'>
                {/* Logo section */}
                <img src='/logo.jpg' alt='Company logo' width={80} />

                {/* Hamburger Menu for Mobile */}
                <button className='md:hidden text-yellow-600' onClick={toggleMenu}>
                    <MdMenu size={24} />
                </button>

                {/* Overlay for mobile menu */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={handleLinkClick} />
                )}

                {/* Menu section */}
                <div className={`absolute md:static left-0 w-full md:w-auto bg-black transition-all duration-300 z-20 ${isOpen ? 'top-16' : 'top-[-200px]'}`}>
                    <ul className='flex flex-col md:flex-row gap-8 text-yellow-600 p-4 md:p-0' role="navigation">
                        <li><Link to='/home' className='hover:text-white' onClick={handleLinkClick}>Home</Link></li>
                        <li><Link to='/marketplace' className='hover:text-white' onClick={handleLinkClick}>Marketplace</Link></li>
                        <li><Link to='/sell' className='hover:text-white' onClick={handleLinkClick}>Sell</Link></li>
                        <li><Link to='/about' className='hover:text-white' onClick={handleLinkClick}>About</Link></li>
                        <li><Link to='/contact' className='hover:text-white' onClick={handleLinkClick}>Contact</Link></li>
                        <li>
                            <Link to='/favorites' className='text-yellow-600 hover:text-white transition duration-200' onClick={handleLinkClick}>
                                <MdFavorite />
                            </Link>
                        </li>
                        <li>
                            <Link to='/sign-up' className='bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-200' onClick={handleLinkClick}>Sign up</Link>
                        </li>
                        <li>
                            <Link to='/log-in' className='bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-200' onClick={handleLinkClick}>Log in</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
