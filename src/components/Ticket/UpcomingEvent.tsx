import React, { FC } from "react";

interface UpcomingEventProps {}

const UpcomingEvent: FC<UpcomingEventProps> = ({}) => {
  return (
    <div className="section--sm">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-12">
            <h3 className="m-0">Upcoming Event</h3>
          </div>
          <div className="col-md-4">
            <div className="blog-post">
              <img
                src="src/assets/images/blog-post-1.png"
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
                  <h5 className="blog-post__title">
                    <a
                      href="event-details.html"
                      className="t-link blog-post__title-link"
                    >
                      The chameleon is a species of chameleon found
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog-post">
              <img
                src="src/assets/images/blog-post-2.png"
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
                  <h5 className="blog-post__title">
                    <a
                      href="event-details.html"
                      className="t-link blog-post__title-link"
                    >
                      The chameleon is a species of chameleon found
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog-post">
              <img
                src="src/assets/images/blog-post-3.png"
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
                  <h5 className="blog-post__title">
                    <a
                      href="event-details.html"
                      className="t-link blog-post__title-link"
                    >
                      The chameleon is a species of chameleon found
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
