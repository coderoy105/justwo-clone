import BottomNav from "@/components/sites/justwo/bottom-nav";
import { HeroBanner, NoticeBanner } from "@/components/sites/justwo/banner";
import CategoryNav from "@/components/sites/justwo/category-nav";
import Footer from "@/components/sites/justwo/footer";
import Header from "@/components/sites/justwo/header";
import ProductGrid from "@/components/sites/justwo/product-grid";
import { bestProducts, newProducts } from "@/data/products";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-md bg-white pb-14">
      <NoticeBanner />
      <Header />
      <CategoryNav />
      <HeroBanner />
      <main>
        <ProductGrid title="NEW5% 7 days" products={newProducts} />
        <ProductGrid title="BEST BEST ITMES" products={bestProducts} />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
