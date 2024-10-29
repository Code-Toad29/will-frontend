// // PropertyCard.js
// import React from "react";
// import PropTypes from "prop-types";
// import "./PropertyCard.css";

// const PropertyCard = ({ property, onViewDetails }) => {
//   return (
//     <div className="property-card">
//       <img
//         src={property.imageUrls[0]}
//         alt={property.name}
//         className="property-image"
//       />
//       <h2>{property.name}</h2>
//       <p>{property.description}</p>
//       <p>
//         <strong>Price:</strong> R{property.price.toLocaleString()}
//       </p>
//       <p>
//         <strong>Address:</strong> {property.address}
//       </p>
//       <p>
//         <strong>Bedrooms:</strong> {property.bedrooms}
//       </p>
//       <p>
//         <strong>Bathrooms:</strong> {property.bathrooms}
//       </p>
//       <p>
//         <strong>Parking:</strong> {property.parking ? "Yes" : "No"}
//       </p>
//       <button onClick={() => onViewDetails(property)}>View Details</button>{" "}
//       {/* View Details button */}
//     </div>
//   );
// };

// PropertyCard.propTypes = {
//   property: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     address: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     bedrooms: PropTypes.number.isRequired,
//     bathrooms: PropTypes.number.isRequired,
//     parking: PropTypes.bool.isRequired,
//     imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
//   }).isRequired,
//   onViewDetails: PropTypes.func.isRequired, // Prop for the View Details function
// };

// export default PropertyCard;

// PropertyCard.js
// 2
// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import "./PropertyCard.css";

// const PropertyCard = ({ property }) => {
//   return (
//     <div className="property-card">
//       <img
//         src={property.imageUrls[0]}
//         alt={property.name}
//         className="property-image"
//       />
//       <h2>{property.name}</h2>
//       <p>{property.description}</p>
//       <p>
//         <strong>Price:</strong> R{property.price.toLocaleString()}
//       </p>
//       <p>
//         <strong>Address:</strong> {property.address}
//       </p>
//       <p>
//         <strong>Bedrooms:</strong> {property.bedrooms}
//       </p>
//       <p>
//         <strong>Bathrooms:</strong> {property.bathrooms}
//       </p>
//       <p>
//         <strong>Parking:</strong> {property.parking ? "Yes" : "No"}
//       </p>
//       <Link to={`/listing/${property.id}`} className="view-details-button">
//         View Details
//       </Link>{" "}
//       {/* Link to Listing Details */}
//     </div>
//   );
// };

// PropertyCard.propTypes = {
//   property: PropTypes.shape({
//     id: PropTypes.string.isRequired, // Assuming id is a property
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     address: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     bedrooms: PropTypes.number.isRequired,
//     bathrooms: PropTypes.number.isRequired,
//     parking: PropTypes.bool.isRequired,
//     imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
//   }).isRequired,
// };

// export default PropertyCard;

PropertyCard.js;
import React from "react";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/listing/${property.id}`); // Navigate to the details page
  };

  return (
    <div className="property-card">
      <img src={property.imageUrls[0]} alt={property.name} />
      <h2>{property.name}</h2>
      <p>{property.description}</p>
      <button onClick={handleViewDetails}>View Details</button>
    </div>
  );
};

export default PropertyCard;
