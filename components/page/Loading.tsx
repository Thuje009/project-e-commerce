"use client";
import React from "react";
import { motion } from "framer-motion";

const ShoppingLoader = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="gridPattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0,0,0,0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </div>

      {/* Main Loading Container */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Shopping Bag Animation */}
        <motion.div
          className="mx-auto w-48 h-48 relative"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 bg-gray-100 rounded-2xl shadow-lg transform rotate-6"></div>
          <div className="absolute inset-0 bg-gray-200 rounded-2xl shadow-md transform -rotate-6"></div>
          <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-400"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          className="mt-8 text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3 },
          }}
        >
          Preparing Your Shopping Experience
        </motion.h1>

        {/* Subtle Loading Progress */}
        <motion.div
          className="mt-4 w-64 h-2 bg-gray-200 rounded-full overflow-hidden w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            initial={{ width: 0 }}
            animate={{
              width: ["20%", "30%", "50%", "70%","90%"],
              transition: {
                duration: 4,
                ease: "easeInOut",
              },
            }}
          />
        </motion.div>

        {/* Subtle Description */}
        <p className="mt-4 text-gray-500 text-sm">
          Curating your personalized shopping journey...
        </p>
      </motion.div>
    </div>
  );
};

export default ShoppingLoader;
