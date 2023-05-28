import React from "react";

const NoProductsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">No products here</h2>
        <p className="text-gray-600">
          There are currently no products available.
        </p>
      </div>
    </div>
  );
};

export default NoProductsPage;
