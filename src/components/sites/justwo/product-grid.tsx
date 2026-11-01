import type { Product } from "@/data/products";
import ProductCard from "./product-card";

interface ProductGridProps {
  title: string;
  products: Product[];
}

export default function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <section className="px-3 py-6">
      <h2 className="mb-4 text-center text-[15px] font-bold uppercase tracking-[0.2em] text-neutral-900">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-x-2.5 gap-y-7">
        {products.map((product) => (
          <ProductCard key={`${product.id}-${product.section}`} product={product} />
        ))}
      </div>
    </section>
  );
}
