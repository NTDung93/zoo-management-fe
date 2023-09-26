import { FC } from "react";
import AnimalGallery from "../components/Animals/AnimalGallery";
import ClientSectionSlider from "../components/Animals/ClientSectionSlider";
import EventSection from "../components/Animals/EventSection";
import Banner from "../components/Banner/Banner";
import BackToTop from "../components/BackToTop/BackToTop";

const Animals: FC = () => {
  return (
    <>
      <BackToTop />
      <Banner pageName={"Animals"} singleName={"Animals"} />
      <AnimalGallery />
      <EventSection />
      <ClientSectionSlider />
    </>
  );
};

export default Animals;
