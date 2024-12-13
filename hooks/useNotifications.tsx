import { useEffect, useState } from "react";
import { getNotification } from "@/app/server/notifications/notification.action";


export const useNotifications = () => {
  const [notifications, setNotifications] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await getNotification();
        if (response?.success && Array.isArray(response.data)) {
          setNotifications(response.data);
        } else {
          throw new Error(response?.message || "Unable to fetch notifications.");
        }
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "An unexpected error occurred.";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return { notifications, isLoading, error, setNotifications };
};
