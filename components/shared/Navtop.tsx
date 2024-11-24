'use client'
import { Search, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'


const Navtop: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <section className="border-b border-border bg-background p-2">
      <div className="container flex justify-between items-center">
        {/* โลโก้ */}
        <div>
          <h1 className="text-textPrimary font-bold">Logo</h1>
        </div>

        {/* ช่องค้นหา */}
        <div className="flex-1 mx-4 relative">
          <input
            type="text"
            className="w-full px-4 py-2 border border-border rounded-lg text-textPrimary focus:outline-none focus:ring-1 focus:ring-buttonPrimary pl-10"
            placeholder="Search"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textPrimary" />
        </div>

        {/* ตะกร้าสินค้า */}
        <div className="text-textPrimary">
          <ShoppingCart />
        </div>

        {/* ปุ่ม Sign in/Sign out */}
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
    </section>
  )
}

export default Navtop