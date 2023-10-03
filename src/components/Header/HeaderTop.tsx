export default function HeaderTop() {
  return (
    <>
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
                    {" "}
                    Hours : 10 am to 5pm{" "}
                    <span className="d-none d-xxl-inline-block text--dark ps-2 fw-md">
                      {" "}
                      Online Tickets Requred
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 bg-dark text-center">
              {/* Logo  */}
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
    </>
  );
}
