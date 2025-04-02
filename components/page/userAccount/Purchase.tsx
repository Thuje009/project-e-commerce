import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import OrderComponents from "./tabs/OrderComponents";

function PurchasePage() {
  return (
    <div className="flex flex-col bg-card-background text-foreground border border-border rounded-lg p-4">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="underlined"
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-border",
          cursor: "w-full bg-button-primary",
          tab: "max-w-fit px-0 h-12 text-text-secondary hover:text-text-highlight",
          tabContent: "group-data-[selected=true]:text-text-primary",
        }}
      >
        <Tab
          key="all"
          title={
            <div className="flex items-center space-x-2">
              <span>ทั้งหมด</span>
            </div>
          }
        >
          <OrderComponents />
        </Tab>
        <Tab
          key="ToPay"
          title={
            <div className="flex items-center space-x-2">
              <span>ต้องชำระ</span>
            </div>
          }
        >
          <div>
            <p>ไม่มีสิ้นค้าที่ต้องชำระ</p>
          </div>
        </Tab>
        <Tab
          key="ToShip"
          title={
            <div className="flex items-center space-x-2">
              <span>ที่ต้องจัดส่ง</span>
            </div>
          }
        >
          <div>
            <p>ไม่มีสิ้นค้าที่ต้องจัดส่ง</p>
          </div>
        </Tab>
        <Tab
          key="ToReceive"
          title={
            <div className="flex items-center space-x-2">
              <span>ที่ต้องได้รับ</span>
            </div>
          }
        >
          {" "}
          <div>
            <p>ไม่มีสิ้นค้าที่ต้องได้รับ</p>
          </div>
        </Tab>
        <Tab
          key="ToReview"
          title={
            <div className="flex items-center space-x-2">
              <span>รีวิว</span>
            </div>
          }
        >
          <div>
            <p>ไม่มีสิ้นค้าที่ต้องรีวิว</p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default PurchasePage;
