function WelcomeSection() {
  return (
    <div className="section welcome-section">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-md-8 col-xl-6">
            <div className="text-center text-xl-start">
              <span className="section__particles">
                <span className="section__subtitle"> Welcome to AmaZoo </span>
              </span>
              <h2 className="section__title mt-2">
                Why You Should Visit <span>AmaZoo</span>
              </h2>
              <p className="section__para mx-auto ms-xl-0 mb-xxl-5">
                Welcome to our beloved zoo, a place where the enchanting world
                of wildlife comes to life. Immerse yourself in the wonders of
                nature as you explore our beautifully curated exhibits, designed
                to provide a home for a diverse array of animal species.
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
                      Enjoy the convenience of free car parking during your
                      visit. We want to make your trip to our zoo as stress-free
                      as possible.
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
                      Superb Environment
                    </h5>
                    <p className="mb-0 text-center text-xl-start">
                      We've created natural habitats for our animals and a
                      superb environment for you to enjoy.
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
                      World best Animals
                    </h5>
                    <p className="mb-0 text-center text-xl-start">
                      Encounter incredible creatures from around the world. Get
                      ready to be amazed!
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
                      Our knowledgeable guides and top-notch security team are
                      here to enhance your experience and ensure your safety.
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
