
const FaqSection = () => {
  return (
    <div className="section--sm section--bottom">
  <div className="container">
    <div className="row g-4 justify-content-center">
      <div className="col-md-8 col-xl-6 col-xxl-5">
        <div className="text-center text-xl-start">
          <span className="section__particles">
            <span className="section__subtitle"> FAQ </span>
          </span>
          <h2 className="section__title mt-2">
            What`s you know about <span>viserzoo</span>
          </h2>
          <p className="section__para mx-auto ms-xl-0">
            Phasellus consectetuer vestibulum elit. Ametusbibendum mattis non.
            Vestibulum fringilla pede sit ameugue.
          </p>
        </div>
        <div className="accordion custom--accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
              >
                Why Viserzoo?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Fusce convallis metus id felis luctus adipiscing. Pellentesque
                egestas neque sit amet convallis pulvinar justo nulla eleifend
                augue ac auctor orci leo non est. Quisque incidunt tincidunt
                erat.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
              >
                How to buy ticket in online?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Fusce convallis metus id felis luctus adipiscing. Pellentesque
                egestas neque sit amet convallis pulvinar justo nulla eleifend
                augue ac auctor orci leo non est. Quisque incidunt tincidunt
                erat.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
              >
                Upcoming Animals?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Fusce convallis metus id felis luctus adipiscing. Pellentesque
                egestas neque sit amet convallis pulvinar justo nulla eleifend
                augue ac auctor orci leo non est. Quisque incidunt tincidunt
                erat.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-xl-6 col-xxl-7">
        <div className="section__img-bottom text-center">
          <img
            src="assets/images/rhino.png"
            alt="images"
            className="img-fluid section__img-bottom-img"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default FaqSection