import React from "react";

const GuestDash = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">
          Welcome to Our Hotel
        </h1>
        <p className="text-gray-600">
          We’re delighted to have you here. Explore our services and enjoy your stay.
        </p>
      </div>
    </div>
  );
};

export default GuestDash;
