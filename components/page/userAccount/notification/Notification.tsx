import React from "react";
import { useRouter } from "next/navigation";

const mockNotifications = {
  promotions: [
    {
      id: 1,
      title: "ส่วนลดพิเศษ 50%",
      details: "รับส่วนลด 50% สำหรับสินค้าทุกชิ้นในหมวดหมู่วันนี้เท่านั้น!",
      date: "2024-12-10",
      imageUrl: "https://via.placeholder.com/150?text=50%+OFF",
      url: "/promotions",
    },
    {
      id: 2,
      title: "สินค้าใหม่เข้าแล้ว",
      details: "สินค้าใหม่ล่าสุดในคอลเลกชันฤดูร้อน พร้อมให้คุณช้อปแล้ววันนี้",
      date: "2024-12-08",
      imageUrl: "https://via.placeholder.com/150?text=New+Arrivals",
      url: "/promotions",
    },
    {
      id: 3,
      title: "แจกโค้ดส่วนลด",
      details: "รับโค้ดส่วนลด 100 บาท เมื่อช้อปครบ 500 บาทขึ้นไป",
      date: "2024-12-07",
      imageUrl: "https://via.placeholder.com/150?text=Discount+Code",
      url: "/promotions",
    },
  ],
  orders: [
    {
      id: 1,
      title: "สินค้ากำลังจัดส่ง",
      details: "คำสั่งซื้อ #12345 ของคุณกำลังถูกจัดส่ง โปรดรอรับสินค้า",
      date: "2024-12-09",
      imageUrl: "https://via.placeholder.com/150?text=Shipped",
      url: "/promotions",
    },
    {
      id: 2,
      title: "คำสั่งซื้อสำเร็จ",
      details:
        "คำสั่งซื้อ #12344 ของคุณได้จัดส่งสำเร็จแล้ว ขอบคุณที่ช้อปกับเรา!",
      date: "2024-12-08",
      imageUrl: "https://via.placeholder.com/150?text=Delivered",
      url: "/promotions",
    },
    {
      id: 3,
      title: "ยืนยันคำสั่งซื้อ",
      details: "คำสั่งซื้อ #12346 ของคุณได้รับการยืนยันแล้ว กำลังเตรียมสินค้า",
      date: "2024-12-07",
      imageUrl: "https://via.placeholder.com/150?text=Confirmed",
      url: "/promotions",
    },
  ],
};

const Notification = ({ subPage }: { subPage?: string }) => {
  const router = useRouter();
  const notifications =
    subPage === "notification/promotions"
      ? mockNotifications.promotions
      : subPage === "notification/orders"
      ? mockNotifications.orders
      : null;

  if (!notifications) {
    return <div>กรุณาเลือกหมวดหมู่การแจ้งเตือน</div>;
  }

  return (
    <>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          // style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}
          className="flex border-b-2 py-4 px-4 cursor-pointer hover:bg-gray-200"
          onClick={() => router.push(`${notification.url}`)}
        >
          <div className="mr-4">
            <img
              src={notification.imageUrl}
              alt={notification.title}
              // style={{
              //   width: "150px",
              //   height: "150px",
              //   objectFit: "cover",
              //   marginBottom: "10px",
              // }}
              className="w-16 h-16 mb-4 object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg">{notification.title}</h2>
            <p className="text-base">{notification.details}</p>
            <small className="text-sm">{notification.date}</small>
          </div>
        </div>
      ))}
    </>
  );
};

export default Notification;
