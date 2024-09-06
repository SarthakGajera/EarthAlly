// src/components/Documentation.jsx

import React from 'react';

const Documentation = () => {
  return (
    <div className="flex flex-col items-center px-6 py-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-sunsetOrange mb-6">EarthAlly Documentation</h1>

        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-sunsetOrange mb-4">Introduction</h2>
          <p className="text-gray-700">
            EarthAlly is a platform dedicated to promoting environmental sustainability. Our mission is to empower communities and individuals to take meaningful action for a greener planet. Through innovative solutions, resources, and a collaborative platform, EarthAlly connects you with the tools and knowledge needed to make a positive impact.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-sunsetOrange mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Educational content on environmental topics.</li>
            <li>Interactive tools such as the Carbon Footprint Calculator.</li>
            <li>Weather updates for planning eco-friendly activities.</li>
            <li>Community testimonials and stories.</li>
            <li>Collaborative platform to connect with like-minded individuals.</li>
          </ul>
        </section>

        {/* Getting Started Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-sunsetOrange mb-4">Getting Started</h2>
          <p className="text-gray-700 mb-4">
            To start using EarthAlly, you can simply visit the website and explore various features like Eco-learn, Testimonials, and more. You can also sign up to start for free and access more personalized content.
          </p>
          <p className="text-gray-700">
            If you're a developer interested in contributing to EarthAlly, please follow the steps below:
          </p>
          <ol className="list-decimal list-inside text-gray-700 mt-2">
            <li>Clone the repository: <code>git clone https://github.com/YourRepo/EarthAlly.git</code></li>
            <li>Install dependencies: <code>npm install</code></li>
            <li>Start the development server: <code>npm start</code></li>
            <li>Make your changes and submit a pull request.</li>
          </ol>
        </section>

        {/* Documentation Links Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-sunsetOrange mb-4">Additional Resources</h2>
          <p className="text-gray-700">
            For more information on using EarthAlly, please refer to the following:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li><a href="#" className="text-blue-500 hover:underline">API Documentation</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">User Guide</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Community Forum</a></li>
          </ul>
        </section>

        {/* Contact Information Section */}
        <section>
          <h2 className="text-2xl font-semibold text-sunsetOrange mb-4">Contact Information</h2>
          <p className="text-gray-700">
            For any inquiries, feel free to reach out to us at: <a href="mailto:info@earthally.com" className="text-blue-500 hover:underline">info@earthally.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Documentation;
