// test
import React, { useEffect, useState } from "react";
import Item from "./ItemSec";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const Properties = ({ layout = "carousel" }) => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/listings/get")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProperties(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="maxx-padd-container">
      {/* Removed the black section */}
      {/* Render based on layout prop */}
      {layout === "carousel" ? (
        <Carousel>
          <CarouselContent>
            {properties.map((property) => (
              <CarouselItem
                key={property._id}
                className="basis-1/3 md:basis-1/5"
              >
                <Item property={property} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property) => (
            <div className="basis-1/3 md:basis-1/5" key={property._id}>
              <Item property={property} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Properties;

// gtt

// import React from "react";
// import Item from "./ItemSec"; // Ensure you have this import
// import ResidenciesList, { residenciesList } from "./Residencies"; // Ensure this import is correct
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../components/ui/carousel";

// const Properties = ({ layout = "carousel" }) => {
//   return (
//     <section className="maxx-padd-container">
//       <div className="maxx-padd container bg-primary py-16 xl:py-28 rounded-3xl">
//         <span>Your Future Home Awaits</span>
//         <h2 className="h2">Find your dream home</h2>
//         <div className="flex justify-between mt-8 mb-6">
//           <h5>
//             <span>Showing 1-9</span> out of 3k properties
//           </h5>
//         </div>
//       </div>

//       {/* Render based on layout prop */}
//       {layout === "carousel" ? (
//         <Carousel>
//           <CarouselContent>
//             {residenciesList.map((property) => (
//               <CarouselItem className="basis-1/3 md:basis-1/5">
//                 <Item property={property} />
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {residenciesList.map((property) => (
//             <div className="basis-1/3 md:basis-1/5" key={property.id}>
//               <Item property={property} />
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Properties;
