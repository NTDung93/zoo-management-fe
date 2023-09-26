import BackToTop from "../components/BackToTop/BackToTop";
import AnimalSlider from "../components/Home/AnimalSlider";
import BlogSection from "../components/Home/BlogSection";
import FactSection from "../components/Home/FactSection";
import Gallery from "../components/Home/GallerySection"; // Fix the import here
import HeroSilder from "../components/Home/HeroSlider";
import InfoSection from "../components/Home/InfoSection";
import WelcomeSection from "../components/Home/WelcomeSection"; // Fix the import here

function HomePage() {
  return (
    <>
      <BackToTop />
      <HeroSilder />
      <AnimalSlider />
      <WelcomeSection />
      <InfoSection />
      <Gallery />
      <FactSection />
      <BlogSection />
    </>
  );
}

export default HomePage;
