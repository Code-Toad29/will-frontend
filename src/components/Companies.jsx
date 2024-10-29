// import React from 'react'
// import "./Companies.css"

// const  Companies =() => {
// return (
//     <section className='c-wrappper'>
//     <div className='paddings  innerWidth flexCenter c-container'>
//     <img src='./Jawitz.png'  alt=''/>
//     <img src='./Remax.png' alt=''/>
//     <img src='./PamGolding.png' alt=''/>
//     <img src='./Stanlib.png' alt=''/>
//     </div>
//     </section>

// )
// };

// export default Companies;

// to
import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./Jawitz.png" alt="Jawitz" />
        <img src="./Remax.png" alt="Remax" />
        <img src="./PamGolding.png" alt="Pam Golding" />
        <img src="./Stanlib.png" alt="Stanlib" />
      </div>
    </section>
  );
};

export default Companies;
