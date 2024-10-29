// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Loader from "../components/Loader";

// const PropertyDetails = () => {
//   const { listingId } = useParams();
//   const [property, setProperty] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // State for error handling

//   const getPropertyDetails = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:3001/properties/${listingId}`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch property details");
//       }
//       const data = await response.json();
//       setProperty(data);
//     } catch (err) {
//       console.error("Failed to fetch property details:", err);
//       setError(err.message); // Set the error message
//     } finally {
//       setLoading(false); // Ensure loading is set to false regardless of success or failure
//     }
//   };

//   useEffect(() => {
//     getPropertyDetails();
//   }, [listingId]);

//   if (loading) return <Loader />;

//   if (error) return <div>Error: {error}</div>; // Display error message if there's an error

//   if (!property) return <div>No property found.</div>; // Fallback if property data is not available

//   return (
//     <div className="property-details">
//       <h1>{property.name}</h1>
//       <div className="images">
//         {property.imageUrls.map((url, index) => (
//           <img
//             key={index}
//             src={url}
//             alt={property.name}
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = "fallback-image-url";
//             }}
//           />
//         ))}
//       </div>
//       <p>{property.description}</p>
//       <h3>Address: {property.address}</h3>
//       <h3>Price: ${property.price}</h3>
//       <h4>Amenities:</h4>
//       <ul>
//         <li>{property.bedrooms} Bedrooms</li>
//         <li>{property.bathrooms} Bathrooms</li>
//         <li>{property.parking ? "Parking Available" : "No Parking"}</li>
//       </ul>
//       <h4>Contact Information:</h4>
//       <p>User ID: {property.userRef}</p>
//     </div>
//   );
// };

// export default PropertyDetails;

//mpney
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader"; // Ensure you have a Loader component

const PropertyDetails = () => {
  const { listingId } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State for error handling

  const getPropertyDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/properties/${listingId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch property details");
      }
      const data = await response.json();
      setProperty(data);
    } catch (err) {
      console.error("Failed to fetch property details:", err);
      setError(err.message); // Set the error message
    } finally {
      setLoading(false); // Ensure loading is set to false regardless of success or failure
    }
  };

  useEffect(() => {
    getPropertyDetails();
  }, [listingId]);

  if (loading) return <Loader />;

  if (error) return <div>Error: {error}</div>; // Display error message if there's an error

  if (!property) return <div>No property found.</div>; // Fallback if property data is not available

  return (
    <div className="property-details">
      <h1>{property.name}</h1>
      <div className="images">
        {property.imageUrls && property.imageUrls.length > 0 ? (
          property.imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={property.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "fallback-image-url"; // Replace with your fallback image URL
              }}
            />
          ))
        ) : (
          <p>No images available</p> // Fallback if no images are available
        )}
      </div>
      <p>{property.description}</p>
      <h3>Address: {property.address}</h3>
      <h3>Price: ${property.price}</h3>
      <h4>Amenities:</h4>
      <ul>
        <li>{property.bedrooms} Bedrooms</li>
        <li>{property.bathrooms} Bathrooms</li>
        <li>{property.parking ? "Parking Available" : "No Parking"}</li>
      </ul>
      <h4>Contact Information:</h4>
      <p>User ID: {property.userRef}</p>
    </div>
  );
};

export default PropertyDetails;
