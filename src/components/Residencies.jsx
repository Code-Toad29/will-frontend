// import React from 'react'

//  const Residencies =()=> {
//   return (
//     <div>Residencies</div>
//   )
// }


// const Residencies = [
//   {
//     title: "Luxury Apartment",
//     image: "url_to_image_1.jpg",
//     category: "Apartment",
//     address: "123 Main St, Cityville",
//     area: "1500 sqft",
//     price: "$300,000",
//     description: "A luxurious apartment with modern amenities.",
//     facilities: {
//       bedroom: 2,
//       bathroom: 2,
//     }
//   },
//   {
//     title: "Cozy Cottage",
//     image: "url_to_image_2.jpg",
//     category: "Cottage",
//     address: "456 Oak Rd, Townsville",
//     area: "1200 sqft",
//     price: "$250,000",
//     description: "A cozy cottage surrounded by nature.",
//     facilities: {
//       bedroom: 3,
//       bathroom: 1,
//     }
//   },
//   {
//     title: "Modern Loft",
//     image: "url_to_image_3.jpg",
//     category: "Loft",
//     address: "789 Pine St, Cityville",
//     area: "1800 sqft",
//     price: "$400,000",
//     description: "A stylish loft with high ceilings and open spaces.",
//     facilities: {
//       bedroom: 1,
//       bathroom: 1,
//     }
//   },
//   {
//     title: "Family Home",
//     image: "url_to_image_4.jpg",
//     category: "Single Family Home",
//     address: "321 Maple Ave, Townsville",
//     area: "2000 sqft",
//     price: "$350,000",
//     description: "A spacious home perfect for families.",
//     facilities: {
//       bedroom: 4,
//       bathroom: 2,
//     }
//   },
//   {
//     title: "Beachfront Villa",
//     image: "url_to_image_5.jpg",
//     category: "Villa",
//     address: "555 Ocean Blvd, Beach City",
//     area: "2500 sqft",
//     price: "$1,200,000",
//     description: "A stunning villa with ocean views.",
//     facilities: {
//       bedroom: 5,
//       bathroom: 4,
//     }
//   },
//   {
//     title: "Charming Bungalow",
//     image: "url_to_image_6.jpg",
//     category: "Bungalow",
//     address: "789 Cedar St, Suburbia",
//     area: "1000 sqft",
//     price: "$200,000",
//     description: "A quaint bungalow in a quiet neighborhood.",
//     facilities: {
//       bedroom: 2,
//       bathroom: 1,
//     }
//   },
//   {
//     title: "Penthouse Suite",
//     image: "url_to_image_7.jpg",
//     category: "Penthouse",
//     address: "111 High Rise St, Cityville",
//     area: "3000 sqft",
//     price: "$2,000,000",
//     description: "A luxurious penthouse with a panoramic city view.",
//     facilities: {
//       bedroom: 3,
//       bathroom: 3,
//     }
//   },
//   {
//     title: "Suburban Townhouse",
//     image: "url_to_image_8.jpg",
//     category: "Townhouse",
//     address: "222 Elm St, Suburbia",
//     area: "1400 sqft",
//     price: "$280,000",
//     description: "A modern townhouse close to parks and schools.",
//     facilities: {
//       bedroom: 3,
//       bathroom: 2,
//     }
//   },
//   {
//     title: "Rustic Farmhouse",
//     image: "url_to_image_9.jpg",
//     category: "Farmhouse",
//     address: "333 Country Rd, Rural Area",
//     area: "2500 sqft",
//     price: "$400,000",
//     description: "A charming farmhouse with plenty of land.",
//     facilities: {
//       bedroom: 4,
//       bathroom: 2,
//     }
//   },
//   {
//     title: "Stylish Condo",
//     image: "url_to_image_10.jpg",
//     category: "Condominium",
//     address: "444 Urban Way, Cityville",
//     area: "1200 sqft",
//     price: "$350,000",
//     description: "A modern condo with urban amenities.",
//     facilities: {
//       bedroom: 2,
//       bathroom: 2,
//     }
//   },
//   {
//     title: "Eco-Friendly Home",
//     image: "url_to_image_11.jpg",
//     category: "Eco Home",
//     address: "555 Green St, Eco Town",
//     area: "1800 sqft",
//     price: "$450,000",
//     description: "A sustainable home with green features.",
//     facilities: {
//       bedroom: 3,
//       bathroom: 2,
//     }
//   },
//   {
//     title: "Luxury Chalet",
//     image: "url_to_image_12.jpg",
//     category: "Chalet",
//     address: "666 Mountain Rd, Ski Resort",
//     area: "2300 sqft",
//     price: "$800,000",
//     description: "A beautiful chalet with mountain views.",
//     facilities: {
//       bedroom: 5,
//       bathroom: 4,
//     }
//   },
//   {
//     title: "Historic Mansion",
//     image: "url_to_image_13.jpg",
//     category: "Mansion",
//     address: "777 Heritage Blvd, Old Town",
//     area: "5000 sqft",
//     price: "$2,500,000",
//     description: "A grand mansion with historical significance.",
//     facilities: {
//       bedroom: 6,
//       bathroom: 5,
//     }
//   },
//   {
//     title: "Urban Studio",
//     image: "url_to_image_14.jpg",
//     category: "Studio",
//     address: "888 City Center, Cityville",
//     area: "600 sqft",
//     price: "$150,000",
//     description: "A compact studio in the heart of the city.",
//     facilities: {
//       bedroom: 1,
//       bathroom: 1,
//     }
//   },
//   {
//     title: "Luxury Ranch",
//     image: "url_to_image_15.jpg",
//     category: "Ranch",
//     address: "999 Ranch Rd, Countryside",
//     area: "3500 sqft",
//     price: "$1,000,000",
//     description: "A luxurious ranch with vast land.",
//     facilities: {
//       bedroom: 4,
//       bathroom: 3,
//     }
//   },
//   {
//     title: "Contemporary Duplex",
//     image: "url_to_image_16.jpg",
//     category: "Duplex",
//     address: "1010 Twin St, Cityville",
//     area: "2000 sqft",
//     price: "$450,000",
//     description: "A modern duplex with spacious living areas.",
//     facilities: {
//       bedroom: 4,
//       bathroom: 3,
//     }
//   },
//   {
//     title: "Stylish Tiny Home",
//     image: "url_to_image_17.jpg",
//     category: "Tiny Home",
//     address: "1111 Small St, Minimalist Town",
//     area: "400 sqft",
//     price: "$80,000",
//     description: "A chic tiny home for minimalist living.",
//     facilities: {
//       bedroom: 1,
//       bathroom: 1,
//     }
//   },
//   {
//     title: "Urban Loft Conversion",
//     image: "url_to_image_18.jpg",
//     category: "Converted Loft",
//     address: "1212 Warehouse St, Cityville",
//     area: "2200 sqft",
//     price: "$500,000",
//     description: "A converted warehouse loft with industrial charm.",
//     facilities: {
//       bedroom: 2,
//       bathroom: 2,
//     }
//   },
//   {
//     title: "Seaside Cottage",
//     image: "url_to_image_19.jpg",
//     category: "Cottage",
//     address: "1313 Coastal Rd, Seaside Town",
//     area: "1000 sqft",
//     price: "$250,000",
//     description: "A charming cottage just steps from the beach.",
//     facilities: {
//       bedroom: 2,
//       bathroom: 1,
//     }
//   },
//   {
//     title: "Gated Community Home",
//     image: "url_to_image_20.jpg",
//     category: "Community Home",
//     address: "1414 Secure Ln, Gated Community",
//     area: "2000 sqft",
//     price: "$600,000",
//     description: "A safe and secure home in a gated community.",
//     facilities: {
//       bedroom: 4,
//       bathroom: 3,
//     }
//   }
// ];

// export default Residencies;


import React from 'react';

const ResidenciesList = [
  {
    title: "Luxury Apartment",
    image: "url_to_image_1.jpg",
    category: "Apartment",
    address: "123 Main St, Cityville",
    area: "1500 sqft",
    price: "$300,000",
    description: "A luxurious apartment with modern amenities.",
    facilities: {
      bedroom: 2,
      bathroom: 2,
    }
  },
  {
    title: "Cozy Cottage",
    image: "url_to_image_2.jpg",
    category: "Cottage",
    address: "456 Oak Rd, Townsville",
    area: "1200 sqft",
    price: "$250,000",
    description: "A cozy cottage surrounded by nature.",
    facilities: {
      bedroom: 3,
      bathroom: 1,
    }
  },
  {
    title: "Modern Loft",
    image: "url_to_image_3.jpg",
    category: "Loft",
    address: "789 Pine St, Cityville",
    area: "1800 sqft",
    price: "$400,000",
    description: "A stylish loft with high ceilings and open spaces.",
    facilities: {
      bedroom: 1,
      bathroom: 1,
    }
  },
  {
    title: "Family Home",
    image: "url_to_image_4.jpg",
    category: "Single Family Home",
    address: "321 Maple Ave, Townsville",
    area: "2000 sqft",
    price: "$350,000",
    description: "A spacious home perfect for families.",
    facilities: {
      bedroom: 4,
      bathroom: 2,
    }
  },
  {
    title: "Beachfront Villa",
    image: "url_to_image_5.jpg",
    category: "Villa",
    address: "555 Ocean Blvd, Beach City",
    area: "2500 sqft",
    price: "$1,200,000",
    description: "A stunning villa with ocean views.",
    facilities: {
      bedroom: 5,
      bathroom: 4,
    }
  },
  {
    title: "Charming Bungalow",
    image: "url_to_image_6.jpg",
    category: "Bungalow",
    address: "789 Cedar St, Suburbia",
    area: "1000 sqft",
    price: "$200,000",
    description: "A quaint bungalow in a quiet neighborhood.",
    facilities: {
      bedroom: 2,
      bathroom: 1,
    }
  },
  {
    title: "Penthouse Suite",
    image: "url_to_image_7.jpg",
    category: "Penthouse",
    address: "111 High Rise St, Cityville",
    area: "3000 sqft",
    price: "$2,000,000",
    description: "A luxurious penthouse with a panoramic city view.",
    facilities: {
      bedroom: 3,
      bathroom: 3,
    }
  },
  {
    title: "Suburban Townhouse",
    image: "url_to_image_8.jpg",
    category: "Townhouse",
    address: "222 Elm St, Suburbia",
    area: "1400 sqft",
    price: "$280,000",
    description: "A modern townhouse close to parks and schools.",
    facilities: {
      bedroom: 3,
      bathroom: 2,
    }
  },
  {
    title: "Rustic Farmhouse",
    image: "url_to_image_9.jpg",
    category: "Farmhouse",
    address: "333 Country Rd, Rural Area",
    area: "2500 sqft",
    price: "$400,000",
    description: "A charming farmhouse with plenty of land.",
    facilities: {
      bedroom: 4,
      bathroom: 2,
    }
  },
  {
    title: "Stylish Condo",
    image: "url_to_image_10.jpg",
    category: "Condominium",
    address: "444 Urban Way, Cityville",
    area: "1200 sqft",
    price: "$350,000",
    description: "A modern condo with urban amenities.",
    facilities: {
      bedroom: 2,
      bathroom: 2,
    }
  },
  {
    title: "Eco-Friendly Home",
    image: "url_to_image_11.jpg",
    category: "Eco Home",
    address: "555 Green St, Eco Town",
    area: "1800 sqft",
    price: "$450,000",
    description: "A sustainable home with green features.",
    facilities: {
      bedroom: 3,
      bathroom: 2,
    }
  },
  {
    title: "Luxury Chalet",
    image: "url_to_image_12.jpg",
    category: "Chalet",
    address: "666 Mountain Rd, Ski Resort",
    area: "2300 sqft",
    price: "$800,000",
    description: "A beautiful chalet with mountain views.",
    facilities: {
      bedroom: 5,
      bathroom: 4,
    }
  },
  {
    title: "Historic Mansion",
    image: "url_to_image_13.jpg",
    category: "Mansion",
    address: "777 Heritage Blvd, Old Town",
    area: "5000 sqft",
    price: "$2,500,000",
    description: "A grand mansion with historical significance.",
    facilities: {
      bedroom: 6,
      bathroom: 5,
    }
  },
  {
    title: "Urban Studio",
    image: "url_to_image_14.jpg",
    category: "Studio",
    address: "888 City Center, Cityville",
    area: "600 sqft",
    price: "$150,000",
    description: "A compact studio in the heart of the city.",
    facilities: {
      bedroom: 1,
      bathroom: 1,
    }
  },
  {
    title: "Luxury Ranch",
    image: "url_to_image_15.jpg",
    category: "Ranch",
    address: "999 Ranch Rd, Countryside",
    area: "3500 sqft",
    price: "$1,000,000",
    description: "A luxurious ranch with vast land.",
    facilities: {
      bedroom: 4,
      bathroom: 3,
    }
  },
  {
    title: "Contemporary Duplex",
    image: "url_to_image_16.jpg",
    category: "Duplex",
    address: "1010 Twin St, Cityville",
    area: "2000 sqft",
    price: "$450,000",
    description: "A modern duplex with spacious living areas.",
    facilities: {
      bedroom: 4,
      bathroom: 3,
    }
  },
  {
    title: "Stylish Tiny Home",
    image: "url_to_image_17.jpg",
    category: "Tiny Home",
    address: "1111 Small St, Minimalist Town",
    area: "400 sqft",
    price: "$80,000",
    description: "A chic tiny home for minimalist living.",
    facilities: {
      bedroom: 1,
      bathroom: 1,
    }
  },
  {
    title: "Urban Loft Conversion",
    image: "url_to_image_18.jpg",
    category: "Converted Loft",
    address: "1212 Warehouse St, Cityville",
    area: "2200 sqft",
    price: "$500,000",
    description: "A converted warehouse loft with industrial charm.",
    facilities: {
      bedroom: 2,
      bathroom: 2,
    }
  },
  {
    title: "Seaside Cottage",
    image: "url_to_image_19.jpg",
    category: "Cottage",
    address: "1313 Coastal Rd, Seaside Town",
    area: "1000 sqft",
    price: "$250,000",
    description: "A charming cottage just steps from the beach.",
    facilities: {
      bedroom: 2,
      bathroom: 1,
    }
  },
  {
    title: "Gated Community Home",
    image: "url_to_image_20.jpg",
    category: "Community Home",
    address: "1414 Secure Ln, Gated Community",
    area: "2000 sqft",
    price: "$600,000",
    description: "A safe and secure home in a gated community.",
    facilities: {
      bedroom: 4,
      bathroom: 3,
    }
  }
  // ... (rest of the properties)

];


// const Residencies = () => {
//   return (
//     <div>
//       <h1>Residencies</h1>
//       <ul>
//         {ResidenciesList.map((residency, index) => (
//           <li key={index}>
//             <h2>{residency.title}</h2>
//             <img src={residency.image} alt={residency.title} />
//             <p>{residency.description}</p>
//             <p>Price: {residency.price}</p>
//             <p>Address: {residency.address}</p>
//             <p>Area: {residency.area}</p>
//             <p>Bedrooms: {residency.facilities.bedroom}</p>
//             <p>Bathrooms: {residency.facilities.bathroom}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default ResidenciesList;
