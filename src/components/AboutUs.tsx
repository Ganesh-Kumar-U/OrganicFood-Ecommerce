import React from 'react';
import { Leaf } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
                alt="Organic Farmer"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <Leaf className="h-12 w-12 text-green-500" />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-6">
              At NatureStore, we believe in providing our customers with the finest organic produce
              while supporting sustainable farming practices. Our journey began with a simple mission:
              to make healthy, organic food accessible to everyone.
            </p>
            <p className="text-gray-600 mb-8">
              We partner with local organic farmers who share our commitment to quality and
              sustainability. Every product in our store is carefully selected to ensure it meets
              our high standards for organic certification and quality.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">100% Organic</h4>
                <p className="text-gray-600 text-sm">Certified organic products</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Local Farmers</h4>
                <p className="text-gray-600 text-sm">Supporting local communities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;