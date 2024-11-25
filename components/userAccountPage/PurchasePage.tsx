import React from "react";
import { Tabs, Tab, Chip } from "@nextui-org/react";
import OrderComponents from "./tabs/orderComponents";

function PurchasePage() {
  return (
    <>
      <div className="flex flex-col">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-[#22d3ee]",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-[#06b6d4]",
          }}
        >
          <Tab
            key="all"
            title={
              <div className="flex items-center space-x-2">
                <span>ทั้งหมด</span>
                {/* <Chip size="sm" variant="faded">
                  9
                </Chip> */}
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
                {/* <Chip size="sm" variant="faded">
                  3
                </Chip> */}
              </div>
            }
          />
          <Tab
            key="ToShip"
            title={
              <div className="flex items-center space-x-2">
                <span>ที่ต้องจัดส่ง</span>
                {/* <Chip size="sm" variant="faded">
                  1
                </Chip> */}
              </div>
            }
          ></Tab>
          <Tab
            key="ToReceive"
            title={
              <div className="flex items-center space-x-2">
                <span>ที่ต้องได้รับ</span>
                {/* <Chip size="sm" variant="faded">
                  1
                </Chip> */}
              </div>
            }
          ></Tab>
          <Tab
            key="ToReview"
            title={
              <div className="flex items-center space-x-2">
                <span>รีวิว</span>
                {/* <Chip size="sm" variant="faded">
                  1
                </Chip> */}
              </div>
            }
          ></Tab>
        </Tabs>
      </div>
    </>
  );
}

export default PurchasePage;
