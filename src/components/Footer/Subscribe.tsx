export default function SignUp() {
  return (
    <>
      <div className="subscribe-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="subscribe-section__content">
                <div className="row g-4 align-items-center">
                  <div className="col-md-6">
                    <div className="text-center text-md-start d-grid gap-2">
                      {/* Logo  */}
                      <a href="/home" className="logo mx-auto ms-md-0">
                        <img
                          src="https://res.cloudinary.com/dnk5fcjhn/image/upload/v1696089347/logo/xojcbh3wzgfcavmnspgu.svg"
                          alt="viserhyip"
                          className="img-fluid logo__is"
                        />
                      </a>
                      {/* Logo End */}
                      <p className="t-short-para mb-0 text--white mx-auto ms-md-0">
                        Subscribe to our newsletter and stay informed about the
                        latest updates, news, and exclusive tips on wildlife and
                        conservation.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-center text-md-end">
                      <h5 className="mt-0 text--white">
                        Subscribe Our Newsletters
                      </h5>
                      <div className="newsletter mx-auto ms-md-auto me-md-0">
                        <div className="newsletter__container rounded-pill">
                          <input
                            type="text"
                            className="form-control form--control newsletter__input flex-grow-1 rounded-pill"
                            placeholder="Subscribe now.."
                          />
                          <button className="btn xxl-text lh-1 text--white rounded-pill sm-text">
                            <i className="far fa-paper-plane"></i>
                          </button>
                        </div>
                      </div>
                    </div>
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
