"use server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function fetchUserData() {
  try {

    const session = await getServerSession(authOptions);

    if (!session) {
      throw new Error("Unauthorized");
    }

    await dbConnect();

    const user = await User.findOne({ email: session.user.email }).select(
      "-password"
    );

    if (!user) {
      throw new Error("User not found");
    }

    const responseUser = {
      id: user._id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      profilePicture: user.profilePicture,
      userName: user.userName,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return responseUser;
  } catch (error: any) {
    console.error("Error in fetchUserData:", error.message);
    throw new Error(error.message || "Internal server error");
  }
}
