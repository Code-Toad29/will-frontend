// import React from "react";
// import FavButton from "./Favbutton";
// import { MdOutlineBathtub, MdOutlineBed, MdOutlineGarage } from "react-icons/md";

// const Item=({property})=>{
//     return(
//     <div>
//         <div className="rounded-2xl p-5 bg-white">
//          <img src={property.image} alt={property.title} className="rounded"></img>   
//          {/* Heart Btn */}
//          <FavButton/>
//         </div>
//         <div>
//         <h5>{property.city}</h5>  
//         <h4 className="meduim-18 line-clamp:">{property.title}</h4>  
//         </div>
//         {/* info */}
//         <div className="flex-gap-x-2 py-2">
//         <div className='flex Center gap x-2-border-r
//          border-slate-900/50 pr-4 font-[500]'><MdOutlineBed/>
//         {property.facilities.bedrooms}</div>

//         <div className="flex-gap-x-2 py-2">
//         <div className='flex Center gap x-2-border-r
//          border-slate-900/50 pr-4 font-[500]'><MdOutlineBathtub/>
//         {property.facilities.bathrooms}</div>

//         <div className="flex-gap-x-2 py-2">
//         <div className='flex Center gap x-2-border-r
//          border-slate-900/50 pr-4 font-[500]'><MdOutlineGarage/>
//         {property.facilities.parking}</div>
//         </div>
//         <p>{property.description}</p>
//         <div className="flexbetween"></div>
//         <div>${property.price}.00</div>
//         <Link to={"/"}>
//         <button className='btn-secondry roundedx1 
//         !py-[7px] !px-5-shadow-sm'>View Details</button>

        
//         </Link>

//         </div>
//         </div>


//     )

// export default Item,
import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link
import FavButton from "./Favbutton";
import { MdOutlineBathtub, MdOutlineBed, MdOutlineGarage } from "react-icons/md";


const Item = ({ property }) => {
    return (
        <div className="rounded-2xl p-5 bg-white">
            <div className="relative">
                <img src={property.image} alt={property.title} className="rounded" />
                <FavButton />
            </div>
            <div>
                <h5>{property.city}</h5>
                <h4 className="medium-18 line-clamp">{property.title}</h4>
            </div>
            {/* Info */}
            <div className="flex gap-x-2 py-2">
                <div className='flex items-center gap-x-2 border-r border-slate-900/50 pr-4 font-medium'>
                    <MdOutlineBed />
                    {property.facilities.bedrooms}
                </div>
                <div className='flex items-center gap-x-2 border-r border-slate-900/50 pr-4 font-medium'>
                    <MdOutlineBathtub />
                    {property.facilities.bathrooms}
                </div>
                <div className='flex items-center gap-x-2'>
                    <MdOutlineGarage />
                    {property.facilities.parking}
                </div>
            </div>
            <p>{property.description}</p>
            <div className="flex justify-between items-center mt-4">
                <div>${property.price}.00</div>
                <Link to={"/"}>
                    <button className='btn-secondary rounded py-2 px-5 shadow-sm'>
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Item;
