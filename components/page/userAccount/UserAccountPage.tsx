"use client";
import React from "react";
import UserProfile from "./UserProfile";
import { Link, User } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import PurchasePage from "./Purchase";
import { UserCircle, ShoppingBag, Bell, ChevronRight } from "lucide-react";

interface Props {
  page: string;
}

function UserAccountPage({ page }: Props) {
  const router = useRouter();

  const menuItems = [
    {
      label: "บัญชีผู้ใช้",
      icon: <UserCircle className="w-5 h-5" />,
      route: "account"
    },
    {
      label: "การสั่งซื้อ",
      icon: <ShoppingBag className="w-5 h-5" />,
      route: "purchase"
    },
    {
      label: "การแต้งเตือน",
      icon: <Bell className="w-5 h-5" />,
      route: "notification"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-3/12">
            <div className="bg-cardBackground rounded-2xl shadow-sm p-6">
              {/* Profile Section */}
              <div className="flex flex-col items-center pb-6 border-b border-gray-200">
                <div className="w-24 h-24 relative mb-4">
                  <img
                    src="https://avatars.githubusercontent.com/u/30373425?v=4"
                    alt="Profile"
                    className="rounded-full object-cover w-full h-full ring-4 ring-gray-50"
                  />
                  <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                </div>
                <h3 className="font-semibold text-lg">Junior Garcia</h3>
                <Link
                  href="#"
                  size="sm"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  @jrgarciadev
                </Link>
              </div>

              {/* Navigation Menu */}
              <nav className="mt-6 space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.route}
                    onClick={() => router.push(item.route)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                      page === item.route
                        ? "bg-buttonPrimary text-textPrimary"
                        : "hover:bg-buttonPrimaryHover text-textPrimary"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronRight className={`w-5 h-5 ${
                      page === item.route ? "text-textPrimary" : "text-gray-400"
                    }`} />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-cardBackground">
              {page ? (
                <>
                  {page === "account" && <UserProfile />}
                  {page === "purchase" && <PurchasePage />}
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccountPage;