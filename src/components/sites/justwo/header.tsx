import { Menu, Search, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-100 bg-white">
      <div className="flex h-12 items-center justify-between px-3">
        <button
          type="button"
          aria-label="카테고리 메뉴"
          className="flex h-9 w-9 items-center justify-center text-neutral-900"
        >
          <Menu className="h-5 w-5" strokeWidth={1.8} />
        </button>

        <a
          href="https://m.justwo.shop/"
          className="select-none text-lg font-extrabold tracking-[0.18em] text-neutral-900"
        >
          JUSTWO
        </a>

        <div className="flex items-center">
          <button
            type="button"
            aria-label="검색"
            className="flex h-9 w-9 items-center justify-center text-neutral-900"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            aria-label="장바구니"
            className="relative flex h-9 w-9 items-center justify-center text-neutral-900"
          >
            <ShoppingCart className="h-[18px] w-[18px]" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  );
}
