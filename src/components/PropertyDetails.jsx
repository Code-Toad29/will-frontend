//mpney
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader"; // Ensure you have a Loader component
import "./PropertyDetails.css"; // Import the CSS file

const PropertyDetails = () => {
  const { listingId } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State for error handling

  const getPropertyDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/listings/get/${listingId}`
      );
      if (!response.ok) {
        const errors = await response.json();
        console.log(errors);
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
      <h3>Price: ${property.price.toLocaleString()}</h3>{" "}
      {/* Format price with commas */}
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

// // prop map view
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Loader from "../components/Loader"; // Ensure you have a Loader component
// import MapView from "./MapView"; // Import the MapView component
// import "./PropertyDetails.css"; // Import the CSS file

// const PropertyDetails = () => {
//   const { listingId } = useParams();
//   const [property, setProperty] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // State for error handling

//   const getPropertyDetails = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/listings/get/${listingId}`
//       );
//       if (!response.ok) {
//         const errors = await response.json();
//         console.log(errors);
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
//         {property.imageUrls && property.imageUrls.length > 0 ? (
//           property.imageUrls.map((url, index) => (
//             <img
//               key={index}
//               src={url}
//               alt={property.name}
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "fallback-image-url"; // Replace with your fallback image URL
//               }}
//             />
//           ))
//         ) : (
//           <p>No images available</p> // Fallback if no images are available
//         )}
//       </div>
//       <p>{property.description}</p>
//       <h3>Address: {property.address}</h3>
//       <h3>Price: ${property.price.toLocaleString()}</h3>{" "}
//       {/* Format price with commas */}
//       <h4>Amenities:</h4>
//       <ul>
//         <li>{property.bedrooms} Bedrooms</li>
//         <li>{property.bathrooms} Bathrooms</li>
//         <li>{property.parking ? "Parking Available" : "No Parking"}</li>
//       </ul>
//       <h4>Contact Information:</h4>
//       <p>User ID: {property.userRef}</p>
//       {/* Add the MapView component here */}
//       {property.latitude && property.longitude && (
//         <div className="map-section">
//           <h4>Location:</h4>
//           <MapView
//             latitude={property.latitude}
//             longitude={property.longitude}
//             propertyName={property.name}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default PropertyDetails;
// ///cococ

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Loader from "../components/Loader"; // Ensure you have a Loader component
// import "./PropertyDetails.css"; // Import the CSS file

// const PropertyDetails = () => {
//   const { listingId } = useParams();
//   const [property, setProperty] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // State for error handling

//   const getPropertyDetails = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/listings/get/${listingId}`
//       );
//       if (!response.ok) {
//         const errors = await response.json();
//         console.log(errors);
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
//         {property.imageUrls && property.imageUrls.length > 0 ? (
//           property.imageUrls.map((url, index) => (
//             <img
//               key={index}
//               src={url}
//               alt={property.name}
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "fallback-image-url"; // Replace with your fallback image URL
//               }}
//             />
//           ))
//         ) : (
//           <p>No images available</p> // Fallback if no images are available
//         )}
//       </div>
//       <p>{property.description}</p>
//       <h3>Address: {property.address}</h3>
//       <h3>Price: ${property.price.toLocaleString()}</h3>{" "}
//       {/* Format price with commas */}
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

// ///cococ
