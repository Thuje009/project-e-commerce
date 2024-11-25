"use client";
import React from "react";
import UserProfile from "./UserProfile";
import { Link, User } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import PurchasePage from "./PurchasePage";

interface Props {
  page: string;
}

function userAccountPage({ page }: Props) {
  const router = useRouter();

  // console.log("page",typeof(page))

  return (
    <>
      <div className="flex mx-8 py-8 ">
        {/* menu bar */}
        <div className="w-4/12">
          <div className="w-full">
            <div className="flex justify-center p-2 pb-6">
              <User
                name="Junior Garcia"
                description={
                  <Link
                    href="https://twitter.com/jrgarciadev"
                    size="sm"
                    isExternal
                  >
                    @jrgarciadev
                  </Link>
                }
                avatarProps={{
                  src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                }}
              />
            </div>

            <div className="flex justify-center p-2">
              <Link color="foreground" onClick={() => router.push("account")}>
                บัญชีผู้ใช้
              </Link>
            </div>
            <div className="flex justify-center p-2">
              <Link color="foreground" onClick={() => router.push("purchase")}>
                การสั่งซื้อ
              </Link>
            </div>
            <div className="flex justify-center p-2">
              <Link
                color="foreground"
                onClick={() => router.push("notification")}
              >
                การแต้งเตือน
              </Link>
            </div>
          </div>
        </div>
        {/* display menu selected */}
        <div className="ml-4 w-full">
          {page ? (
            <>
              {page === "account" && <UserProfile />}
              {page === "purchase" && <PurchasePage />}
            </>
          ) : (
            <p>Loading...</p> // Placeholder to avoid mismatch
          )}
        </div>
      </div>
    </>
  );
}

export default userAccountPage;
