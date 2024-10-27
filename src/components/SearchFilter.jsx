import React, { useState } from "react";

const SearchFilters = ({ onSearch }) => {
  const [type, setType] = useState("buy");
  const [propertyType, setPropertyType] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ type, propertyType, price, bedrooms, bathrooms });
  };

  return (
    <form onSubmit={handleSearch}>
      <div>
        <label>
          <input
            type="radio"
            value="buy"
            checked={type === "buy"}
            onChange={() => setType("buy")}
          />
          Buy
        </label>
        <label>
          <input
            type="radio"
            value="rent"
            checked={type === "rent"}
            onChange={() => setType("rent")}
          />
          Rent
        </label>
      </div>

      <div>
        <label>Property Type:</label>
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="">Select</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="commercial">Commercial</option>
          <option value="land">Land</option>
        </select>
      </div>

      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Max Price"
        />
      </div>

      <div>
        <label>Bedrooms:</label>
        <input
          type="number"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          placeholder="Min Bedrooms"
        />
      </div>

      <div>
        <label>Bathrooms:</label>
        <input
          type="number"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          placeholder="Min Bathrooms"
        />
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchFilters;
