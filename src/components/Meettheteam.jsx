// const people = [
//   {
//     name: "Leslie Alexander",
//     role: "Co-Founder / CEO",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
//   {
//     name: "Jane Doe",
//     role: "Chief Operating Officer",
//     imageUrl:
//       "https://images.unsplash.com/photo-1606434232615-3e2067ec23d2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
//   {
//     name: "John Smith",
//     role: "Chief Technology Officer",
//     imageUrl:
//       "https://images.unsplash.com/photo-1552428980-02eabc80a154?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
//   // Add more people as needed...
// ];

// export default function Leadership() {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
//         <div className="max-w-xl">
//           <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
//             Meet Our Leadership
//           </h2>
//           <p className="mt-6 text-lg leading-8 text-gray-600">
//             We’re a dynamic group of individuals who are passionate about what
//             we do and dedicated to delivering the best results for our clients.
//           </p>
//         </div>
//         <ul
//           role="list"
//           className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
//         >
//           {people.map((person) => (
//             <li key={person.name}>
//               <div className="flex items-center gap-x-6">
//                 <img
//                   alt={`${person.name}'s portrait`}
//                   src={person.imageUrl}
//                   className="h-16 w-16 rounded-full"
//                 />
//                 <div>
//                   <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
//                     {person.name}
//                   </h3>
//                   <p className="text-sm font-semibold leading-6 text-indigo-600">
//                     {person.role}
//                   </p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./Meettheteam.css"; // Make sure to import your CSS file

const people = [
  {
    name: "Eulene Witbooi",
    role: "Co-Founder / CEO",
    imageUrl: "/Agents/Eulene Witbooi.jpeg",
  },
  {
    name: "Karbo Lawane",
    role: "Chief Operating Officer",
    imageUrl: "/Agents/Karabo Lwane.jpeg",
  },
  {
    name: "Nanitska Rosant",
    role: "Chief Technology Officer",
    imageUrl: "/Agents/Nanitska Rosant.jpeg",
  },
  {
    name: "Ntandekazi Mtirara",
    role: "Senior Estate Agent",
    imageUrl: "/Agents/Ntandekazi Mtirara.jpeg",
  },
  {
    name: "Rochelle Jacobs",
    role: "Estate Agent",
    imageUrl: "/Agents/Rochelle Jacobs.jpeg",
  },
  {
    name: "Tyee Baartman",
    role: "Junior Estate Agent",
    imageUrl: "/Agents/Tyee Baartman.jpeg",
  },
];

export default function Leadership() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Meet The Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-8">
                {" "}
                {/* Increased gap for better spacing */}
                <img
                  alt={`${person.name}'s portrait`}
                  src={person.imageUrl}
                  className="h-24 w-24 rounded-full transition-transform duration-300 ease-in-out hover:scale-110" // Increased size here
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
