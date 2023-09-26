import AnimalDetailSection from "../components/AnimalDetail/AnimalDetailSection";
import OtherAnimalsSection from "../components/AnimalDetail/OtherAnimalsSection";
import ClientSectionSlider from "../components/Animals/ClientSectionSlider";
import BackToTop from "../components/BackToTop/BackToTop";
import Banner from "../components/Banner/Banner";

const AnimalDetail = () => {
  return (
    <>
      <BackToTop />
      <Banner pageName={"Animal detail"} singleName={"Animal detail"} />
      <AnimalDetailSection />
      <OtherAnimalsSection />
      <ClientSectionSlider />
    </>
  );
};

export default AnimalDetail;
