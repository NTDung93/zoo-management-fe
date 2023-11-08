import { Badge } from "@mui/base";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import { ShoppingCart } from '@mui/icons-material'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
const Header2 = () => {
  const {cartItems} = useSelector((state: RootState) => state.cart);
  const itemCount = cartItems?.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    const isSticky = () => {
      const header = document.querySelector(".header-section") as HTMLElement;
      const scrollTop = window.scrollY;
      scrollTop >= 250
        ? header.classList.add("is-sticky")
        : header.classList.remove("is-sticky");
    };

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  return (
    <>
      {/* Top Header */}
      <div className="header-top d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <ul className="list list--row">
                <li>
                  <span className="d-block text--white">
                    <i className="far fa-clock"></i>
                  </span>
                </li>
                <li>
                  <span className="d-block text--white">
                    Hours : 10 am to 5pm
                    <span className="d-none d-xxl-inline-block text--dark ps-2 fw-md">
                      Online Tickets Required
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 bg-dark text-center">
              {/* Logo */}
              <a href="/" className="logo mx-auto">
                <img
                  src="https://res.cloudinary.com/dnk5fcjhn/image/upload/v1696089347/logo/xojcbh3wzgfcavmnspgu.svg"
                  alt="viserhyip"
                  className="img-fluid logo__is"
                />
              </a>
              {/* Logo End */}
            </div>
            <div className="col-lg-4">
              <ul className="list list--row justify-content-end">
                <li>
                  <a
                    href="/sign-in"
                    className="t-link t-link--light text--white list list--row align-items-center"
                  >
                    <span className="d-block">
                      <i className="fas fa-user"></i>
                    </span>
                    <span className="d-block">Sign In</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="t-link t-link--light text--white list list--row align-items-center"
                  >
                    <span className="d-block">
                      <i className="fas fa-globe"></i>
                    </span>
                    <span className="d-block">English</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Top Header End */}

      <header className="header-section header--secondary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header--secondary-container">
                <div className="row g-0 align-items-center">
                  <div className="col-6 d-lg-none">
                    {/* Logo  */}
                    <a href="/home" className="logo">
                      <img
                        src="https://res.cloudinary.com/dnk5fcjhn/image/upload/v1696089347/logo/xojcbh3wzgfcavmnspgu.svg"
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
                                  href="/animals"
                                  className="t-link primary-menu__sub-link text-capitalize"
                                >
                                  Animals
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
                          <ul className="list primary-menu primary-menu--alt" style={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton component={Link} to='/cart' size="large" edge='start' color='primary' sx={{ mr: 2 }}>
                              <Badge color='secondary' style={{ color: '#86c305', display: 'flex', alignItems: 'center' }}>
                                <ShoppingCart style={{transform: 'scale(1.2)'}}/>
                                <div style={{ transform: 'scale(0.7) translateY(-13px)', fontWeight: '500' }}>
                                  {itemCount}
                                </div>
                              </Badge>
                            </IconButton>

                            <li className="primary-menu__list text-center">
                              <a
                                href="/ticket"
                                className="btn btn--md btn--base w-100"
                              >
                                Buy ticket
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
