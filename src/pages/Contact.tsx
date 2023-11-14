import BackToTop from "../components/BackToTop/BackToTop";
import Banner from "../components/Banner/Banner";

const Contact = () => {
  return (
    <>
      <BackToTop />
      <Banner
        pageName={"Contact Us"}
        singleName={"Contact Us"}
        pictureUrl="https://res.cloudinary.com/dpysbryyk/image/upload/v1696091215/banner/zkca9wgow4qwhmzhrypc.jpg"
      />
      <div className="section--sm section--top">
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-md-4">
              <h4 className="mt-0">How can i help you?</h4>
              <p className="section__para">
                We are here to provide information and support for your needs.
                Feel free to reach out with any questions or assistance you
                require.
              </p>
              <ul className="list">
                <li>
                  <div className="d-flex align-items-center border gap-3 px-4 py-2">
                    <span className="d-inline-block text--base xxl-text">
                      <i className="fas fa-phone-alt"></i>
                    </span>
                    <span className="d-block flex-grow-1">
                      +123 - 456 - 789000
                    </span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center border gap-3 px-4 py-2">
                    <span className="d-inline-block text--base xxl-text">
                      <i className="far fa-envelope"></i>
                    </span>
                    <span className="d-block flex-grow-1">
                      amazoo@gmail.com
                    </span>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center border gap-3 px-4 py-2">
                    <span className="d-inline-block text--base xxl-text">
                      <i className="fas fa-globe"></i>
                    </span>
                    <span className="d-block flex-grow-1">
                      www.amazoo.com
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-8 col-lg-7">
              <div className="zoo-box">
                <form action="#" className="row g-4">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control form--control"
                      placeholder="Name*"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control form--control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control form--control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      rows={5}
                      className="form-control form--control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <a
                      href="#"
                      className="btn btn--md btn--base text-uppercase"
                    >
                      {" "}
                      Submit Query{" "}
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Map Section  --> */}
      <div className="section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="map-view">
                <iframe
                  className="map-view__frame"
                  src="https://maps.google.com/maps?q=23.7925,90.4078&hl=es;z=14&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
