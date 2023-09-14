
function TicketSection() {
  return (
    <div className="section membership-section">
      <div className="section__head">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-8 col-xl-5">
              <div className="text-center">
                <span className="section__particles">
                  <span className="section__subtitle section__subtitle-dash">
                    {" "}
                    Membership Plan{" "}
                  </span>
                </span>
                <h2 className="section__title mt-2">
                  You can be a member of <span>Viserzoo</span>
                </h2>
                <p className="section__para mx-auto">
                  Phasellus consectetuer vestibulum elit. Ametusbibendum mattis
                  non. Vestibulum fringilla pede sit ameugue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 g-xxl-5">
          <div className="col-lg-6">
            <div className="membership-card">
              <div className="membership-card__img">
                <img
                  src="/src/assets/images/member-img-1.png"
                  alt="image"
                  className="membership-card__img-is"
                />
              </div>
              <div className="membership-card__content">
                <h4 className="membership-card__price">$108.59</h4>
                <h5 className="membership-card__title">Premium</h5>
                <p className="heading-clr sm-text fw-md text-uppercase">
                  ALL PREFERRED AND STANDARD LEVEL BENEFITS PLUS
                </p>
                <ul className="list list--base">
                  <li>20% Dsicount All Event</li>
                  <li>Allow 2 adult person</li>
                  <li>Free Animal museum Exhibition</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="sign-up.html"
                    className="t-link btn btn--md btn--gallery"
                  >
                    {" "}
                    Join Now{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="membership-card">
              <div className="membership-card__img">
                <img
                  src="/src/assets/images/member-img-2.png"
                  alt="image"
                  className="membership-card__img-is"
                />
              </div>
              <div className="membership-card__content">
                <h4 className="membership-card__price">$168.09</h4>
                <h5 className="membership-card__title">Preferred</h5>
                <p className="heading-clr sm-text fw-md text-uppercase">
                  ALL STANDARD LEVEL BENEFITS PLUS
                </p>
                <ul className="list list--base">
                  <li>20% Dsicount All Event</li>
                  <li>Allow 2 adult person</li>
                  <li>Free Animal museum Exhibition</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="sign-up.html"
                    className="t-link btn btn--md btn--gallery"
                  >
                    {" "}
                    Join Now{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="membership-card">
              <div className="membership-card__img">
                <img
                  src="/src/assets/images/member-img-3.png"
                  alt="image"
                  className="membership-card__img-is"
                />
              </div>
              <div className="membership-card__content">
                <h4 className="membership-card__price">$200.89</h4>
                <h5 className="membership-card__title">Standard</h5>
                <p className="heading-clr sm-text fw-md text-uppercase">
                  two named adults living in the same household
                </p>
                <ul className="list list--base">
                  <li>20% Dsicount All Event</li>
                  <li>Allow 2 adult person</li>
                  <li>Free Animal museum Exhibition</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="sign-up.html"
                    className="t-link btn btn--md btn--gallery"
                  >
                    {" "}
                    Join Now{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="membership-card">
              <div className="membership-card__img">
                <img
                  src="/src/assets/images/member-img-4.png"
                  alt="image"
                  className="membership-card__img-is"
                />
              </div>
              <div className="membership-card__content">
                <h4 className="membership-card__price">$380.99</h4>
                <h5 className="membership-card__title">VIP Pass</h5>
                <p className="heading-clr sm-text fw-md text-uppercase">
                  ALL BENEFITS Includes PLUS More
                </p>
                <ul className="list list--base">
                  <li>20% Dsicount All Event</li>
                  <li>Allow 2 adult person</li>
                  <li>Free Animal museum Exhibition</li>
                </ul>
                <div className="mt-4">
                  <a
                    href="sign-up.html"
                    className="t-link btn btn--md btn--gallery"
                  >
                    {" "}
                    Join Now{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketSection;
