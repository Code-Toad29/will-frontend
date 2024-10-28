// PropertyModal.js
import React from "react";
import PropTypes from "prop-types";
import "./PropertyModal.css"; // Add styles for the modal

const PropertyModal = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{property.name}</h2>
        <img
          src={property.imageUrls[0]}
          alt={property.name}
          className="modal-image"
        />
        <p>{property.description}</p>
        <p>
          <strong>Price:</strong> R{property.price.toLocaleString()}
        </p>
        <p>
          <strong>Address:</strong> {property.address}
        </p>
        <p>
          <strong>Bedrooms:</strong> {property.bedrooms}
        </p>
        <p>
          <strong>Bathrooms:</strong> {property.bathrooms}
        </p>
        <p>
          <strong>Parking:</strong> {property.parking ? "Yes" : "No"}
        </p>
        {/* Additional details, like map or more images can go here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

PropertyModal.propTypes = {
  property: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PropertyModal;
