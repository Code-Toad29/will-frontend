import React from "react";
import Item from "./ItemSec"; // Ensure you have this import
import ResidenciesList, { residenciesList } from "./Residencies"; // Ensure this import is correct;

const MarketplaceGrid = () => {
  return (
    <section className="maxx-padd-container">
      <div className="maxx-padd container bg-primary py-16 xl:py-28 rounded-3xl">
        <span>Your Future Home Awaits</span>
        <h2 className="h2">Find your dream home</h2>
        <div className="flex justify-between mt-8 mb-6">
          <h5>
            <span>Showing 1-9</span> out of {residenciesList.length} properties
          </h5>
        </div>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {residenciesList.map((property, index) => (
          <Item key={index} property={property} />
        ))}
      </div>
    </section>
  );
};

export default MarketplaceGrid;
