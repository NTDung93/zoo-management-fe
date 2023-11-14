import { useState, useEffect } from "react";
import agent from "../api/agent";
import BackToTop from "../components/BackToTop/BackToTop";
import AnimalSlider from "../components/Home/AnimalSlider";
import BlogSection from "../components/Home/BlogSection";
import FactSection from "../components/Home/FactSection";
import Gallery from "../components/Home/GallerySection"; // Fix the import here
import HeroSilder from "../components/Home/HeroSlider";
import InfoSection from "../components/Home/InfoSection";
import WelcomeSection from "../components/Home/WelcomeSection"; // Fix the import here
import { NewsObj } from "../models/news";

function HomePage() {
  const [listNews, setListNews] = useState<NewsObj[]>([]);

  useEffect(() => {
    agent.News.list()
      .then((response) => {
        setListNews(response);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <BackToTop />
      <HeroSilder />
      <AnimalSlider/>
      <InfoSection />
      <WelcomeSection />
      <Gallery />
      <FactSection />
      <BlogSection listnews={listNews}/>
    </>
  );
}

export default HomePage;
