'use client'
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, BellDot } from 'lucide-react';

const Header = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl sm:container px-4 relative">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-textPrimary font-bold text-2xl tracking-wide hover:text-buttonPrimary transition duration-300">
              Logo
            </h1>

            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#A8D5BA] to-[#81C784] flex justify-center items-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-4 flex-1 justify-end">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Cart */}
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <BellDot size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Sign In/Sign Up Button */}
            <button
              className="text-lg transition duration-200 font-bold border rounded-lg flex overflow-hidden"
              onClick={() => setIsSignIn(!isSignIn)}
            >
              <span
                className={`py-2 px-2 transition-all duration-300 rounded-br-3xl ${isSignIn ? 'bg-gradient-to-b from-[var(--button-primary)] to-[var(--button-primary-hover)] text-white' : 'bg-transparent'}`}
              >
                Sign IN
              </span>
              <span
                className={`py-2 px-2 transition-all rounded-tl-3xl duration-300 ${!isSignIn ? 'bg-gradient-to-t from-[var(--button-primary)] to-[var(--button-primary-hover)] text-white' : 'bg-transparent'}`}
              >
                Sign Up
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="p-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            {/* Mobile Navigation Items */}
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg">
                <span className="flex items-center gap-2">
                  <ShoppingCart size={24} />
                  Cart
                </span>
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>

              <button className="w-full flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg">
                <span className="flex items-center gap-2">
                  <BellDot size={24} />
                  Notifications
                </span>
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>

            {/* Mobile Sign In/Up Button */}
            <button
              className="text-lg transition duration-200 font-bold border rounded-lg flex overflow-hidden w-full"
              onClick={() => setIsSignIn(!isSignIn)}
            >
              <span
                className={`flex-1 py-2 px-4 text-center transition-all duration-300 rounded-br-3xl ${isSignIn ? 'bg-gradient-to-b from-[var(--button-primary)] to-[var(--button-primary-hover)] text-white' : 'bg-transparent'}`}
              >
                Sign IN
              </span>
              <span
                className={`flex-1 py-2 px-4 text-center transition-all rounded-tl-3xl duration-300 ${!isSignIn ? 'bg-gradient-to-t from-[var(--button-primary)] to-[var(--button-primary-hover)] text-white' : 'bg-transparent'}`}
              >
                Sign Up
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;