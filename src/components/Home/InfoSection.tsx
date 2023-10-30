function InfoSection() {
  return (
    <div className="info-section__container mt-5">
      <div className="section info-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <h4 className="info-section__title mt-0 text--white">
                Visitor Info
              </h4>
              <ul className="list list--base">
                <li>
                  <a href="#" className="t-link t-link--base text--white">
                    Important Info
                  </a>
                </li>
                <li>
                  <a href="#" className="t-link t-link--base text--white">
                    Frequently asked questions
                  </a>
                </li>
                <li>
                  <a href="#" className="t-link t-link--base text--white">
                    Zoo Direction Map
                  </a>
                </li>
                <li>
                  <a href="#" className="t-link t-link--base text--white">
                    Donation for Animals
                  </a>
                </li>
                <li>
                  <a href="#" className="t-link t-link--base text--white">
                    Zoo Rules & Guide Line
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4">
              <h4 className="info-section__title mt-0 text--white">
                Visiting Time
              </h4>
              <ul className="list list--underline">
                <li>
                  <div className="list list--row justify-content-between">
                    <div
                      className="list list--row align-items-center"
                      style={{ gap: "0.5rem" }}
                    >
                      <span className="text--base">
                        <i className="far fa-clock"></i>
                      </span>
                      <span className="d-inline-block text--white sm-text">
                        10.00 AM
                      </span>
                    </div>
                    <span className="d-inline-block text--white sm-text">
                      Zoo Opens
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list list--row justify-content-between">
                    <div
                      className="list list--row align-items-center"
                      style={{ gap: "0.5rem" }}
                    >
                      <span className="text--base">
                        <i className="far fa-clock"></i>
                      </span>
                      <span className="d-inline-block text--white sm-text">
                        03.45 PM
                      </span>
                    </div>
                    <span className="d-inline-block text--white sm-text">
                      Sea Lion Feeding
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list list--row justify-content-between">
                    <div
                      className="list list--row align-items-center"
                      style={{ gap: "0.5rem" }}
                    >
                      <span className="text--base">
                        <i className="far fa-clock"></i>
                      </span>
                      <span className="d-inline-block text--white sm-text">
                        04.20 PM
                      </span>
                    </div>
                    <span className="d-inline-block text--white sm-text">
                      Exhibits Close
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list list--row justify-content-between">
                    <div
                      className="list list--row align-items-center"
                      style={{ gap: "0.5rem" }}
                    >
                      <span className="text--base">
                        <i className="far fa-clock"></i>
                      </span>
                      <span className="d-inline-block text--white sm-text">
                        05.00 PM
                      </span>
                    </div>
                    <span className="d-inline-block text--white sm-text">
                      Zoo Close
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4">
              <h4 className="info-section__title mt-0 text--white">
                Contact info
              </h4>
              <ul className="list">
                <li>
                  <div className="list list--row align-items-center">
                    <span className="info-section__icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <p className="mb-0 text--white t-short-para">
                      Ho Chi Minh city, Vietnam
                    </p>
                  </div>
                </li>
                <li>
                  <div className="list list--row align-items-center">
                    <span className="info-section__icon">
                      <i className="far fa-envelope"></i>
                    </span>
                    <ul className="list" style={{ gap: "0.5rem" }}>
                      <li>
                        <p className="mb-0 text--white t-short-para">
                          amazoo@gmail.com
                        </p>
                      </li>
                      <li>
                        <p className="mb-0 text--white t-short-para">
                          contactinfo@gmail.com
                        </p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="list list--row align-items-center">
                    <span className="info-section__icon">
                      <i className="fas fa-phone-alt"></i>
                    </span>
                    <ul className="list" style={{ gap: "0.5rem" }}>
                      <li>
                        <p className="mb-0 text--white t-short-para">
                          +123 - 456 - 789000
                        </p>
                      </li>
                      <li>
                        <p className="mb-0 text--white t-short-para">
                          +123 - 456 - 789000
                        </p>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
