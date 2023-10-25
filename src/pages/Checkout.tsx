
import BackToTop from "../components/BackToTop/BackToTop";
import Banner from "../components/Banner/Banner";
import ImageBottom from "../components/Bottom/ImageBottom";
import CheckOut from "../components/Cart/checkout";

export default function Checkout() {
  return (
    <>
      <BackToTop />
      <Banner
        pageName={"Checkout"}
        singleName={"Checkout"}
        pictureUrl="https://res.cloudinary.com/dpysbryyk/image/upload/v1696091228/banner/ejxl6rugbbou2yzhxyli.jpg"
      />

     <CheckOut/>

      <ImageBottom />
    </>
  );
}
