import React from 'react';
import { Select, SelectItem } from "@nextui-org/react";

interface NotificationDropdownProps {
  activeSubRoute: string;
  menuRoute: string[];
  onSubRouteChange: (subRoute: string) => void;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ 
  activeSubRoute, 
  menuRoute, 
  onSubRouteChange 
}) => {
  const subRouteLabels = {
    "/all": "ทั้งหมด",
    "/order": "คำสั่งซื้อ"
  };

  return (
    <div className="w-full max-w-xs">
      <Select
        label="ประเภทการแจ้งเตือน"
        selectedKeys={[activeSubRoute]}
        className="max-w-xs"
        onChange={(e) => {
          if (e.target.value) {
            onSubRouteChange(e.target.value);
          }
        }}
      >
        {menuRoute.map((subRoute) => (
          <SelectItem key={subRoute} value={subRoute}>
            {subRouteLabels[subRoute as keyof typeof subRouteLabels]}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default NotificationDropdown;