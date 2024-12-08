"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  BellDot,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import userPNG from "@/Image/user.png";
import { fetchUser } from "@/hook/fatchUser";
import { TUser } from "@/util/type";

const Header = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [user, setUser] = useState<TUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const { data: session, status } = useSession();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await fetchUser();
        setUser(userData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (status === "authenticated" && user === null) {
      loadUser();
    } else {
      setLoading(false);
    }
  }, [status, user]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const DropdownItem = ({ label, onClick }: { label: string; onClick: () => void }) => (
    <div
      className={`
        flex items-center gap-3 p-2.5 rounded-lg 
        transition-all duration-300 cursor-pointer 
        hover:bg-gray-200 group
        ${label === "Log Out" ? "text-red-600 hover:bg-red-50" : ""}
      `}
      onClick={onClick}
    >
      {label === "Log Out" && (
        <LogOut 
          size={24} 
          className="text-red-500 group-hover:scale-110 transition-transform" 
        />
      )}
      {label === user?.userName && (
        <img
          src={user?.profilePicture || userPNG.src}
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
        />
      )}
      <span className="font-medium group-hover:text-primary transition-colors">{label}</span>
    </div>
  );

  return (
    <header 
      className="
        w-full bg-white shadow-md sticky top-0 z-50 
        transition-shadow duration-300 
        hover:shadow-lg
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="
              flex items-center space-x-3 cursor-pointer 
              hover:scale-105 transition-transform
            "
            onClick={() => handleNavigate("/")}
          >
            <h1 
              className="
                text-gray-800 font-bold text-2xl 
                tracking-wider hover:text-blue-600 
                transition-colors
              "
            >
              Logo
            </h1>
            <div 
              className="
                w-9 h-9 rounded-full bg-gradient-to-br 
                from-green-400 to-green-600 
                flex justify-center items-center 
                shadow-md hover:scale-110 transition-transform
              "
            >
              <span className="text-white font-bold text-xl">L</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="
              md:hidden p-2 rounded-full 
              hover:bg-gray-100 active:bg-gray-200 
              transition-colors relative z-50
            "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-4 flex-1 justify-end">
            <div className="flex-1 max-w-md relative">
              <input
                type="text"
                placeholder="Search..."
                className="
                  w-full pl-10 pr-4 py-2.5 
                  border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 
                  focus:ring-blue-500 focus:border-transparent
                  transition-all duration-300
                "
              />
              <Search 
                className="
                  absolute left-3 top-3 
                  text-gray-400 
                  transition-colors 
                  group-focus-within:text-blue-500
                " 
                size={20} 
              />
            </div>

            <button 
              className="
                p-2 hover:bg-gray-100 rounded-full 
                relative group transition-all
              "
            >
              <ShoppingCart 
                size={24} 
                className="group-hover:scale-110 transition-transform" 
              />
              <span 
                className="
                  absolute -top-1.5 -right-1.5 
                  bg-red-500 text-white text-xs 
                  rounded-full w-5 h-5 
                  flex items-center justify-center 
                  group-hover:animate-pulse
                "
              >
                0
              </span>
            </button>

            <button 
              className="
                p-2 hover:bg-gray-100 rounded-full 
                relative group transition-all
              "
            >
              <BellDot 
                size={24} 
                className="group-hover:scale-110 transition-transform" 
              />
              <span 
                className="
                  absolute -top-1.5 -right-1.5 
                  bg-red-500 text-white text-xs 
                  rounded-lg w-5 h-5 
                  flex items-center justify-center 
                  group-hover:animate-pulse
                "
              >
                0
              </span>
            </button>

            {status === "authenticated" && !loading ? (
              <div className="relative" ref={dropdownRef}>
                <div
                  className="
                    relative w-11 h-11 rounded-full 
                    cursor-pointer group
                  "
                  onClick={() => setIsOpenDropdown((prev) => !prev)}
                >
                  <img
                    src={user?.profilePicture || userPNG.src}
                    alt="User Avatar"
                    className="
                      w-11 h-11 rounded-full 
                      object-cover border-2 border-transparent 
                      group-hover:border-blue-500 
                      transition-all
                    "
                  />
                  <ChevronDown
                    size={16}
                    className="
                      absolute border rounded-full 
                      bg-white shadow-md right-0 bottom-0 
                      group-hover:rotate-180 transition-transform
                    "
                  />
                </div>

                {isOpenDropdown && (
                  <div 
                    className="
                      absolute border bg-white rounded-xl 
                      w-72 left-[-240px] top-14 
                      p-2 flex flex-col gap-2 
                      shadow-lg 
                      animate-dropdown-slide
                    "
                  >
                    <DropdownItem
                      label={user?.userName || "User"}
                      onClick={() => handleNavigate("/user/account")}
                    />
                    <div className="border-t my-1"></div>
                    <DropdownItem
                      label="Log Out"
                      onClick={() => {
                        signOut();
                        setIsOpenDropdown(false);
                      }}
                    />
                  </div>
                )}
              </div>
            ) : (
              <button
                className="text-lg transition duration-200 font-bold border rounded-lg flex overflow-hidden"
                onClick={() => setIsSignIn(!isSignIn)}
              >
                <span
                  className={`py-2 px-2 transition-all duration-300 rounded-br-3xl ${
                    isSignIn
                      ? "bg-gradient-to-b from-[var(--button-primary)] to-[var(--button-primary-hover)] text-white"
                      : "bg-transparent"
                  }`}
                  onClick={() => handleNavigate("/sign-in")}
                >
                  Sign IN
                </span>
                <span
                  className={`py-2 px-2 transition-all rounded-tl-3xl duration-300 ${
                    !isSignIn
                      ? "bg-gradient-to-t from-[var(--button-primary)] to-[var(--button-primary-hover)] text-white"
                      : "bg-transparent"
                  }`}
                >
                  Sign Up
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;