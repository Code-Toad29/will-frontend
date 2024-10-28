Marketplace.js;
import React, { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import PropertyModal from "../components/PropertyModal"; // Importing the modal component
import "./Marketplace.css";

const propertiesData = [
  // Add your property data here...
];

const Marketplacesec = () => {
  const [selectedProperty, setSelectedProperty] = useState(null); // State to track the selected property

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div>
      <h1>Marketplace</h1>
      <div className="grid-container">
        {propertiesData.map((property, index) => (
          <PropertyCard
            key={index}
            property={property}
            onViewDetails={handleViewDetails} // Pass the function to the PropertyCard
          />
        ))}
      </div>
      <PropertyModal property={selectedProperty} onClose={handleCloseModal} />{" "}
      {/* Modal for details */}
    </div>
  );
};

export default Marketplacesec;

// Marketplace.js
// import React from "react";
// import PropertyCard from "../components/PropertyCard";
// import PropertyModal from "../components/PropertyModal";
// import "./Marketplace.css";

// const propertiesData = [
//   // Add your property data here with an 'id' for each property...
// ];

// const Marketplacesec = () => {
//   return (
//     <div>
//       <h1>Marketplace</h1>
//       <div className="grid-container">
//         {propertiesData.map((property) => (
//           <PropertyCard
//             key={property.id} // Ensure a unique key
//             property={property} // Pass the whole property object
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Marketplacesec;
