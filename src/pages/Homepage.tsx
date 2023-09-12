import Header from '../components/Header/Header';
import AnimalSlider from '../components/Home/AnimalSlider';
import BackToTop from '../components/Home/BackToTop';
import BlogSection from '../components/Home/BlogSection';
import EventSection from '../components/Home/EventSection';
import FactSection from '../components/Home/FactSection';
import FAQSection from '../components/Home/FaqSection';
import FeedbackSection from '../components/Home/FeedbackSection';
import Gallery from '../components/Home/GallerySection'; // Fix the import here
import HeroSilder from '../components/Home/HeroSlider';
import InfoSection from '../components/Home/InfoSection';
import SearchPopup from '../components/Home/SearchPopup'; // Fix the import here
import TicketSection from '../components/Home/TicketSection';
import WelcomeSection from '../components/Home/WelcomeSection'; // Fix the import here
import Preloader from '../components/Loader/Preloader';

function Homepage() {
  return (
    <>
      <Preloader />
      <BackToTop />
      <SearchPopup/>
      <Header/>
      <HeroSilder/>
      <AnimalSlider/>
      <WelcomeSection/>
      <InfoSection/>
      <Gallery/>
      <FAQSection/>
      <FactSection/>
      <TicketSection/>
      <FeedbackSection/>
      <EventSection/>
      <BlogSection/>
    </>
  );
}

export default Homepage;
