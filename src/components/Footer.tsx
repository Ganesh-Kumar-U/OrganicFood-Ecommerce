import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-green-100">
              Your trusted source for organic and natural products.
            </p>
            <div className="flex space-x-4 mt-6">
              <Facebook className="h-6 w-6 hover:text-green-300 cursor-pointer" />
              <Twitter className="h-6 w-6 hover:text-green-300 cursor-pointer" />
              <Instagram className="h-6 w-6 hover:text-green-300 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-300">Home</a></li>
              <li><a href="#" className="hover:text-green-300">Shop</a></li>
              <li><a href="#" className="hover:text-green-300">About Us</a></li>
              <li><a href="#" className="hover:text-green-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-300">Vegetables</a></li>
              <li><a href="#" className="hover:text-green-300">Fruits</a></li>
              <li><a href="#" className="hover:text-green-300">Grains</a></li>
              <li><a href="#" className="hover:text-green-300">Beverages</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@naturestore.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Organic Street, Nature City</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-12 pt-8 text-center text-green-100">
          <p>&copy; {new Date().getFullYear()} NatureStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;