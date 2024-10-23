
import React from 'react';

// const ResidenciesList = [
//   {
//     title: "1 Bedroom Apartment / Flat for Sale in Rocklands",
//     image: "C:\Users\Dell\Desktop\Will Project\client\public\Buy\Apartement\1\1.png",
//     category: "Apartment",
//     address: "123 Main St, Cityville",
//     area: "1500 sqft",
//     price: "R400,000",
//     description: "Perfect Getaway Studio Apartment in Port Edward",
//     facilities: {
//       bedroom: 1,
//       bathroom: 1,
//     }
//    },


const ResidenciesList = [
    {
    title: "1 Bedroom Apartment / Flat for Sale in Rocklands",
    image: "/Buy/Apartement/1/1.png", // Correct relative path
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
    title: "2 Bedroom Apartment / Flat for Sale in De Waterkant",
    image: "/Buy/Apartement/2/2.png", // Use the correct relative path
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
    image: "/Buy/CommercialProperty/2/1.png", // Correct relative path
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
    image: "/Buy/Farm/1/1.png", // Correct relative path
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
    image: "/Buy/Farm/2/1.png", // Correct relative path
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
    image: "/Buy/Home/1/1.png", // Correct relative path
    category: "Home",
    address: "111 High Rise St, Cityville",
    area: "1145 m2",
    price: "R 1,500,000",
    description: "Here is where versatility converges with space and beauty!",
    facilities: {
      bedroom: 4,
      bathroom: 3,
    }
  },
  
//   {
//   title: "3 Bedroom House for Sale in Grassland",
//   image: "/Buy/Home/1/1.png", // Correct relative path
//   category: "Home",
//   address: "111 High Rise St, Cityville",
//   area: "1145 m2",
//   price: "R 1,500,000",
//   description: "Here is where versatility converges with space and beauty!",
//   facilities: {
//     bedroom: 4,
//     bathroom: 3,
//   }
// },
{
  title: "3 Bedroom House for Sale in Grassland", // Correct the property name
  image: "/Buy/Home/2/1.png", // Correct relative path for the image
  category: "Home",
  address: "222 Elm St, Suburbia", // Assuming you want to specify an address
  area: "108 m2",
  price: "R 1,230,000",
  description: "Buy your First Brand New house direct from the Developer and Save on Transfer Fees!",
  facilities: {
    bedroom: 3,
    bathroom: 2,
  }
},

{
  title: "Industrial Property for Sale in Waterfall",
  image: "/Buy/IndustrialProperty/1/1.png", // Corrected image path
  category: "Industrial Property", // Fixed typo in "Industrial"
  address: "333 Country Rd, Rural Area",
  area: "149 m²", // Using proper formatting for square meters
  price: "R 999,000",
  description: "Secure Unit in a Popular Industrial Park",
  facilities: {
    bedroom: 0,
    bathroom: 2,
  }
},

{
  title: "Industrial Property for Sale in Laboria",
  image: "/Buy/IndustrialProperty/2/1.png", // Corrected image path
  category: "Industrial Property", // Fixed typo in "Industrial"
  address: "444 Urban Way, Cityville",
  area: "1492 m²", // Using proper formatting for square meters
  price: "R 4,500,000",
  description: "Premium Industrial Property with Offices in Upmarket Upington Area",
  facilities: {
    bedroom: 0,
    bathroom: 2,
  }
},

{
  title: "Vacant Land / Plot for Sale in Pumula",
  image: "/Buy/Plot/1/1.png", // Corrected image path
  category: "Plot",
  address: "555 Green St, Eco Town",
  area: "2023 m²", // Using proper formatting for square meters
  price: "R 690,000",
  description: "Prime Stand with Breathtaking Views overlooking the Indian Ocean! Zoned for multiple units.",
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
    image: "/Buy/Townhouse/1/1.png", // Corrected image path
    category: "Townhouse", // Fixed category casing
    address: "777 Heritage Blvd, Old Town",
    area: "83 m²", // Proper formatting for square meters
    price: "R 880,000",
    description: "Picture-perfect, beautiful cottage-style home.", // Minor grammatical adjustments
    facilities: {
      bedroom: 2,
      bathroom: 2,
    }
  },
  {
    title: "2 Bedroom Townhouse for Sale in Sunnyside",
    image: "/Buy/Townhouse/2/1.png", // Corrected image path
    category: "Townhouse", // Fixed category casing
    address: "888 City Center, Cityville",
    area: "86 m²", // Proper formatting for square meters
    price: "R 370,000",
    description: "Duplex for sale in Sunnyside East.",
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
    image: "/Rent/CommercialProperty/1/1.png", // Corrected image path
    category: "Commercial Property",
    address: "1010 Twin St, Cityville",
    area: "116 m²", // Proper formatting for square meters
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
    image: "/Rent/Farm/1/1.png", // Corrected image path
    category: "Farm",
    address: "1111 Small St, Minimalist Town",
    area: "1600 m²", // Proper formatting for square meters
    price: "R 13,800",
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
    image: "/Rent/IndustrialProperty/1/1.png", // Corrected image path
    category: "Industrial Property",
    address: "1313 Coastal Rd, Seaside Town",
    area: "2500 m²", // Proper formatting for square meters
    price: "R 212,500",
    description: "Prime 2500m² Warehouse with Expansive Yard & High Power Capacity in Springfield. Perfect for Your Needs.",
    facilities: {
      bedroom: 0,
      bathroom: 2,
    }
  },
  
   
// Vancant Plot to rent

{
  title: "Vacant Land / Plot to Rent in Caledon Estate",
  image: "/Rent/Plot/1/1.png", // Fixed the image path to use forward slashes
  category: "Plot",
  address: "1414 Secure Ln, Gated Community",
  area: "1000 m²", // Added space for better readability
  price: "R 20,000", // Added space for better readability
  description: "Vacant Land To Rent in Caledon Estate, Ballito, KwaZulu Natal",
  facilities: {
    bedroom: 0,
    bathroom: 0,
  }
},

// Town hoyuse to Rent
{
  title: "2 Bedroom Townhouse to Rent in Langenhovenpark",
  image: "/Rent/Townhouse/1/1.png", // Changed backslashes to forward slashes
  category: "Town House",
  address: "1414 Secure Ln, Gated Community",
  area: "82 m²", // Added space for better readability
  price: "R 7,500", // Added space for better readability
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
