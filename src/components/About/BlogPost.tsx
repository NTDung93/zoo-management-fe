const BlogPost = () => {
  return (
    <>
      <div className="section--sm">
        <div className="section__head">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-md-8 col-xl-6">
                <div className="text-center">
                  <span className="section__particles">
                    <span className="section__subtitle section__subtitle-dash">
                      Blog Post
                    </span>
                  </span>
                  <h2 className="section__title mt-2">
                    Latest <span>News &amp; Tips</span>
                  </h2>
                  <p className="section__para mx-auto">
                    Phasellus consectetuer vestibulum elit. Ametusbibendum
                    mattis non. Vestibulum fringilla pede sit ameugue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="blog-post">
                <img
                  src="assets/images/blog-post-1.png"
                  alt="image"
                  className="blog-post__img"
                />
                <div className="blog-post__overlay">
                  <div className="blog-post__date">
                    <div className="blog-post__date-content">
                      <h5 className="mt-0 mb-1 text-center text--white">10</h5>
                      <h6 className="m-0 text-center text--white">MAY</h6>
                    </div>
                  </div>
                  <div className="blog-post__content">
                    <h4 className="blog-post__title">
                      <a
                        href="blog-details.html"
                        className="t-link blog-post__title-link"
                      >
                        The chameleon is a species of chameleon found
                      </a>
                    </h4>
                    <ul className="list list--row breadcrumbs">
                      <li className="breadcrumbs__item">
                        <a href="#" className="t-link text--white t-link--base">
                          Robart turs
                        </a>
                      </li>
                      <li className="breadcrumbs__item">
                        <a href="#" className="t-link text--white t-link--base">
                          Chameleon
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="blog-post">
                <img
                  src="assets/images/blog-post-2.png"
                  alt="image"
                  className="blog-post__img"
                />
                <div className="blog-post__overlay">
                  <div className="blog-post__date">
                    <div className="blog-post__date-content">
                      <h5 className="mt-0 mb-1 text-center text--white">10</h5>
                      <h6 className="m-0 text-center text--white">MAY</h6>
                    </div>
                  </div>
                  <div className="blog-post__content">
                    <h4 className="blog-post__title">
                      <a
                        href="blog-details.html"
                        className="t-link blog-post__title-link"
                      >
                        The chameleon is a species of chameleon found
                      </a>
                    </h4>
                    <ul className="list list--row breadcrumbs">
                      <li className="breadcrumbs__item">
                        <a href="#" className="t-link text--white t-link--base">
                          Robart turs
                        </a>
                      </li>
                      <li className="breadcrumbs__item">
                        <a href="#" className="t-link text--white t-link--base">
                          Chameleon
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="blog-post">
                <img
                  src="assets/images/blog-post-3.png"
                  alt="image"
                  className="blog-post__img"
                />
                <div className="blog-post__overlay">
                  <div className="blog-post__date">
                    <div className="blog-post__date-content">
                      <h5 className="mt-0 mb-1 text-center text--white">10</h5>
                      <h6 className="m-0 text-center text--white">MAY</h6>
                    </div>
                  </div>
                  <div className="blog-post__content">
                    <h4 className="blog-post__title">
                      <a
                        href="blog-details.html"
                        className="t-link blog-post__title-link"
                      >
                        The chameleon is a species of chameleon found
                      </a>
                    </h4>
                    <ul className="list list--row breadcrumbs">
                      <li className="breadcrumbs__item">
                        <a href="#" className="t-link text--white t-link--base">
                          Robart turs
                        </a>
                      </li>
                      <li className="breadcrumbs__item">
                        <a href="#" className="t-link text--white t-link--base">
                          Chameleon
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
