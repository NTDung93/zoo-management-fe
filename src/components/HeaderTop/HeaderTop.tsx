import React from 'react'

const HeaderTop = () => {
  return (
    <div className="header-top d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <ul className="list list--row">
                <li>
                  <span className="d-block text--white">
                    <i className="far fa-clock" />
                  </span>
                </li>
                <li>
                  <span className="d-block text--white"> Hours : 10 am to 5pm <span className="d-none d-xxl-inline-block text--dark ps-2 fw-md"> Online Tickets Requred</span></span>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 bg-dark text-center">
              {/* Logo  */}
              <a href="index.html" className="logo mx-auto">
                <img src="assets/images/logo.png" alt="viserhyip" className="img-fluid logo__is" />
              </a>
              {/* Logo End */}
            </div>
            <div className="col-lg-4">
              <ul className="list list--row justify-content-end">
                <li>
                  <a href="sign-in.html" className="t-link t-link--light text--white list list--row align-items-center">
                    <span className="d-block">
                      <i className="fas fa-user" />
                    </span>
                    <span className="d-block">Sign In</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="t-link t-link--light text--white list list--row align-items-center">
                    <span className="d-block">
                      <i className="fas fa-globe" />
                    </span>
                    <span className="d-block">English</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeaderTop