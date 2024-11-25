import React from "react";
import { Image } from "@nextui-org/react";

function OrderComponents() {
  return (
    <div className="bg-cardBackground">
      {/* Shop header */}
      <div className="border-b-4 ">
        <h1>somethings Sell</h1>
        <p>จัดส่งสำเร็จแล้ว</p>
      </div>
      <div className="flex p-4">
        <div>
          <Image
            src="https://raw.githubusercontent.com/PhurinGZ/web-app-novel/refs/heads/main/web-novel/public/image/imageBook1.png"
            alt={"Example Order 1"}
            width={100}
            height={100}
          />
        </div>
        <div className="ml-2">
          <h1>Example Order 1</h1>
          <p>Type Order</p>
        </div>
        <div>
          <p>฿123.00</p>
        </div>
        <div>
          <p>X2</p>
        </div>
      </div>
    </div>
  );
}

export default OrderComponents;
