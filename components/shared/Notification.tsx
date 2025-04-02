import React, { useState } from "react";
import { useNotifications } from "@/hooks/useNotifications";
import { useNotificationActions } from "@/hooks/useNotificationActions";
import { BellDot } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const NotificationDropdown = () => {
  const { data: session } = useSession();
  const { notifications, isLoading, error, setNotifications } =
    useNotifications();
  const { handleNotificationClick } = useNotificationActions(
    session?.user,
    setNotifications
  );
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const router = useRouter();

  const handleMouseEnter = () => setDropdownVisible(true);
  const handleMouseLeave = () => setDropdownVisible(false);

  // Filter notifications
  const userNotifications = notifications.filter((notification: any) => {
    // Include all notifications except Orders
    if (notification.category !== "Orders") return true;

    // Include Orders only if userId matches the current user
    return notification.userId === session?.user?.id;
  });

  // Count unread notifications
  const unreadCount = userNotifications.filter(
    (notification: any) =>
      !notification.readBy || !notification.readBy.includes(session?.user?.id)
  ).length;

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Bell Button */}
      <button
        className="
          p-2 hover:bg-gray-100 rounded-full 
          relative transition-all
        "
      >
        <BellDot size={24} className="hover:scale-110 transition-transform" />
        <span
          className="
            absolute -top-1.5 -right-1.5 
            bg-red-500 text-white text-xs 
            rounded-lg w-5 h-5 
            flex items-center justify-center 
          "
        >
          {unreadCount}
        </span>
      </button>

      {/* Dropdown */}
      {isDropdownVisible && (
        <div
          className="
            absolute right-0 top-full w-72 
            bg-white border border-gray-200 
            rounded-xl shadow-xl 
            ring-1 ring-black ring-opacity-5
            overflow-hidden
            animate-fade-in-down
          "
        >
          {/* Header */}
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700">
              Notifications
            </h3>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
              {unreadCount} new
            </span>
          </div>

          {/* Notification List */}
          <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
            {userNotifications.slice(0, 5).map((notification: any) => (
              <div
                key={notification._id}
                onClick={() =>
                  handleNotificationClick(notification._id, notification.url)
                }
                className={`px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors ${
                  notification.readBy?.includes(session?.user?.id)
                    ? "bg-white"
                    : "bg-orange-200"
                } group flex items-start space-x-3`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  <img
                    src={notification.imageUrl || "/default-icon.png"}
                    alt={notification.title}
                    className="w-8 h-8 object-cover rounded-full"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600">
                    {notification.title}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {notification.details}
                  </p>
                </div>

                {/* Time */}
                <div className="text-xs text-gray-400">
                  {new Date(notification.createdAt).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 text-center">
            <button
              onClick={() => {
                router.push("/user/notification/promotions");
                setDropdownVisible(false);
              }}
              className="
                text-xs text-blue-600 
                hover:text-blue-800 
                hover:underline
                transition-colors
              "
            >
              More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
