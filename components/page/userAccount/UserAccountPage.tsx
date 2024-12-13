"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Link } from "@nextui-org/react";
import useSWR from "swr";

import UserProfile from "./UserProfile";
import PurchasePage from "./Purchase";
import Notification from "./notification/Notification";

import {
  UserCircle,
  ShoppingBag,
  Bell,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import userPNG from "@/Image/user.png";
import { fetchUserData } from "@/app/server/getUser.action";

interface Props {
  initialPage: string; // Initial page to display
}

interface MenuItemProps {
  label: string;
  icon: React.ReactNode;
  route: string;
  menuRoute?: { label: string; route: string }[];
  activePage: string;
  onClick: (route: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  icon,
  route,
  menuRoute,
  activePage,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(activePage.startsWith(route));
  }, [activePage, route]);

  const handleMenuClick = () => {
    if (menuRoute) {
      setIsOpen((prev) => !prev);
      onClick(`${route}/${menuRoute[0].route}`);
    } else {
      onClick(route);
    }
  };

  return (
    <div>
      <button
        onClick={handleMenuClick}
        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${activePage.startsWith(route)
          ? "bg-buttonPrimary text-textPrimary"
          : "hover:bg-buttonPrimaryHover text-textPrimary"
          }`}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-medium">{label}</span>
        </div>
        {menuRoute && (
          <span>
            {isOpen ? (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-400" />
            )}
          </span>
        )}
      </button>

      {isOpen &&
        menuRoute?.map((subItem) => (
          <button
            key={subItem.route}
            onClick={() => onClick(`${route}/${subItem.route}`)}
            className={`w-full flex items-center pl-10 py-2 text-left text-sm hover:bg-gray-100 ${activePage === `${route}/${subItem.route}` ? "bg-gray-200 font-medium" : ""
              }`}
          >
            {subItem.label}
          </button>
        ))}
    </div>
  );
};

const UserAccountPage: React.FC<Props> = ({ initialPage }) => {
  const router = useRouter();
  const { data: user, error, isLoading } = useSWR("/api/auth/me", fetchUserData);

  const [currentPage, setCurrentPage] = useState(initialPage);

  const menuItems = useMemo(
    () => [
      {
        label: "บัญชีผู้ใช้",
        icon: <UserCircle className="w-5 h-5" />,
        route: "account",
      },
      {
        label: "การสั่งซื้อ",
        icon: <ShoppingBag className="w-5 h-5" />,
        route: "purchase",
      },
      {
        label: "การแจ้งเตือน",
        icon: <Bell className="w-5 h-5" />,
        menuRoute: [
          { label: "โปรโมชั่น", route: "promotions" },
          { label: "คำสั่งซื้อ", route: "orders" },
        ],
        route: "notification",
      },
    ],
    []
  );

  const validPages = useMemo(
    () => [
      "account",
      "purchase",
      "notification",
      "notification/promotions",
      "notification/orders",
    ],
    []
  );

  const handlePageChange = (route: string) => {
    if (validPages.includes(route)) {
      setCurrentPage(route);
      router.push(`/user/${route}`);
    }
  };

  if (!validPages.includes(currentPage)) {
    return <div>404 Not Found</div>;
  }

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
                    src={user?.profilePicture || userPNG.src}
                    alt="Profile"
                    className="rounded-full"
                  />
                  <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                </div>
                <span className="font-semibold text-lg">{user?.userName}</span>
                <Link
                  href="#"
                  size="sm"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {user?.email}
                </Link>
              </div>

              {/* Navigation Menu */}
              <nav className="mt-6 space-y-2">
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.route}
                    label={item.label}
                    icon={item.icon}
                    route={item.route}
                    menuRoute={item.menuRoute}
                    activePage={currentPage}
                    onClick={handlePageChange}
                  />
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-cardBackground p-6 rounded-2xl">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              ) : error ? (
                <div className="text-red-500">{error.message}</div>
              ) : (
                <>
                  {currentPage === "account" && <UserProfile />}
                  {currentPage === "purchase" && <PurchasePage />}
                  {currentPage.startsWith("notification") && (
                    <Notification subPage={currentPage} />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccountPage;
