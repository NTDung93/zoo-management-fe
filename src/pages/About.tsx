import Testimonial from "../components/About/Testimonial";
import AnimalGallery from "../components/Animals/AnimalGallery";
import BackToTop from "../components/BackToTop/BackToTop";
import Banner from "../components/Banner/Banner";
import ImageSilderBottom from "../components/Bottom/ImageSliderBottom";
import Feedback from "../components/Feedback/Feedback";
import BlogSection from "../components/Home/BlogSection";
import ExpertAuthoritySection from "../components/Home/ExpertAuthoritySection";
import FactSection from "../components/Home/FactSection";
import FeedbackSection from "../components/Home/FeedbackSection";
import WelcomeSection from "../components/Home/WelcomeSection";
export default function About() {
  return (
    <>
      <Banner pageName={"About Zoo"} singleName={"About Zoo"} />
      <BackToTop />
      <div className="section--sm section--top">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-xl-5">
              <div className="me-xxl-5">
                <img
                  src="assets/images/info-img.png"
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
      <AnimalGallery />
      <div className="section--sm faq-section">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-8 col-xl-6">
              <div className="text-center pe-xxl-5">
                <img
                  src="assets/images/about-img-3.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-8 col-xl-6">
              <div className="ps-xxl-5">
                <div className="text-center text-xl-start">
                  <span className="section__particles">
                    <span className="section__subtitle"> FAQ </span>
                  </span>
                  <h2 className="section__title mt-2">
                    What`s you know about{" "}
                    <span className="fw-regular">viserzoo</span>
                  </h2>
                  <p className="section__para mx-auto ms-xl-0">
                    Phasellus consectetuer vestibulum elit. Ametusbibendum
                    mattis non. Vestibulum fringilla pede sit ameugue.
                  </p>
                </div>
                <div
                  className="accordion custom--accordion custom--accordion-alt"
                  id="faqAccordion"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                      >
                        Why Viserzoo?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Fusce convallis metus id felis luctus adipiscing.
                        Pellentesque egestas neque sit amet convallis pulvinar
                        justo nulla eleifend augue ac auctor orci leo non est.
                        Quisque incidunt tincidunt erat.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                      >
                        How to buy ticket in online?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Fusce convallis metus id felis luctus adipiscing.
                        Pellentesque egestas neque sit amet convallis pulvinar
                        justo nulla eleifend augue ac auctor orci leo non est.
                        Quisque incidunt tincidunt erat.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                      >
                        Upcoming Animals?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Fusce convallis metus id felis luctus adipiscing.
                        Pellentesque egestas neque sit amet convallis pulvinar
                        justo nulla eleifend augue ac auctor orci leo non est.
                        Quisque incidunt tincidunt erat.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial/>
      <ExpertAuthoritySection/>
      <BlogSection/>
      <ImageSilderBottom/>
    </>
  );
}
