import BackToTop from "../components/BackToTop/BackToTop";
import Banner from "../components/Banner/Banner";
import ImageBottom from "../components/Bottom/ImageBottom";
import SearchPopup from "../components/Search/SearchPopup";
import SignInSection from "../components/SignIn/SignInSection";

const SignIn = () => {
  return (
    <>
      <Banner
        pageName={"Sign in"}
        singleName={"Sign in"}
        pictureUrl="https://res.cloudinary.com/dpysbryyk/image/upload/v1696091228/banner/ejxl6rugbbou2yzhxyli.jpg"
      />

      <BackToTop />
      <SearchPopup />
      <SignInSection />
      <ImageBottom />
    </>
  );
};

export default SignIn;
