import UserAccountPage from "@/components/page/userAccount/UserAccountPage";
import React from "react";

function page({ params }: { params: { page: string } }) {
  return (
    <>
      <UserAccountPage page={params.page} />
    </>
  );
}

export default page;
