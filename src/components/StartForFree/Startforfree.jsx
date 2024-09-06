// src/components/StartForFree.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const StartForFree = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-mossGreen text-white p-8">
      <div className="max-w-3xl text-center bg-white rounded-lg shadow-lg p-8 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-sunsetOrange">Get Started for Free with EarthAlly!</h1>
        
        <p className="text-lg mb-8">
          Discover a world of environmental knowledge and tools to help you make a difference. Sign up today and join a community of eco-conscious individuals working towards a greener, more sustainable future.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link
            to="#"
            className="bg-sunsetOrange hover:bg-leafGreen text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            Sign Up for Free
          </Link>
          
          <Link
            to="#"
            className="bg-transparent border border-sunsetOrange hover:bg-sunsetOrange hover:text-white text-sunsetOrange font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartForFree;
