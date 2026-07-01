import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import ShopHero from "../../components/shop/ShopHero";
import FilterBar from "../../components/shop/FilterBar";
import CategoryList from "../../components/shop/CategoryList";
import ShopGrid from "../../components/shop/ShopGrid";
import Pagination from "../../components/shop/Pagination";

function Shop() {
  return (
    <main className="min-h-screen bg-[#162414] overflow-x-hidden">
      <Navbar />

      <ShopHero />

      <FilterBar />

      <CategoryList />

      <ShopGrid />

      <Pagination />

      <Footer />
    </main>
  );
}

export default Shop;