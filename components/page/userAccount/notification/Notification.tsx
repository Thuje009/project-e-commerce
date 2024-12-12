import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getNotification,
  markNotificationAsRead,
} from "@/app/server/notifications/notification.action";
import { getSession } from "next-auth/react";

interface Notification {
  _id: string;
  title: string;
  details: string;
  imageUrl: string;
  url: string;
  createdAt: string;
  expiresAt: string;
  category: string;
  readBy?: string[]; // Added to track read notifications
  userId?: string;
}

const Notification = ({ subPage }: { subPage?: string }) => {
  const router = useRouter();
  const [notifications, setNotifications] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState<any>(null);

  const currentDate = new Date();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const [session, response] = await Promise.all([
          getSession(),
          getNotification(),
        ]);

        if (!session?.user) {
          setError("คุณไม่ได้เข้าสู่ระบบ");
          return;
        }

        setUser(session.user);

        if (response.success) {
          setNotifications(response.data);
        } else {
          setError(response.message || "Unable to fetch notifications.");
        }
      } catch (err) {
        setError("An error occurred while fetching notifications.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  // console.log(user)

  const handleNotificationClick = async (id: string, url: string) => {
    if (!user) return "no user";

    // console.log(id)

    try {
      // Mark notification as read on the server
      const res = await markNotificationAsRead({ notificationId: id });
      console.log(res.success)

      // Update local state to reflect read status
      setNotifications((prev: any) =>
        prev.map((noti: any) =>
          noti._id === id
            ? { ...noti, readBy: [...(noti.readBy || []), user.id] }
            : noti
        )
      );
      

      // Navigate to the notification URL
      router.push(url);
    } catch (error) {
      console.error("Error marking notification as read", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filteredNotifications = notifications.filter(
    (notification: Notification) => {
      const expiresAt = new Date(notification.expiresAt);
      return expiresAt >= currentDate;
    }
  );

  const subPageNotifications =
    subPage === "notification/promotions"
      ? filteredNotifications.filter(
          (noti: Notification) => noti.category === "Promotions"
        )
      : subPage === "notification/orders"
      ? filteredNotifications.filter(
          (noti: Notification) =>
            noti.category === "Orders" && noti.userId === user?.id
        )
      : null;

  if (!subPageNotifications || subPageNotifications.length === 0) {
    return <div>ไม่มีการแจ้งเตือนในหมวดหมู่นี้</div>;
  }

  return (
    <>
      {subPageNotifications.map((notification: Notification) => (
        <div
          key={notification._id}
          className={`flex border-b-2 py-4 px-4 cursor-pointer ${
            notification.readBy?.includes(user?.id)
              ? "bg-white"
              : "bg-orange-200"
          } hover:bg-gray-200`}
          onClick={() =>
            handleNotificationClick(notification._id, notification.url)
          }
        >
          <div className="mr-4">
            <img
              src={notification.imageUrl}
              alt={notification.title}
              className="w-16 h-16 mb-4 object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg">{notification.title}</h2>
            <p className="text-base">{notification.details}</p>
            <small className="text-sm">
              {new Date(notification.createdAt).toLocaleString("default", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        </div>
      ))}
    </>
  );
};

export default Notification;
