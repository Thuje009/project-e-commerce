import { useRouter } from "next/navigation";
import { markNotificationAsRead } from "@/app/server/notifications/notification.action";

export const useNotificationActions = (user: any, setNotifications: any) => {
  const router = useRouter();

  const handleNotificationClick = async (id: string, url: string) => {
    if (!user) {
      console.warn("No user logged in");
      return "no user";
    }

    try {
      // Mark notification as read on the server
      const res = await markNotificationAsRead({ notificationId: id });

      if (res.success) {
        // Update local state to reflect read status
        setNotifications((prev: any) =>
          prev.map((noti: any) =>
            noti._id === id
              ? { ...noti, readBy: [...(noti.readBy || []), user.id] }
              : noti
          )
        );
      }

      // Navigate to the notification URL
      router.push(url);
    } catch (error) {
      console.error("Error marking notification as read", error);
    }
  };

  return { handleNotificationClick };
};
