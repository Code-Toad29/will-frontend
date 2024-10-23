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
    title: "1 Bedroom Apartment / Flat for Sale in Rocklands",
    image: "url_to_image_1.jpg",
    category: "Apartment",
    address: "123 Main St, Cityville",
    area: "1500 sqft",
    price: "R400,000",
    description: "Perfect Getaway Studio Apartment in Port Edward",
    facilities: {
      bedroom: 1,
      bathroom: 1,

    }
  },
  {
    title: " 2 Bedroom Apartment / Flat for Sale in De Waterkant",
    image: "url_to_image_2.jpg",
    category: "Apartment",
    address: "456 Oak Rd, Townsville",
    area: "100 m2",
    price: "R 3,999,000",
    description: "Price slashed by a massive R300 000!",
    facilities: {
      bedroom: 2,
      bathroom: 2,
    }
  },
  // {
  //   title: "Modern Loft",
  //   image: "url_to_image_3.jpg",
  //   category: "Loft",
  //   address: "789 Pine St, Cityville",
  //   area: "1800 sqft",
  //   price: "$400,000",
  //   description: "A stylish loft with high ceilings and open spaces.",
  //   facilities: {
  //     bedroom: 1,
  //     bathroom: 1,
  //   }
  // },
  {
    title: "Houghton Estate",
    image: "url_to_image_4.jpg",
    category: "Commercial Property",
    address: "321 Maple Ave, Townsville",
    area: "714 m2",
    price: "R 3,900,000",
    description: "Commercial Property for Sale in Houghton Estate",
    facilities: {
      bedroom: 0,
      bathroom: 1,
    }
  },
  {
    title: "Bloemfontein Rural",
    image: "url_to_image_5.jpg",
    category: "Farm",
    address: "555 Ocean Blvd, Beach City",
    area: "126.01ha",
    price: "R 3,900,000",
    description: "Dairy and vegetable farm with 30 ha registered water",
    facilities: {
      bedroom: 3,
      bathroom: 5,
    }
  },
  {
    title: "Farm for Sale in Schaapkraal",
    image: "url_to_image_6.jpg",
    category: "Farm",
    address: "789 Cedar St, Suburbia",
    area: "47ha",
    price: "R 34,999,000",
    description: "Tranquil Farm Living in Schaapkraal.",
    facilities: {
      bedroom: 6,
      bathroom: 7,
    }
  },
  {
    title: "4 Bedroom House for Sale in Pellissier",
    image: "url_to_image_7.jpg",
    category:"Home",
    address: "111 High Rise St, Cityville",
    area: "1145 m2",
    price: "R 1,500,000",
    description: "Here is where versatility converges with space and beauty!",
    facilities: {
      bedroom: 4,
      bathroom: 3,
    }
  },
  {
    title: "3 Bedroom House for Sale in Grassland",
    image: "url_to_image_8.jpg",
    category: "Home",
    address: "222 Elm St, Suburbia",
    area: "108 m2",
    price: "R 1,230,000",
    description: "Buy your First Brand New house direct from the Developer and Save on Transfer Fees !.",
    facilities: {
      bedroom: 3,
      bathroom: 2,
    }
  },
  {
    title: "Industrial Property for Sale in Waterfall",
    image: "url_to_image_9.jpg",
    category: "Industrail Property",
    address: "333 Country Rd, Rural Area",
    area: "149 m2",
    price: "R 999,000",
    description: "Secure Unit in a Popular Industrial Park",
    facilities: {
      bedroom: 0,
      bathroom: 2,
    }
  },
  {
    title: "Industrial Property for Sale in Laboria",
    image: "url_to_image_10.jpg",
    category: "Industrail Property",
    address: "444 Urban Way, Cityville",
    area: "1492 m2",
    price: "R 4,500,000",
    description: "Premium Industrial Property with Offices in Upmarket Upington Area",
    facilities: {
      bedroom: 0,
      bathroom: 2,
    }
  },
  {
    title: "Vacant Land / Plot for Sale in Pumula",
    image: "url_to_image_11.jpg",
    category: "Plot",
    address: "555 Green St, Eco Town",
    area: "2023 m2",
    price: "R 690,000",
    description: "Prime Stand with Breathtaking Views over looking the Indian Ocean! Zoned for multiple Units.",
    facilities: {
      bedroom: 0,
      bathroom: 0,
    }
  },
  // {
  //   title: "Luxury Chalet",
  //   image: "url_to_image_12.jpg",
  //   category: "Chalet",
  //   address: "666 Mountain Rd, Ski Resort",
  //   area: "2300 sqft",
  //   price: "$800,000",
  //   description: "A beautiful chalet with mountain views.",
  //   facilities: {
  //     bedroom: 5,
  //     bathroom: 4,
  //   }
  // },
  {
    title: "2 Bedroom Townhouse for Sale in Westering",
    image: "url_to_image_13.jpg",
    category: "Town house",
    address: "777 Heritage Blvd, Old Town",
    area: "83 m2",
    price: "R 880,000 ",
    description: "Picture Perfect beautiful cottage style home",
    facilities: {
      bedroom: 2,
      bathroom: 2,
    }
  },
  {
    title: "2 Bedroom Townhouse for Sale in Sunnyside",
    image: "url_to_image_14.jpg",
    category: "Town house",
    address: "888 City Center, Cityville",
    area:"86 m2",
    price: "R 370,000",
    description: "Duplex for sale in Sunnyside East",
    facilities: {
      bedroom: 2,
      bathroom: 1,
    }
  },
  // {
  //   title: "Luxury Ranch",
  //   image: "url_to_image_15.jpg",
  //   category: "Ranch",
  //   address: "999 Ranch Rd, Countryside",
  //   area: "3500 sqft",
  //   price: "$1,000,000",
  //   description: "A luxurious ranch with vast land.",
  //   facilities: {
  //     bedroom: 4,
  //     bathroom: 3,
  //   }
  // },

  // Comerial Propert to Rent
  {
    title: "Commercial Property to Rent in Glenwood",
    image: "url_to_image_16.jpg",
    category: "Commercial Property",
    address: "1010 Twin St, Cityville",
    area: "116 m2",
    price: "R 17,632",
    description: "A modern duplex with spacious living areas.",
    facilities: {
      bedroom: 0,
      bathroom: 1,
    }
  },
  // Farm to RENT

  {
    title: "Farm to Rent in Benoni Ah",
    image: "url_to_image_17.jpg",
    category: "Farm",
    address: "1111 Small St, Minimalist Town",
    area: "1600 m2",
    price: "R 13,800 ",
    description: "Well equipped stable yard for rental",
    facilities: {
      bedroom: 0,
      bathroom: 1,
    }
  },

  // {
  //   title: "Urban Loft Conversion",
  //   image: "url_to_image_18.jpg",
  //   category: "Converted Loft",
  //   address: "1212 Warehouse St, Cityville",
  //   area: "2200 sqft",
  //   price: "$500,000",
  //   description: "A converted warehouse loft with industrial charm.",
  //   facilities: {
  //      bedroom: 2,
  //      bathroom: 2,
  //      }
  //   },

  // Industrial Property for Rent

  {
    title: "Industrial Property to Rent in Springfield",
    image: "url_to_image_19.jpg",
    category: "Industrial Property",
    address: "1313 Coastal Rd, Seaside Town",
    area: "2500 m2",
    price: "R 212,500 ",
    description: "Prime 2500m² Warehouse with Expansive Yard & High Power Capacity in Springfield  Perfect for Your Needs",
    facilities: {
      bedroom: 0,
      bathroom: 2,
    }
  },
   
// Vancant Plot to rent

  {
    title: "Vacant Land / Plot to Rent in Caledon Estate",
    image: "url_to_image_20.jpg",
    category: "Plot",
    address: "1414 Secure Ln, Gated Community",
    area: "1000m2",
    price: "R20,000",
    description: "Vacant Land To Rent in Caledon Estate Ballito KwaZulu Natal",
    facilities: {
      bedroom: 0,
      bathroom: 0,
    }
  },
// Town hoyuse to Rent

  {
    title: "2 Bedroom Townhouse to Rent in Langenhovenpark",
    image: "url_to_image_20.jpg",
    category: "Town House",
    address: "1414 Secure Ln, Gated Community",
    area: "82 m2",
    price: "R7,500",
    description: "2 Bedroom Townhouse to Rent in Langenhovenpark",
    facilities: {
      bedroom: 2,
      bathroom: 1,
    }
  },
  // ... (rest of the properties)

];


const Residencies = () => {
  return (
    <div>
      <h1>Residencies</h1>
      <ul>
        {ResidenciesList.map((residency, index) => (
          <li key={index}>
            <h2>{residency.title}</h2>
            <img src={residency.image} alt={residency.title} />
            <p>{residency.description}</p>
            <p>Price: {residency.price}</p>
            <p>Address: {residency.address}</p>
            <p>Area: {residency.area}</p>
            <p>Bedrooms: {residency.facilities.bedroom}</p>
            <p>Bathrooms: {residency.facilities.bathroom}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Residencies;
