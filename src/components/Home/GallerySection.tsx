
function Gallery() {
  return (
    <div className="section--sm section--top">
      <div className="section__head">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-8 col-xl-6">
              <div className="text-center">
                <span className="section__particles">
                  <span className="section__subtitle section__subtitle-dash">
                    {" "}
                    Zoo Gallery{" "}
                  </span>
                </span>
                <h2 className="section__title mt-2">
                  Let`s see our Viserzoo awsome <span>Gallery</span>
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
        <div className="row g-4 justify-content-center">
          <div className="col-12">
            <ul className="list list--row gallery-list flex-wrap justify-content-center">
              <li>
                <button
                  className="btn btn--md btn--gallery active"
                  data-filter="all"
                >
                  ALL
                </button>
              </li>
              <li>
                <button className="btn btn--md btn--gallery" data-filter="tiger">
                  TIGER
                </button>
              </li>
              <li>
                <button className="btn btn--md btn--gallery" data-filter="lion">
                  LION
                </button>
              </li>
              <li>
                <button className="btn btn--md btn--gallery" data-filter="bird">
                  WILD BIRDS
                </button>
              </li>
              <li>
                <button className="btn btn--md btn--gallery" data-filter="koala">
                  KOALA
                </button>
              </li>
              <li>
                <button className="btn btn--md btn--gallery" data-filter="bear">
                  BEAR
                </button>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <div className="row filter-container show-img g-0">
              <div
                className="col-md-6 col-lg-4 filtr-item"
                data-category="all, tiger"
                data-sort="value"
              >
                <div className="gallery-card">
                  <img
                    src="/src/assets/images/gallery-1.png"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="/src/assets/images/gallery-1.png"
                      className="t-link gallery-card__link"
                    >
                      <i className="las la-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 filtr-item"
                data-category="all, lion, bird"
                data-sort="value"
              >
                <div className="gallery-card">
                  <img
                    src="/src/assets/images/gallery-2.png"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="/src/assets/images/gallery-2.png"
                      className="t-link gallery-card__link"
                    >
                      <i className="las la-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 filtr-item"
                data-category="all, bird"
                data-sort="value"
              >
                <div className="gallery-card">
                  <img
                    src="/src/assets/images/gallery-3.png"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="/src/assets/images/gallery-3.png"
                      className="t-link gallery-card__link"
                    >
                      <i className="las la-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 filtr-item"
                data-category="all, lion, bear"
                data-sort="value"
              >
                <div className="gallery-card">
                  <img
                    src="/src/assets/images/gallery-4.png"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="/src/assets/images/gallery-4.png"
                      className="t-link gallery-card__link"
                    >
                      <i className="las la-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 filtr-item"
                data-category="all, koala"
                data-sort="value"
              >
                <div className="gallery-card">
                  <img
                    src="/src/assets/images/gallery-5.png"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="/src/assets/images/gallery-5.png"
                      className="t-link gallery-card__link"
                    >
                      <i className="las la-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 filtr-item"
                data-category="all, bird, tiger"
                data-sort="value"
              >
                <div className="gallery-card">
                  <img
                    src="/src/assets/images/gallery-6.png"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="/src/assets/images/gallery-6.png"
                      className="t-link gallery-card__link"
                    >
                      <i className="las la-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 filtr-item"
                data-category="all, lion, bear"
                data-sort="value"
              >
                <div className="gallery-card">
                  <img
                    src="/src/assets/images/gallery-1.png"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="/src/assets/images/gallery-1.png"
                      className="t-link gallery-card__link"
                    >
                      <i className="las la-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 filtr-item"
                data-category="all, koala, tiger"
                data-sort="value"
              >
                <div className="gallery-card">
                  <img
                    src="/src/assets/images/gallery-2.png"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="/src/assets/images/gallery-2.png"
                      className="t-link gallery-card__link"
                    >
                      <i className="las la-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 filtr-item"
                data-category="all, bird, bear"
                data-sort="value"
              >
                <div className="gallery-card">
                  <img
                    src="/src/assets/images/gallery-3.png"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="/src/assets/images/gallery-3.png"
                      className="t-link gallery-card__link"
                    >
                      <i className="las la-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
