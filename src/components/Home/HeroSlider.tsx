function HeroSilder() {
  return (
    <>
      <div className="hero">
        <div className="hero-slider">
          <div
            className="hero-slider__item"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dpysbryyk/image/upload/v1696091243/banner/nrxkgkwyavgug2g2c2tk.jpg)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="hero-slider__content justify-content-center">
                    <div className="row justify-content-center justify-content-lg-start">
                      <div className="col-md-9 col-lg-6 text-center text-lg-start">
                        <h3 className="hero-slider__title text-capitalize text--white mb-4">
                        Experience a world of wildlife in the heart
                        </h3>
                        <h1 className="hero-slider__title text-capitalize text--white mb-4">
                          Visit AmaZoo
                        </h1>
                        <a
                          href="/ticket"
                          className="btn btn--xl btn--base sm-text"
                        >
                          BUY TICKET
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hero-slider__item"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dpysbryyk/image/upload/v1696091229/banner/bakzqfhoqbzeoxrgyrkl.jpg)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="hero-slider__content justify-content-center">
                    <div className="row justify-content-center justify-content-lg-start">
                      <div className="col-md-9 col-lg-6 text-center text-lg-start">
                        <h1 className="hero-slider__title text-capitalize text--white mb-4">
                          Gift a year of wonderful family days out
                        </h1>
                        <a
                          href="gallery.html"
                          className="btn btn--xl btn--base sm-text"
                        >
                          DISCOVER MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hero-slider__item"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dpysbryyk/image/upload/v1696091228/banner/ejxl6rugbbou2yzhxyli.jpg)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="hero-slider__content justify-content-center">
                    <div className="row justify-content-center justify-content-lg-start">
                      <div className="col-md-9 col-lg-6 text-center text-lg-start">
                        <h1 className="hero-slider__title text-capitalize text--white mb-4">
                          Gift a year of wonderful family days out
                        </h1>
                        <a
                          href="gallery.html"
                          className="btn btn--xl btn--base sm-text"
                        >
                          DISCOVER MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-nav-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="hero-nav">
                  <div className="hero-nav__item">
                    <img
                      src="https://res.cloudinary.com/dpysbryyk/image/upload/v1696091243/banner/nrxkgkwyavgug2g2c2tk.jpg"
                      alt="image"
                      className="hero-nav__img"
                    />
                  </div>
                  <div className="hero-nav__item">
                    <img
                      src="https://res.cloudinary.com/dpysbryyk/image/upload/v1696091229/banner/bakzqfhoqbzeoxrgyrkl.jpg"
                      alt="image"
                      className="hero-nav__img"
                    />
                  </div>
                  <div className="hero-nav__item">
                    <img
                      src="https://res.cloudinary.com/dpysbryyk/image/upload/v1696091228/banner/ejxl6rugbbou2yzhxyli.jpg"
                      alt="image"
                      className="hero-nav__img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSilder;
