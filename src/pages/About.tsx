import BackToTop from "../components/BackToTop/BackToTop";
import Banner from "../components/Banner/Banner";
import ImageSilderBottom from "../components/Bottom/ImageSliderBottom";
import BlogSection from "../components/Home/BlogSection";
import ExpertAuthoritySection from "../components/Home/ExpertAuthoritySection";
import FactSection from "../components/Home/FactSection";
import WelcomeSection from "../components/Home/WelcomeSection";
export default function About() {
  return (
    <>
      <Banner
        pageName={"About Zoo"}
        singleName={"About Zoo"}
        pictureUrl="https://res.cloudinary.com/dpysbryyk/image/upload/v1696091224/banner/ietmrxj8bkpg9gpgjpcc.jpg"
      />
      <BackToTop />
      <div className="section--sm section--top">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-xl-5">
              <div className="me-xxl-5">
                <img
                  src="https://res.cloudinary.com/dnk5fcjhn/image/upload/v1696068202/tien-dung/error/lkw0ctoz2jd1g5fyc5c0.png"
                  alt="image"
                  className="info-image"
                />
              </div>
            </div>
            <div className="col-lg-4 col-xl-3">
              <h4 className="info-section__title mt-0">Visitor Info</h4>
              <ul className="list list--base">
                <li>
                  <a href="#" className="t-link t-link--base text-clr">
                    Important Info
                  </a>
                </li>
                <li>
                  <a href="#" className="t-link t-link--base text-clr">
                    frequently asked questions
                  </a>
                </li>
                <li>
                  <a href="#" className="t-link t-link--base text-clr">
                    Zoo Derection Map
                  </a>
                </li>
                <li>
                  <a href="#" className="t-link t-link--base text-clr">
                    Donation for Animals
                  </a>
                </li>
                <li>
                  <a href="#" className="t-link t-link--base text-clr">
                    Zoo Rules &amp; Gudie Line
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h4 className="info-section__title mt-0">Visiting Time</h4>
              <ul className="list list--underline">
                <li>
                  <div className="list list--row justify-content-between">
                    <div className="list list--row align-items-center">
                      <span className="text--base">
                        <i className="far fa-clock" />
                      </span>
                      <span className="d-inline-block text-clr sm-text">
                        {" "}
                        10.00 AM{" "}
                      </span>
                    </div>
                    <span className="d-inline-block text-clr sm-text">
                      {" "}
                      Zoo Opens{" "}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list list--row justify-content-between">
                    <div className="list list--row align-items-center">
                      <span className="text--base">
                        <i className="far fa-clock" />
                      </span>
                      <span className="d-inline-block text-clr sm-text">
                        {" "}
                        03.45 PM{" "}
                      </span>
                    </div>
                    <span className="d-inline-block text-clr sm-text">
                      Sea Lion Feeding
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list list--row justify-content-between">
                    <div className="list list--row align-items-center">
                      <span className="text--base">
                        <i className="far fa-clock" />
                      </span>
                      <span className="d-inline-block text-clr sm-text">
                        {" "}
                        04.20 PM{" "}
                      </span>
                    </div>
                    <span className="d-inline-block text-clr sm-text">
                      Exhibits Close
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list list--row justify-content-between">
                    <div className="list list--row align-items-center">
                      <span className="text--base">
                        <i className="far fa-clock" />
                      </span>
                      <span className="d-inline-block text-clr sm-text">
                        {" "}
                        05.00 PM{" "}
                      </span>
                    </div>
                    <span className="d-inline-block text-clr sm-text">
                      {" "}
                      Zoo Close{" "}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <WelcomeSection />
      <FactSection />
      <ExpertAuthoritySection />
      <BlogSection />
      <ImageSilderBottom />
    </>
  );
}
