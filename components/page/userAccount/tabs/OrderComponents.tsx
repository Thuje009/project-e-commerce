import React from "react";
import { Image, Link } from "@nextui-org/react";

function OrderComponents() {
  return (
    <div className="bg-cardBackground text-foreground border border-border rounded-lg">
      {/* Shop header */}
      <div className="border-b border-border p-4 flex justify-between items-center">
        <Link href="#" className="text-text-primary hover:text-text-highlight">
          <h1 className="font-bold">Somethings Sell</h1>
        </Link>
        <p className="text-text-secondary">จัดส่งสำเร็จแล้ว</p>
      </div>
      {/* Shop Body */}
      <div className="flex p-4 justify-between items-center">
        <Link href="#" className="flex items-center text-text-primary hover:text-text-highlight">
          <div className="flex items-center">
            <Image
              src="https://raw.githubusercontent.com/PhurinGZ/web-app-novel/refs/heads/main/web-novel/public/image/imageBook1.png"
              alt="Example Order 1"
              width={100}
              height={100}
              className="rounded-md border border-border"
            />
            <div className="ml-4">
              <h1 className="font-medium">Example Order 1</h1>
              <p className="text-text-secondary">Type Order</p>
            </div>
          </div>
        </Link>
        <div className="text-right">
          <p className="text-button-primary font-bold">฿123.00</p>
        </div>
        <div className="text-right">
          <p className="text-text-secondary">X2</p>
        </div>
      </div>
    </div>
  );
}

export default OrderComponents;
