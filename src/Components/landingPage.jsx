// LandingPage.jsx
import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShopEasy</h1>
        <p className="text-lg mb-6">Find the best products for the best prices</p>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold transition-all hover:bg-yellow-500">
          Shop Now
        </button>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Replace with actual products */}
          {Array(4).fill().map((_, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <img src={`https://via.placeholder.com/150?text=Product+${index + 1}`} alt={`Product ${index + 1}`} className="w-full rounded-md mb-4" />
              <h3 className="text-lg font-medium">Product {index + 1}</h3>
              <p className="text-gray-600 mt-2">$99.99</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get the Best Deals Now!</h2>
        <p className="text-gray-400 mb-6">Sign up for our newsletter to receive exclusive offers and updates.</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-full text-gray-800 outline-none mb-4"
        />
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold transition-all hover:bg-yellow-500">
          Subscribe
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
