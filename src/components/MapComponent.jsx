// // src/components/MapComponent.js
// import React, { useEffect } from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

// const MapComponent = ({ location }) => {
//   useEffect(() => {
//     // Initialize the map
//     const map = L.map("map").setView([location.lat, location.lng], 15);

//     // Add a tile layer to the map
//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       maxZoom: 19,
//       attribution:
//         '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//     }).addTo(map);

//     // Add a marker to the map
//     L.marker([location.lat, location.lng]).addTo(map);

//     // Cleanup function to remove the map on unmount
//     return () => {
//       map.remove();
//     };
//   }, [location]);

//   return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
// };

// export default MapComponent;
