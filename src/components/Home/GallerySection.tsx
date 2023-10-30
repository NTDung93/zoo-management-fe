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
                  Explore our stunning collection of wildlife photographs and
                  exhibits. Visit us to
                  experience these wonders up close.
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
                <button
                  className="btn btn--md btn--gallery"
                  data-filter="tiger"
                >
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
                <button
                  className="btn btn--md btn--gallery"
                  data-filter="koala"
                >
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
                    src="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320191/gellary/ds2yhmcar199hvrkjpgg.jpg"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320191/gellary/ds2yhmcar199hvrkjpgg.jpg"
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
                    src="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320177/gellary/zap18lfgn9zhbf2ge3zh.jpg"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320177/gellary/zap18lfgn9zhbf2ge3zh.jpg"
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
                    src="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320173/gellary/i6eqhcysearx0353xunu.jpg"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320173/gellary/i6eqhcysearx0353xunu.jpg"
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
                    src="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320172/gellary/vn97vpbfbgfcljoosnsd.jpg"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320172/gellary/vn97vpbfbgfcljoosnsd.jpg"
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
                    src="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320172/gellary/yskqxts4pbrfvcka0ukm.jpg"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320172/gellary/yskqxts4pbrfvcka0ukm.jpg"
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
                    src="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320171/gellary/hnwhfcjxvzloagvb2qsf.jpg"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320171/gellary/hnwhfcjxvzloagvb2qsf.jpg"
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
                    src="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320167/gellary/hbyf9qr0s61lfcldw9bt.jpg"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320167/gellary/hbyf9qr0s61lfcldw9bt.jpg"
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
                    src="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320166/gellary/m4gjtweis6cnggl4yh4u.jpg"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320166/gellary/m4gjtweis6cnggl4yh4u.jpg"
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
                    src="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320166/gellary/czdoozih8wgfgbm6u13j.jpg"
                    alt="image"
                    className="gallery-card__img"
                  />
                  <div className="gallery-card__overlay">
                    <a
                      href="https://res.cloudinary.com/dpysbryyk/image/upload/v1696320166/gellary/czdoozih8wgfgbm6u13j.jpg"
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
