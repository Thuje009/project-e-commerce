import UserAccountPage from "@/components/userAccountPage/UserAccountPage";
import React from "react";

function page({ params }: { params: { page: string } }) {
  return (
    <>
      <UserAccountPage page={params.page} />
    </>
  );
}

export default page;
