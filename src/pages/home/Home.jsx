import Navbar from "../../components/navbar/Navbar";
import HeroSection from "../../components/heroSection/HeroSection";
import TopSelling from "../../components/topSelling/TopSelling";
import Reviews from "../../components/reviews/Reviews";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import Stats from "../../components/stats/Stats";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";
import BestO2 from "../../components/bestO2/BestO2";

function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#162414]">
      <Navbar />
      <HeroSection />
      <TopSelling />
      <Reviews />
      <BestO2 />
      <WhyChooseUs />
      <Stats />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default Home;