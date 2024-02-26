import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PageSelect = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'bg-gray-100 text-gray-900' : 'bg-gray-300 text-gray-700';
  };

  return (
    <div className="flex font-semibold">
      <Link
        to="/"
        className={`px-6 py-3 rounded-l-full transition-all duration-300 ${isActive('/')}`}
      >
        Explore
      </Link>
      <Link
        to="/social"
        className={`px-4 py-3 rounded-r-full transition-all duration-300 ${isActive('/social')}`}
      >
        Community
      </Link>
    </div>
  );
}

export default PageSelect;