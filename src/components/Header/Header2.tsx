const Header2 = () => {
  return (
    <>
      {/* Serch PopUp */}
      <div className="body-overlay" id="body-overlay"></div>
      <div className="search-popup" id="search-popup">
        <form action="#" className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button type="submit" className="submit-btn xl-text">
            <i className="las la-search"></i>
          </button>
        </form>
      </div>
      <header className="header-fixed header--secondary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header--secondary-container">
                <div className="row g-0 align-items-center">
                  <div className="col-6 d-lg-none">
                    {/* Logo  */}
                    <a href="index.html" className="logo">
                      <img
                        src="src/assets/images/logo.png"
                        alt="viserhyip"
                        className="img-fluid logo__is"
                      />
                    </a>
                    {/* Logo End */}
                  </div>
                  <div className="col-6 col-lg-12">
                    <div className="nav-container">
                      {/* Navigation Toggler  */}
                      <div className="d-flex justify-content-end align-items-center d-lg-none">
                        <a
                          href="#"
                          className="primary-menu__link t-link search--toggler text-center text--white border-bottom-0"
                        >
                          <i className="las la-search" />
                        </a>
                        <button
                          type="button"
                          className="btn btn--sqr btn--base nav--toggle text--white"
                        >
                          <i className="las la-bars" />
                        </button>
                      </div>
                      {/* Navigation Toggler End */}
                      {/* Navigation  */}
                      <nav className="navs">
                        {/* Primary Menu  */}
                        <ul className="list primary-menu">
                          <li className="primary-menu__list">
                            <a
                              href="/home"
                              className="primary-menu__link text-capitalize"
                            >
                              {" "}
                              home{" "}
                            </a>
                          </li>
                          <li className="primary-menu__list has-sub">
                            <a
                              href="#"
                              className="primary-menu__link text-capitalize"
                            >
                              pages
                            </a>
                            <ul className="primary-menu__sub">
                              <li className="primary-menu__sub-list">
                                <a
                                  href="/about"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  About
                                </a>
                              </li>
                              <li className="primary-menu__sub-list">
                                <a
                                  href="/member-ship"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  Membership
                                </a>
                              </li>
                              <li className="primary-menu__sub-list">
                                <a
                                  href="/animals"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  Animals
                                </a>
                              </li>
                              <li className="primary-menu__sub-list">
                                <a
                                  href="/animal-detail"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  Animal Details
                                </a>
                              </li>
                              <li className="primary-menu__sub-list">
                                <a
                                  href="/event"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  Events
                                </a>
                              </li>
                              <li className="primary-menu__sub-list">
                                <a
                                  href="/event-detail"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  Event Details
                                </a>
                              </li>
                              <li className="primary-menu__sub-list">
                                <a
                                  href="/event-ticket"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  Event ticket
                                </a>
                              </li>
                              <li className="primary-menu__sub-list">
                                <a
                                  href="/cart"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  Cart
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="primary-menu__list has-sub">
                            <a
                              href="#"
                              className="primary-menu__link text-capitalize"
                            >
                              News
                            </a>
                            <ul className="primary-menu__sub">
                              <li className="primary-menu__sub-list">
                                <a
                                  href="/news"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  News
                                </a>
                              </li>
                              <li className="primary-menu__sub-list">
                                <a
                                  href="/news-detail"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  News detail
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="primary-menu__list">
                            <a
                              href="/contact"
                              className="primary-menu__link text-capitalize"
                            >
                              Contact
                            </a>
                          </li>
                          <li className="primary-menu__list has-sub">
                            <a
                              href="#"
                              className="primary-menu__link text-capitalize"
                            >
                              others
                            </a>
                            <ul className="primary-menu__sub">
                              <li className="primary-menu__sub-list">
                                <a
                                  href="/gallery"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  Gallery
                                </a>
                              </li>
                              <li className="primary-menu__sub-list">
                                <a
                                  href="/ticket"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  Buy Ticket
                                </a>
                              </li>
                              <li className="primary-menu__sub-list">
                                <a
                                  href="/sign-in"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  Sign in
                                </a>
                              </li>
                              <li className="primary-menu__sub-list">
                                <a
                                  href="/sign-up"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  Sign Up
                                </a>
                              </li>
                              <li className="primary-menu__sub-list">
                                <a
                                  href="/page-404"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  404
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="primary-menu__list d-none d-lg-block">
                            <a
                              href="#"
                              className="primary-menu__link t-link search--toggler text-center"
                            >
                              <i className="las la-search" />
                            </a>
                          </li>
                        </ul>
                        {/* Primary Menu End */}
                        {/* User Login  */}
                        <div className="mx-3 ms-lg-auto me-lg-0">
                          <ul className="list primary-menu primary-menu--alt">
                            <li className="primary-menu__list text-center">
                              <a
                                href="sign-up.html"
                                className="btn btn--md btn--base w-100"
                              >
                                Donate Now
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* User Login End */}
                      </nav>
                      {/* Navigation End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header2;
