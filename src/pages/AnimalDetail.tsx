import AnimalDetailSection from "../components/AnimalDetail/AnimalDetailSection";
import OtherAnimalsSection from "../components/AnimalDetail/OtherAnimalsSection";
import BackToTop from "../components/BackToTop/BackToTop";
import Banner from "../components/Banner/Banner";
import ImageSilderBottom from "../components/Bottom/ImageSliderBottom";

const AnimalDetail = () => {
  return (
    <>
      <BackToTop />
      <Banner
        pageName={"Animal detail"}
        singleName={"Animal detail"}
        pictureUrl="https://res.cloudinary.com/dpysbryyk/image/upload/v1696091215/banner/zkca9wgow4qwhmzhrypc.jpg"
      />
      <AnimalDetailSection />
      <OtherAnimalsSection />
      <ImageSilderBottom />
    </>
  );
};

export default AnimalDetail;
