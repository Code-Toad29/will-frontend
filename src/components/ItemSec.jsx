// chat

// import React from "react";
// import {
//   MdOutlineBathtub,
//   MdOutlineBed,
//   MdOutlineGarage,
// } from "react-icons/md";
// import { Link } from "react-router-dom";
// import FavButton from "./FavButton";

// const Item = ({ property }) => {
//   return (
//     <div>
//       <div className="rounded-2xl p-5 bg-white">
//         <img src={property.image} alt={property.title} className="rounded" />
//         {/* Heart Button */}
//         <FavButton />
//       </div>
//       <div>
//         <h5>{property.city}</h5>
//         <h4 className="medium-18 line-clamp">{property.title}</h4>
//       </div>
//       {/* Info */}
//       <div className="flex gap-x-2 py-2">
//         <div className="flex items-center gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
//           <MdOutlineBed />
//           {property.facilities.bedrooms}
//         </div>
//         <div className="flex items-center gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
//           <MdOutlineBathtub />
//           {property.facilities.bathrooms}
//         </div>
//         <div className="flex items-center gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
//           <MdOutlineGarage />
//           {property.facilities.parking}
//         </div>
//       </div>
//       <p>{property.description}</p>
//       <div className="flex justify-between">
//         <div>${property.price}.00</div>
//         <Link to="/">
//           <button className="btn-secondary roundedx1 !py-[7px] !px-5 shadow-sm">
//             View Details
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Item;

// fight
import React from "react";
import {
  MdOutlineBathtub,
  MdOutlineBed,
  MdOutlineGarage,
} from "react-icons/md";
import { Link } from "react-router-dom";
import FavButton from "./FavButton";

const Item = ({ property }) => {
  console.log(property);

  return (
    <div className="rounded-2xl p-5 bg-white shadow-md">
      <div className="relative">
        <img
          src={property?.imageUrls[0]}
          alt={property?.title || "Property Image"}
          className="rounded-lg w-full h-auto"
        />
        {/* Heart Button */}
        <FavButton />
      </div>
      <div className="mt-4">
        <h5 className="text-lg font-semibold">
          {property?.city || "Johannesburg"}
        </h5>
        <h4 className="medium-18 line-clamp">{property?.title}</h4>
      </div>
      {/* Info */}
      <div className="flex gap-x-4 py-2">
        {property?.bedrooms > 0 && (
          <div className="flex items-center gap-x-2 border-r border-slate-900/50 pr-4 font-medium">
            <MdOutlineBed />
            {property?.bedrooms}
          </div>
        )}
        {property?.bathrooms > 0 && (
          <div className="flex items-center gap-x-2 border-r border-slate-900/50 pr-4 font-medium">
            <MdOutlineBathtub />
            {property?.bathrooms}
          </div>
        )}
        {property?.parking && (
          <div className="flex items-center gap-x-2 border-r border-slate-900/50 pr-4 font-medium">
            <MdOutlineGarage />
            <p>Parking Available</p>
          </div>
        )}
      </div>
      <p className="text-sm text-gray-700">{property?.description}</p>
      <div className="flex justify-between mt-4">
        <div className="text-xl font-bold">${property?.price}.00</div>
        <Link to={`/property/${property?._id}`}>
          <button className="btn-secondary rounded-md py-2 px-4 shadow-sm">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
