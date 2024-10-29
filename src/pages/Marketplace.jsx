// 1
// import React from "react";
// import Properties from "../components/Properties";
// import SearchFilters from "../components/SearchFilter";
// import SearchComponent from "./SearchComponent";

// const Marketplace = () => {
//   return (
//     <div>
//       Marketplace
//       <SearchFilters />
//       <Properties />
//     </div>
//   );
// };

// export default Marketplace;

// 2

// import React from "react";
// import Properties from "../components/Properties";
// import SearchFilters from "../components/SearchFilter";

// const Marketplace = () => {
//   return (
//     <div>
//       Marketplace
//       <SearchFilters />
//       <Properties />
//     </div>
//   );
// };

// export default Marketplace;

import React from "react";
import Properties from "../components/Properties"; // Adjust the path as needed
import SearchFilters from "../components/SearchFilter";

const Marketplace = () => {
  return (
    <div>
      {/* Use grid layout */}
      <SearchFilters />
      <Properties layout="grid" />
    </div>
  );
};

export default Marketplace;
