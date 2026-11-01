"use client";

import { Home, LayoutGrid, Search, ShoppingBag, User } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "홈", icon: Home, href: "https://m.justwo.shop/" },
  { label: "카테고리", icon: LayoutGrid, href: "https://m.justwo.shop/product/list.html?cate_no=1" },
  { label: "검색", icon: Search, href: "https://m.justwo.shop/product/search.html" },
  { label: "마이페이지", icon: User, href: "https://m.justwo.shop/myshop/mypage.html" },
  { label: "장바구니", icon: ShoppingBag, href: "https://m.justwo.shop/order/basket.html" },
] as const;

export default function BottomNav() {
  const [active, setActive] = useState<string>("홈");

  return (
    <nav
      aria-label="하단 메뉴"
      className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-md border-t border-neutral-200 bg-white/95 backdrop-blur"
    >
      <ul className="flex h-14 items-stretch">
        {navItems.map(({ label, icon: Icon, href }) => (
          <li key={label} className="flex-1">
            <a
              href={href}
              onClick={() => setActive(label)}
              className={`flex h-full flex-col items-center justify-center gap-0.5 text-[10px] transition-colors ${
                active === label ? "text-neutral-900 font-semibold" : "text-neutral-400"
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={1.7} />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
