"use client";

import { useState } from "react";
import { categoryTabs } from "@/data/products";

export default function CategoryNav() {
  const [active, setActive] = useState(categoryTabs[1]?.label ?? "");

  return (
    <nav
      aria-label="카테고리"
      className="sticky top-12 z-30 border-b border-neutral-100 bg-white"
    >
      <ul className="flex gap-1 overflow-x-auto whitespace-nowrap px-3 py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categoryTabs.map((tab) => (
          <li key={tab.label}>
            <a
              href={tab.href}
              onClick={() => setActive(tab.label)}
              className={`inline-block rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors ${
                active === tab.label
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
