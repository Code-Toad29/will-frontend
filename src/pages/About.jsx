// import React from 'react'
// import Navbar from '../components/Navbar';
// import Aboutdes from '../components/Aboutdes';
// import Aboutgoals from '../components/Aboutgoals';

// const About =()=> {
//   return (
//     <div>
//     <header>

//     </header>
//     <Aboutdes/>
//     <section>
//     <Aboutgoals/>
//     </section>

//     </div>
//   )
// }
// export default  About;

// 2
// import React from "react";
// import Navbar from "../components/Navbar"; // If you want to use Navbar, uncomment this line
// import Aboutdes from "../components/Aboutdes";
// import Aboutgoals from "../components/Aboutgoals";

// const About = () => {
//   return (
//     <div>
//       <header>
//         {/* Uncomment the next line if you want to include the Navbar */}
//         {/* <Navbar /> */}
//       </header>
//       <main>
//         <Aboutdes />
//         <section>
//           <Aboutgoals />
//         </section>
//       </main>
//     </div>
//   );
// };

// export default About;

// 2
// import React from "react";
// import Navbar from "../components/Navbar"; // If you want to use Navbar, uncomment this line
// import Aboutdes from "../components/Aboutdes";
// import Aboutgoals from "../components/Aboutgoals";
// import Leadership from "../components/Meettheteam";

// const About = () => {
//   return (
//     <div>
//       <header>
//         {/* Uncomment the next line if you want to include the Navbar */}
//         {/* <Navbar /> */}
//       </header>
//       <main>
//         <Aboutdes />
//         <section>
//           <Aboutgoals />
//           <Leadership />
//         </section>
//       </main>
//     </div>
//   );
// };

// export default About;

import React from "react";
import Navbar from "../components/Navbar"; // Uncomment this line to use Navbar
import Aboutdes from "../components/Aboutdes";
import Aboutgoals from "../components/Aboutgoals";
import Leadership from "../components/Meettheteam";

const About = () => {
  return (
    <div>
      <header>
        {/* Uncomment the next line if you want to include the Navbar */}
        {/* <Navbar /> */}
      </header>
      <main>
        <Aboutdes />
        <section>
          <Aboutgoals />
          <Leadership />
        </section>
      </main>
    </div>
  );
};

export default About;
