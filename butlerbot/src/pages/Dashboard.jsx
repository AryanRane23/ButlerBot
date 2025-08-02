import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to ButlerBot Dashboard
        </h1>
        <p className="text-gray-600">
          Manage your services, check requests, and keep everything running smoothly.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
