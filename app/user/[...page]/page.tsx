import UserAccountPage from "@/components/page/userAccount/UserAccountPage";
import React from "react";

function Page({ params }: { params: { page: string[] } }) {
  // Combine the route segments into a single string, separated by "/".
  const currentPage = params.page.join("/");

  return (
    <>
      <UserAccountPage initialPage={currentPage}  />
    </>
  );
}

export default Page;
