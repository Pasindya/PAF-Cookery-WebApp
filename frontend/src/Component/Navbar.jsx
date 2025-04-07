import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHome, FaUtensils, FaPlusCircle, FaBell, FaTrophy, FaUser, FaHeart } from 'react-icons/fa';
import { GiCookingPot } from 'react-icons/gi';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed top-0 w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side - Logo and Search */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <GiCookingPot className="text-blue-600 text-2xl" />
              <span className="ml-2 text-gray-800 font-bold text-xl font-serif hidden sm:inline">CulinaryConnect</span>
            </Link>
            
            {/* Search Bar - Desktop */}
            <div className="hidden lg:block relative w-64 xl:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FaSearch className="h-4 w-4" />
              </div>
              <input
                type="text"
                placeholder="Search recipes, chefs, ingredients..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all"
              />
            </div>
          </div>

          {/* Middle - Navigation Icons */}
          <div className="hidden md:flex items-center justify-center space-x-1 lg:space-x-2">
            <Link to="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 flex flex-col items-center text-xs transition-colors group">
              <div className="p-1.5 rounded-md group-hover:bg-blue-50 transition-colors">
                <FaHome className="h-5 w-5" />
              </div>
              <span className="mt-1">Home</span>
            </Link>
            <Link to="/recipes" className="text-gray-500 hover:text-blue-600 px-3 py-2 flex flex-col items-center text-xs transition-colors group">
              <div className="p-1.5 rounded-md group-hover:bg-blue-50 transition-colors">
                <FaUtensils className="h-5 w-5" />
              </div>
              <span className="mt-1">Recipes</span>
            </Link>
            <Link to="/add-recipe" className="text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 px-3 py-2 flex flex-col items-center text-xs rounded-lg transition-colors shadow-sm hover:shadow-md mx-1">
              <div className="p-1">
                <FaPlusCircle className="h-5 w-5" />
              </div>
              <span className="mt-1">Create</span>
            </Link>
            <Link to="/challenges" className="text-gray-500 hover:text-blue-600 px-3 py-2 flex flex-col items-center text-xs transition-colors group">
              <div className="p-1.5 rounded-md group-hover:bg-blue-50 transition-colors">
                <FaTrophy className="h-5 w-5" />
              </div>
              <span className="mt-1">Challenges</span>
            </Link>
            <Link to="/saved" className="text-gray-500 hover:text-blue-600 px-3 py-2 flex flex-col items-center text-xs transition-colors group">
              <div className="p-1.5 rounded-md group-hover:bg-blue-50 transition-colors">
                <FaHeart className="h-5 w-5" />
              </div>
              <span className="mt-1">Saved</span>
            </Link>
          </div>

          {/* Right side - User Profile and Notifications */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Mobile Search Button */}
            <button className="lg:hidden text-gray-500 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FaSearch className="h-5 w-5" />
            </button>
            
            {/* Notifications */}
            <Link to="/notifications" className="relative text-gray-500 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <FaBell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-blue-500"></span>
            </Link>
            
            {/* User Profile */}
            <Link to="/profile" className="flex-shrink-0">
              <div className="flex items-center space-x-2 cursor-pointer group">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center border-2 border-white shadow-sm group-hover:border-blue-200 transition-colors overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" 
                    alt="User profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="hidden xl:inline-block text-sm font-medium text-gray-700 group-hover:text-blue-600">My Kitchen</span>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Mobile Search Bar - Hidden by default */}
        <div className="lg:hidden pb-3 px-2 hidden">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <FaSearch className="h-4 w-4" />
            </div>
            <input
              type="text"
              placeholder="Search recipes..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;