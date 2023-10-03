function WelcomeSection() {
  return (
    <div className="section welcome-section">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-md-8 col-xl-6">
            <div className="text-center text-xl-start">
              <span className="section__particles">
                <span className="section__subtitle"> Welcome to Viserzoo </span>
              </span>
              <h2 className="section__title mt-2">
                Why You Should Visit <span>Viserzoo</span>
              </h2>
              <p className="section__para mx-auto ms-xl-0 mb-xxl-5">
                Phasellus consectetuer vestibulum elit. Aenean tellus
                metusbibendum suere mattis non nunc. Vestibulum fringilla pede
                sit ameugue. In turpis. Pellentesque posuere.
              </p>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="welcome-card">
                  <div className="welcome-card__icon mx-auto ms-xl-0">
                    <img
                      src="/src/assets/images/wc-icon-1.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="welcome-card__content">
                    <h5 className="mt-xl-0 mb-2 text-center text-xl-start">
                      Free car Parking
                    </h5>
                    <p className="mb-0 text-center text-xl-start">
                      Praesent adipiscing. Phasellu lamcorper ipsum rutrumunc.
                      Nunc nonummy workings
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="welcome-card">
                  <div className="welcome-card__icon mx-auto ms-xl-0">
                    <img
                      src="/src/assets/images/wc-icon-2.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="welcome-card__content">
                    <h5 className="mt-xl-0 mb-2 text-center text-xl-start">
                      Supper Eviorment
                    </h5>
                    <p className="mb-0 text-center text-xl-start">
                      Praesent adipiscing. Phasellu lamcorper ipsum rutrumunc.
                      Nunc nonummy workings
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="welcome-card">
                  <div className="welcome-card__icon mx-auto ms-xl-0">
                    <img
                      src="/src/assets/images/wc-icon-3.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="welcome-card__content">
                    <h5 className="mt-xl-0 mb-2 text-center text-xl-start">
                      World best Animls
                    </h5>
                    <p className="mb-0 text-center text-xl-start">
                      Praesent adipiscing. Phasellu lamcorper ipsum rutrumunc.
                      Nunc nonummy workings
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="welcome-card">
                  <div className="welcome-card__icon mx-auto ms-xl-0">
                    <img
                      src="/src/assets/images/wc-icon-4.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="welcome-card__content">
                    <h5 className="mt-xl-0 mb-2 text-center text-xl-start">
                      Guide & Security
                    </h5>
                    <p className="mb-0 text-center text-xl-start">
                      Praesent adipiscing. Phasellu lamcorper ipsum rutrumunc.
                      Nunc nonummy workings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-xl-6">
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dpysbryyk/image/upload/v1696092265/order/fkg8vizybc6l0wzsgbds.jpg"
                alt="images"
                className="img-fluid mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
