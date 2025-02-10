import React from 'react';
import { Leaf } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Leaf className="h-8 w-8 text-green-500" />
      <span className="text-2xl font-bold text-green-600">NatureStore</span>
    </div>
  );
};

export default Logo;