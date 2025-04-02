import React from "react";
import { useNotifications } from "@/hooks/useNotifications";
import { useNotificationActions } from "@/hooks/useNotificationActions";
import { useSession } from "next-auth/react";

const Notification = ({ subPage }: { subPage?: string }) => {
  const { data: session } = useSession();
  const { notifications, isLoading, error, setNotifications } =
    useNotifications();

  const { handleNotificationClick } = useNotificationActions(
    session?.user,
    setNotifications
  );

  const currentDate = new Date();

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
    (notification: any) => new Date(notification.expiresAt) >= currentDate
  );

  const subPageNotifications =
    subPage === "notification/promotions"
      ? filteredNotifications.filter(
          (noti: any) => noti.category === "Promotions"
        )
      : subPage === "notification/orders"
      ? filteredNotifications.filter(
          (noti: any) => noti.category === "Orders" && noti.userId === session?.user?.id
        )
      : null;

  if (!subPageNotifications || subPageNotifications.length === 0) {
    return <div>ไม่มีการแจ้งเตือนในหมวดหมู่นี้</div>;
  }

  return (
    <>
      {subPageNotifications.map((notification: any) => (
        <div
          key={notification._id}
          className={`flex border-b-2 py-4 px-4 cursor-pointer ${
            notification.readBy?.includes(session?.user?.id)
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
