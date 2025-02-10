import React from 'react';
import { Truck, Shield, Clock, Leaf } from 'lucide-react';

const features = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Free Shipping",
    description: "On orders over $50"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure Payments",
    description: "100% secure checkout"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Quick Delivery",
    description: "Within 24-48 hours"
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "100% Organic",
    description: "Certified products"
  }
];

const Features = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="text-green-500">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;