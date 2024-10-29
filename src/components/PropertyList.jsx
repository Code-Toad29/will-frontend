import React from "react";
import { Link } from "react-router-dom";

const PropertyList = ({ properties }) => {
  return (
    <div>
      <h1>Property Listings</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <h2>{property.name}</h2>
            <p>{property.description}</p>
            <Link to={`/property/${property.id}`}>View More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
