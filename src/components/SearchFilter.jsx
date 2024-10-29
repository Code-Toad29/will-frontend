// import React, { useState } from "react";

// const SearchFilters = ({ onSearch }) => {
//   const [type, setType] = useState("buy");
//   const [propertyType, setPropertyType] = useState("");
//   const [price, setPrice] = useState("");
//   const [bedrooms, setBedrooms] = useState("");
//   const [bathrooms, setBathrooms] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     onSearch({ type, propertyType, price, bedrooms, bathrooms });
//   };

//   return (
//     <form onSubmit={handleSearch}>
//       <div>
//         <label>
//           <input
//             type="radio"
//             value="buy"
//             checked={type === "buy"}
//             onChange={() => setType("buy")}
//           />
//           Buy
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="rent"
//             checked={type === "rent"}
//             onChange={() => setType("rent")}
//           />
//           Rent
//         </label>
//       </div>

//       <div>
//         <label>Property Type:</label>
//         <select
//           value={propertyType}
//           onChange={(e) => setPropertyType(e.target.value)}
//         >
//           <option value="">Select</option>
//           <option value="apartment">Apartment</option>
//           <option value="house">House</option>
//           <option value="commercial">Commercial</option>
//           <option value="land">Land</option>
//         </select>
//       </div>

//       <div>
//         <label>Price:</label>
//         <input
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           placeholder="Max Price"
//         />
//       </div>

//       <div>
//         <label>Bedrooms:</label>
//         <input
//           type="number"
//           value={bedrooms}
//           onChange={(e) => setBedrooms(e.target.value)}
//           placeholder="Min Bedrooms"
//         />
//       </div>

//       <div>
//         <label>Bathrooms:</label>
//         <input
//           type="number"
//           value={bathrooms}
//           onChange={(e) => setBathrooms(e.target.value)}
//           placeholder="Min Bathrooms"
//         />
//       </div>

//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchFilters;

// 2

// import React, { useState } from "react";

// const SearchFilters = ({ onSearch }) => {
//   const [type, setType] = useState("buy");
//   const [propertyType, setPropertyType] = useState("");
//   const [price, setPrice] = useState("");
//   const [bedrooms, setBedrooms] = useState("");
//   const [bathrooms, setBathrooms] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     onSearch({ type, propertyType, price, bedrooms, bathrooms });
//   };

//   return (
//     <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
//       <div className="flex items-center">
//         <label className="mr-2">
//           <input
//             type="radio"
//             value="buy"
//             checked={type === "buy"}
//             onChange={() => setType("buy")}
//           />
//           Buy
//         </label>
//         <label className="mr-2">
//           <input
//             type="radio"
//             value="rent"
//             checked={type === "rent"}
//             onChange={() => setType("rent")}
//           />
//           Rent
//         </label>
//       </div>

//       <div className="flex flex-col">
//         <label>Property Type:</label>
//         <select
//           value={propertyType}
//           onChange={(e) => setPropertyType(e.target.value)}
//           className="mt-1"
//         >
//           <option value="">Select</option>
//           <option value="apartment">Apartment</option>
//           <option value="house">House</option>
//           <option value="commercial">Commercial</option>
//           <option value="land">Land</option>
//         </select>
//       </div>

//       <div className="flex flex-col">
//         <label>Price:</label>
//         <input
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           placeholder="Max Price"
//           className="mt-1"
//         />
//       </div>

//       <div className="flex flex-col">
//         <label>Bedrooms:</label>
//         <input
//           type="number"
//           value={bedrooms}
//           onChange={(e) => setBedrooms(e.target.value)}
//           placeholder="Min Bedrooms"
//           className="mt-1"
//         />
//       </div>

//       <div className="flex flex-col">
//         <label>Bathrooms:</label>
//         <input
//           type="number"
//           value={bathrooms}
//           onChange={(e) => setBathrooms(e.target.value)}
//           placeholder="Min Bathrooms"
//           className="mt-1"
//         />
//       </div>

//       <button
//         type="submit"
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Search
//       </button>
//     </form>
//   );
// };

// export default SearchFilters;

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

  const handlePriceChange = (e) => {
    const value = Math.max(1, e.target.value); // Ensure price is at least 1
    setPrice(value);
  };

  const handleBedroomsChange = (e) => {
    const value = Math.max(0, e.target.value); // Ensure bedrooms are 0 or more
    setBedrooms(value);
  };

  const handleBathroomsChange = (e) => {
    const value = Math.max(0, e.target.value); // Ensure bathrooms are 0 or more
    setBathrooms(value);
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
      <div className="flex items-center">
        <label className="mr-2">
          <input
            type="radio"
            value="buy"
            checked={type === "buy"}
            onChange={() => setType("buy")}
          />
          Buy
        </label>
        <label className="mr-2">
          <input
            type="radio"
            value="rent"
            checked={type === "rent"}
            onChange={() => setType("rent")}
          />
          Rent
        </label>
      </div>

      <div className="flex flex-col">
        <label>Property Type:</label>
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="mt-1"
        >
          <option value="">Select</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="commercial">Commercial</option>
          <option value="land">Land</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={handlePriceChange}
          placeholder="Min Price"
          className="mt-1"
          min="1" // Prevents entering a value less than 1
        />
      </div>

      <div className="flex flex-col">
        <label>Bedrooms:</label>
        <input
          type="number"
          value={bedrooms}
          onChange={handleBedroomsChange}
          placeholder="Min Bedrooms"
          className="mt-1"
          min="0" // Prevents entering a value less than 0
        />
      </div>

      <div className="flex flex-col">
        <label>Bathrooms:</label>
        <input
          type="number"
          value={bathrooms}
          onChange={handleBathroomsChange}
          placeholder="Min Bathrooms"
          className="mt-1"
          min="0" // Prevents entering a value less than 0
        />
      </div>

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </form>
  );
};

export default SearchFilters;
