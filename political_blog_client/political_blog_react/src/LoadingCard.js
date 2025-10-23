import React from "react";

const LoadingCard = () => {
  return (
    <div>
      <div className="w-full opacity-80">
        <div className="max-w-lg flex flex-col rounded-lg shadow-lg overflow-hidden animate-pulse">
          <div className="h-64 bg-gray-300"></div>
          <div className="px-6 py-4">
            <div className="h-6 bg-gray-300 mb-2"></div>
            <div className="h-4 bg-gray-300 w-full"></div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <div className="h-4 bg-gray-300 w-full mb-2"></div>
            <div className="h-4 bg-gray-300 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
