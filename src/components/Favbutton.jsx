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
// import React, { useState } from "react";
// import { FaHeart } from "react-icons/fa";
// import { useFavorites } from "./FavouritesContext"; // Import the context

// const FavButton = ({ property }) => {
//   const { favorites, addFavorite, removeFavorite } = useFavorites();
//   const isFavorited = favorites.some((fav) => fav.id === property.id);

//   const handleToggleFavorite = () => {
//     if (isFavorited) {
//       removeFavorite(property.id);
//     } else {
//       addFavorite(property);
//     }
//   };

//   return (
//     <button
//       onClick={handleToggleFavorite}
//       aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
//       className={`p-2 rounded-full transition-colors duration-200
//         ${isFavorited ? "bg-red-500 text-white" : "bg-white text-red-500"}
//         hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500`}
//     >
//       <FaHeart size={23} />
//     </button>
//   );
// };

// export default FavButton;
