// import ContactForm from "@/components/ContactForm";
// import React from "react";

// const Contact = () => {
//   return (
//     <div>
//       <h1>Contact</h1>
//       <ContactForm />
//     </div>
//   );
// };

// export default Contact;

import ContactAgent from "../components/ContactAgent";
import Contacthead from "../components/Contacthead";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Contacthead />
      <ContactAgent />
    </div>
  );
};

export default Contact;
