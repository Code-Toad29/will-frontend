// import React from 'react'

// const Sell=() =>{
//   return (
//     <div>Sell

//     </div>
//   );
// }

// export default Sell;


import SellHead from '../components/sellHead'; // Use uppercase for component name
import React from 'react';

const Sell = () => {
  return (
    <div>
      <header>
        {/* You can add header content here if needed */}
      </header>
      <SellHead /> {/* Corrected component name */}
    </div>
  );
}

export default Sell;
