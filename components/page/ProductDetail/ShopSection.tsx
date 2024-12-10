import React from 'react';
import Button from '@/components/base/Button';
import { MessageSquareText, ShoppingBag } from 'lucide-react';

type Props = {
  imgShop: string;
  nameShop: string;
};

const ShopSection: React.FC<Props> = ({ imgShop, nameShop }) => {
  return (
    <section className="flex gap-4 items-center shadow-sm p-4 border">
      {/* รูปภาพร้านค้า */}
      <div className="w-20 h-20 rounded-full overflow-hidden">
        <img src={imgShop} alt="Shop" className="w-full h-full object-cover" />
      </div>

      {/* ข้อมูลร้านค้า */}
      <div className="flex flex-col">
        {/* ชื่อร้านค้า */}
        <span className="font-semibold text-lg">{nameShop}</span>

        {/* ปุ่มการกระทำ */}
        <div className="flex gap-4 mt-2">
          {/* ปุ่มแชท */}
          <Button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded">
            <MessageSquareText />
            <span>แชทเลย</span>
          </Button>

          {/* ปุ่มดูร้านค้า */}
          <Button className="flex items-center gap-2 px-4 py-2 rounded bg-gradient-to-b from-[var(--button-primary)] to-[var(--button-primary-hover)] text-white">
            <ShoppingBag />
            <span>ดูร้านค้า</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
