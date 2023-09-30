
const MembershipSection = () => {
  return (
    <div className="section--sm section--top">
  <div className="section__head">
    <div className="container">
      <div className="row g-4 justify-content-center">
        <div className="col-md-8 col-xl-6 col-xxl-5">
          <div className="text-center">
            <span className="section__particles">
              <span className="section__subtitle section__subtitle-dash">
                {" "}
                Membership Plan{" "}
              </span>
            </span>
            <h2 className="section__title mt-2">
              You can be a member of <span>Viserzoo</span>
            </h2>
            <p className="section__para mx-auto mb-0">
              Phasellus consectetuer vestibulum elit. Ametusbibendum mattis non.
              Vestibulum fringilla pede sit ameugue.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row g-4">
      <div className="col-md-4">
        <div className="member-card">
          <img
            src="assets/images/member-card-1.png"
            alt="image"
            className="member-card__img"
          />
          <div className="member-card__content">
            <h5 className="membership-card__title mb-2 text--white">Premium</h5>
            <h4 className="membership-card__price mt-2">$108.59</h4>
            <ul className="list list--base">
              <li className="text--white">20% Dsicount All Event</li>
              <li className="text--white">Allow 2 adult person</li>
              <li className="text--white">Free Animal museum Exhibition</li>
            </ul>
          </div>
          <a href="member.html" className="t-link member-card__overlay">
            <i className="las la-plus" />
          </a>
        </div>
      </div>
      <div className="col-md-4">
        <div className="member-card">
          <img
            src="assets/images/member-card-2.png"
            alt="image"
            className="member-card__img"
          />
          <div className="member-card__content">
            <h5 className="membership-card__title mb-2 text--white">
              Standard
            </h5>
            <h4 className="membership-card__price mt-2">$108.59</h4>
            <ul className="list list--base">
              <li className="text--white">20% Dsicount All Event</li>
              <li className="text--white">Allow 2 adult person</li>
              <li className="text--white">Free Animal museum Exhibition</li>
            </ul>
          </div>
          <a href="member.html" className="t-link member-card__overlay">
            <i className="las la-plus" />
          </a>
        </div>
      </div>
      <div className="col-md-4">
        <div className="member-card">
          <img
            src="assets/images/member-card-3.png"
            alt="image"
            className="member-card__img"
          />
          <div className="member-card__content">
            <h5 className="membership-card__title mb-2 text--white">Popular</h5>
            <h4 className="membership-card__price mt-2">$108.59</h4>
            <ul className="list list--base">
              <li className="text--white">20% Dsicount All Event</li>
              <li className="text--white">Allow 2 adult person</li>
              <li className="text--white">Free Animal museum Exhibition</li>
            </ul>
          </div>
          <a href="member.html" className="t-link member-card__overlay">
            <i className="las la-plus" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default MembershipSection