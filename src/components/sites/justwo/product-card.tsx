"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/data/products";

const won = (value: number) => value.toLocaleString("ko-KR");

export default function ProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(false);

  return (
    <article className="flex flex-col">
      <a
        href={product.href}
        className="relative block aspect-[3/4] w-full overflow-hidden bg-neutral-50"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
        />

        {product.badge && (
          <span className="absolute left-2 top-2 bg-neutral-900 px-1.5 py-0.5 text-[10px] font-semibold leading-tight text-white">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          aria-label={wished ? "위시리스트에서 제거" : "위시리스트에 추가"}
          aria-pressed={wished}
          onClick={(e) => {
            e.preventDefault();
            setWished((prev) => !prev);
          }}
          className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm transition-transform active:scale-90"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              wished ? "fill-red-500 text-red-500" : "text-neutral-400"
            }`}
            strokeWidth={1.8}
          />
        </button>
      </a>

      {product.colors.length > 0 && (
        <div className="mt-1.5 flex flex-wrap gap-1 px-0.5">
          {product.colors.map((color) => (
            <span
              key={color}
              title={color}
              className="h-3 w-3 rounded-full border border-neutral-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}

      <a href={product.href} className="mt-1.5">
        <h3 className="line-clamp-2 text-[13px] font-medium leading-snug text-neutral-900">
          {product.name}
        </h3>
      </a>

      {product.summary && (
        <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-neutral-400">
          {product.summary}
        </p>
      )}

      <div className="mt-1.5 flex flex-wrap items-baseline gap-x-1.5">
        {product.discountPrice && product.discountRate ? (
          <>
            <span className="text-[12px] text-neutral-400 line-through">
              {won(product.price)}원
            </span>
            <span className="text-[13px] font-bold text-neutral-900">
              {won(product.discountPrice)}원
            </span>
            <span className="text-[12px] font-semibold text-red-500">
              {product.discountRate}%
            </span>
          </>
        ) : (
          <span className="text-[13px] font-bold text-neutral-900">
            {won(product.price)}원
          </span>
        )}
      </div>
    </article>
  );
}
