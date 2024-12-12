"use server";

import dbConnect from "@/lib/dbConnect";
import Notification from "@/models/Notification";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { getServerSession } from "next-auth";

export async function getNotification() {
  try {
    // Establish database connection
    await dbConnect();

    // Fetch notifications from the database
    const notifications = await Notification.find({})
      .sort({ createdAt: -1 }) // Sort by creation date (newest first)
      .lean(); // Optimize query for read-only operations

    // Sanitize the data
    const sanitizedNotifications = notifications.map((notification: any) => ({
      ...notification,
      _id: notification._id.toString(), // Convert ObjectId to string
      userId: notification.userId?.toString(),
      createdAt: notification.createdAt,
      expiresAt: notification.expiresAt,
      readBy: notification.readBy?.map((id:object) => id.toString()) || [], // Convert readBy to string array
    }));

    // Return the sanitized notifications
    return {
      success: true,
      data: sanitizedNotifications,
    };
  } catch (error) {
    console.error("Error fetching notifications:", error);

    // Handle errors
    return {
      success: false,
      message: "Failed to fetch notifications. Please try again later.",
    };
  }
}

export async function markNotificationAsRead({
  notificationId,
}: {
  notificationId: string;
}) {
  const session = await getServerSession(authOptions);

  // console.log(session?.user?.id)

  if (!notificationId || !session?.user?.id) {
    return { success: false, message: "Invalid data" };
  }

  try {
    await Notification.findByIdAndUpdate(notificationId, {
      $addToSet: { readBy: session.user.id },
    });

    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}
