const SignInSection = () => {
  return (
    <div className="section__head">
        <div className="section login-section">
          <div className="container">
            <div className="row g-4 justify-content-center justify-content-xl-start">
              <div className="col-md-8 col-xl-6 col-xxl-5">
                <div className="login-form">
                  <h4 className="mt-0 text-center">Sign in your account</h4>
                  <p className="section__para mx-auto text-center">
                    Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.
                    Vestibulum volutpat pretium libero. Cras id dui.
                  </p>
                  <form action="#" className="row g-4">
                    <div className="col-12">
                      <input type="text" className="form-control form--control" placeholder="Email" />
                    </div>
                    <div className="col-12">
                      <input type="password" className="form-control form--control" placeholder="Password" />
                    </div>
                    <div className="col-12">
                      <a href="#" className="t-link btn btn--xl btn--base w-100 sm-text text-uppercase">
                        sign in account
                      </a>
                    </div>
                    <div className="col-12">
                      <p className="mb-0 t-heading-font text-center">
                        Don't have an account yet?
                        <a href="#" className="t-link text--base t-link--base text-capitalize">Create Account</a>
                      </p>
                    </div>
                    <div className="col-12">
                      <div className="divider">
                        <span className="divider__content">OR</span>
                      </div>
                    </div>
                    <div className="col-12">
                      <p className="mb-3 t-heading-font text-center">
                        Continue with social media
                      </p>
                      <ul className="list list--row flex-wrap justify-content-center align-items-center">
                        <li>
                          <a href="#" className="t-link t-link--light icon icon--circle icon--xs bg--base text--white">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="t-link t-link--light icon icon--circle icon--xs bg--base text--white">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="t-link t-link--light icon icon--circle icon--xs bg--base text--white">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SignInSection