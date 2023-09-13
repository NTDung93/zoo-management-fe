import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="section">
          <div className="container">
            <div className="row g-4 justify-content-xl-between">
              <div className="col-md-6 col-lg-3">
                <h4 className="info-section__title mt-0 text--white">Contact info</h4>
                <ul className="list">
                  <li>
                    <div className="list list--row">
                      <span className="info-section__icon">
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <p className="mb-0 text--white t-short-para">
                        New York 10460 , Old city town martina road
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="list list--row">
                      <span className="info-section__icon">
                        <i className="far fa-envelope" />
                      </span>
                      <ul className="list">
                        <li>
                          <p className="mb-0 text--white t-short-para">
                            support24/7.com
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="list list--row">
                      <span className="info-section__icon">
                        <i className="fas fa-phone-alt" />
                      </span>
                      <ul className="list" >
                        <li>
                          <p className="mb-0 text--white t-short-para">
                            +123 - 456 - 789000
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <ul className="list list--row">
                      <li>
                        <a href="#" className="t-link icon icon--circle icon--xs expert-card__icon">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="t-link icon icon--circle icon--xs expert-card__icon">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="t-link icon icon--circle icon--xs expert-card__icon">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="t-link icon icon--circle icon--xs expert-card__icon">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-2">
                <h4 className="info-section__title mt-0 text--white">
                  Animals
                </h4>
                <ul className="list list--column">
                  <li className="list--column__item">
                    <a href="about.html" className="t-link t-link--base text--white d-inline-block">
                      About Us
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a href="faq.html" className="t-link t-link--base text--white d-inline-block">
                      FAQ
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a href="member.html" className="t-link t-link--base text--white d-inline-block">
                      Membership
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a href="blog.html" className="t-link t-link--base text--white d-inline-block">
                      Blog
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a href="contact.html" className="t-link t-link--base text--white d-inline-block">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-2">
                <h4 className="info-section__title mt-0 text--white">
                  Useful Link
                </h4>
                <ul className="list list--column">
                  <li className="list--column__item">
                    <a href="animal.html" className="t-link t-link--base text--white d-inline-block">
                      Animals
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a href="animal-details.html" className="t-link t-link--base text--white d-inline-block">
                      Animals Details
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a href="event.html" className="t-link t-link--base text--white d-inline-block">
                      Events
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a href="event-details.html" className="t-link t-link--base text--white d-inline-block">
                      Event Details
                    </a>
                  </li>
                  <li className="list--column__item">
                    <a href="cart.html" className="t-link t-link--base text--white d-inline-block">
                      Cart
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-4">
                <h4 className="info-section__title mt-0 text--white">
                  Opening Time
                </h4>
                <ul className="list list--underline">
                  <li>
                    <div className="list list--row justify-content-between">
                      <div className="list list--row align-items-center">
                        <span className="text--base">
                          <i className="far fa-clock" />
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
                      <div className="list list--row align-items-center">
                        <span className="text--base">
                          <i className="far fa-clock" />
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
                      <div className="list list--row align-items-center">
                        <span className="text--base">
                          <i className="far fa-clock" />
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
                      <div className="list list--row align-items-center">
                        <span className="text--base">
                          <i className="far fa-clock" />
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
            </div>
          </div>
        </div>
        <div className="footer__copyright py-3">
          <p className="mb-0 sm-text text--white text-center">
            Copyright © 2022. All Rights Reserved By
            <a href="#" className="t-link t-link--base text--base">ViserZoo</a>
          </p>
        </div>
      </footer>
  )
}

export default Footer