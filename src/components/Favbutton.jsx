import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const FavButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorited((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggleFavorite}
      aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
      className={`p-2 rounded-full transition-colors duration-200 
        ${isFavorited ? "bg-red-500 text-white" : "bg-white text-red-500"} 
        hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500`}
    >
      <FaHeart size={23} />
    </button>
  );
};

export default FavButton;

// temp
// import React from "react";
// import { FaHeart } from "react-icons/fa";

// const FavButton = () => {
//   return (
//     <FaHeart size={23} className="bg-red-500 cursor-pointer drop-shadow-sm" />
//   );
// };

// export default FavButton;
