import React from 'react'

const EventDetailContent = () => {
  return (
    <div className="section--sm section--top">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-12">
              <div className="event-counter">
                <img src="assets/images/event-counter-img.png" alt="image" className="event-counter__img" />
                <div className="event-counter__list event-countdown">
                  <div className="event-counter__item">
                    <h5 className="m-0 text-center text--white">
                      <span className="hours" />
                    </h5>
                    <span className="d-block text-center fw-md text--white t-heading-font">
                      HOURS
                    </span>
                  </div>
                  <div className="event-counter__item">
                    <h5 className="m-0 text-center text--white">
                      <span className="minutes" />
                    </h5>
                    <span className="d-block text-center fw-md text--white t-heading-font">
                      MINS
                    </span>
                  </div>
                  <div className="event-counter__item">
                    <h5 className="m-0 text-center text--white">
                      <span className="seconds" />
                    </h5>
                    <span className="d-block text-center fw-md text--white t-heading-font">
                      SEC
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10">
              <h4>Zoo Lights Miami</h4>
              <p>
                Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Ut non enim
                eleifend felis pretium feugiat. Vivamus quis mi. Phasellus a est.
                Phasellus magna. In hac habitasse platea dictumst. Curabitur at lacus
                ac velit ornare ortis. Curabitur a felis in nunc fringilla tristique.
                Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam
                vel sem. Pellentesque libero tortor tincidunt et tincidunt eget,
                semper necquam. Sed hendrerit. Morbi ac felis.
              </p>
              <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                  <img src="assets/images/event-img-7.png" alt="image" className="img-fluid" />
                </div>
                <div className="col-lg-6">
                  <div className="ps-xl-4">
                    <h5 className="mt-lg-0">Join Us To Enjoy:</h5>
                    <ul className="list list--base">
                      <li>More than one million bright and dazzling tree lights!</li>
                      <li>A brand new 26 foot tall LED holiday tree</li>
                      <li>Animal Appearances</li>
                      <li>Arts &amp; crafts (limited space available)</li>
                      <li>Appearances by Santa until December 23</li>
                      <li>Letters to Santa</li>
                      <li>Hot chocolate and cookies</li>
                      <li>Snowman's River Boat Rides</li>
                      <li>Holiday Shopping at the Zoo Gift Shop</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="mt-4">
                Fusce convallis metus id felis luctus adipiscing. Pellentesque
                egestas, neque sit amet convallis pulvinar, justo nulla eleifend
                augue, ac auctor orci leo non est. Quisque id mi. Ut tincidunt
                tincidunt erat. Etiam feugiat lorem non metus. Vestibulum dapibus nunc
                ac augue. Curabitur vestibulum aliquam leo. Praesent egestas neque eu
                enim. In hac habitasse platea dictumst. Fusce a quam. Etiam ut purus
                mattis mauris sodales aliquam. Curabitur nisi. Quisque malesuada
                placerat nisl. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie
                vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada
                adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis,
                ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris
                sollicitudin fermentum libero. Praesent nonummy mi in odio. Nunc
                interdum lacus sit amet orci.
              </p>
              <div className="row g-4">
                <div className="col-md-4">
                  <img src="assets/images/event-img-8.png" alt="image" className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <div className="table-responsive--md">
                    <table className="table custom--table">
                      <thead>
                        <tr>
                          <th>Date &amp; Time</th>
                          <th>Theme</th>
                          <th>Activity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Amount">November 26 &amp; 27 at 08:30pm</td>
                          <td data-label="Currency">
                            <strong>RH Night Light</strong> ligula mi congue ismodn
                            ligula urna in dolor.
                          </td>
                          <td data-label="Deposit">
                            Phasellus gravida semper nisi. Nullam vel sem.
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Amount">November 26 &amp; 27 at 08:30pm</td>
                          <td data-label="Currency">
                            <strong>Degital 3D animation</strong> ligula mi congue
                            ismodn ligula urna in dolor.
                          </td>
                          <td data-label="Deposit">
                            Phasellus gravida semper nisi. Nullam vel sem.
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Amount">November 26 &amp; 27 at 08:30pm</td>
                          <td data-label="Currency">
                            <strong>Animal Exhibition</strong> ligula mi congue ismodn
                            ligula urna in dolor.
                          </td>
                          <td data-label="Deposit">
                            Phasellus gravida semper nisi. Nullam vel sem.
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Amount">November 26 &amp; 27 at 08:30pm</td>
                          <td data-label="Currency">
                            <strong>Degital 3D animation</strong> ligula mi congue
                            ismodn ligula urna in dolor.
                          </td>
                          <td data-label="Deposit">
                            Phasellus gravida semper nisi. Nullam vel sem.
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Amount">November 26 &amp; 27 at 08:30pm</td>
                          <td data-label="Currency">
                            <strong>Animal Exhibition</strong> ligula mi congue ismodn
                            ligula urna in dolor.
                          </td>
                          <td data-label="Deposit">
                            Phasellus gravida semper nisi. Nullam vel sem.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="section--sm">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="text-center text-lg-start pe-xxl-4">
                      <h2 className="mt-0">What`s you want to know about event</h2>
                      <p className="section__para mx-auto ms-xl-0">
                        Phasellus consectetuer vestibulum elit. Aenean tellus
                        metusbibendum suere mat non nunc. Vestibulum fringilla
                      </p>
                      <div className="accordion custom--accordion custom--accordion-alt" id="faqAccordion">
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                              Why Viserzoo?
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                              Fusce convallis metus id felis luctus adipiscing.
                              Pellentesque egestas neque sit amet convallis pulvinar
                              justo nulla eleifend augue ac auctor orci leo non est.
                              Quisque incidunt tincidunt erat.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false">
                              How to buy ticket in online?
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                              Fusce convallis metus id felis luctus adipiscing.
                              Pellentesque egestas neque sit amet convallis pulvinar
                              justo nulla eleifend augue ac auctor orci leo non est.
                              Quisque incidunt tincidunt erat.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false">
                              Upcoming Animals?
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                              Fusce convallis metus id felis luctus adipiscing.
                              Pellentesque egestas neque sit amet convallis pulvinar
                              justo nulla eleifend augue ac auctor orci leo non est.
                              Quisque incidunt tincidunt erat.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false">
                              How to Select Ticket plan?
                            </button>
                          </h2>
                          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                              Fusce convallis metus id felis luctus adipiscing.
                              Pellentesque egestas neque sit amet convallis pulvinar
                              justo nulla eleifend augue ac auctor orci leo non est.
                              Quisque incidunt tincidunt erat.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false">
                              Can I rent a stroller or wheelchair
                            </button>
                          </h2>
                          <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                              Fusce convallis metus id felis luctus adipiscing.
                              Pellentesque egestas neque sit amet convallis pulvinar
                              justo nulla eleifend augue ac auctor orci leo non est.
                              Quisque incidunt tincidunt erat.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="fullsection-img">
                      <img src="assets/images/event-img-9.png" alt="image" className="fullsection-img__is" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="mt-0 mb-4">
                Related Event 
              </h3>
              <div className="row g-4 justify-content-center">
                <div className="col-md-6 col-lg-4">
                  <div className="blog-post">
                    <img src="assets/images/blog-post-1.png" alt="image" className="blog-post__img" />
                    <div className="blog-post__overlay">
                      <div className="blog-post__date">
                        <div className="blog-post__date-content">
                          <h5 className="mt-0 mb-1 text-center text--white">10</h5>
                          <h6 className="m-0 text-center text--white">MAY</h6>
                        </div>
                      </div>
                      <div className="blog-post__content">
                        <h5 className="blog-post__title">
                          <a href="event-details.html" className="t-link blog-post__title-link">
                            The chameleon is a species of chameleon found
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="blog-post">
                    <img src="assets/images/blog-post-2.png" alt="image" className="blog-post__img" />
                    <div className="blog-post__overlay">
                      <div className="blog-post__date">
                        <div className="blog-post__date-content">
                          <h5 className="mt-0 mb-1 text-center text--white">10</h5>
                          <h6 className="m-0 text-center text--white">MAY</h6>
                        </div>
                      </div>
                      <div className="blog-post__content">
                        <h5 className="blog-post__title">
                          <a href="event-details.html" className="t-link blog-post__title-link">
                            The chameleon is a species of chameleon found
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="blog-post">
                    <img src="assets/images/blog-post-3.png" alt="image" className="blog-post__img" />
                    <div className="blog-post__overlay">
                      <div className="blog-post__date">
                        <div className="blog-post__date-content">
                          <h5 className="mt-0 mb-1 text-center text--white">10</h5>
                          <h6 className="m-0 text-center text--white">MAY</h6>
                        </div>
                      </div>
                      <div className="blog-post__content">
                        <h5 className="blog-post__title">
                          <a href="event-details.html" className="t-link blog-post__title-link">
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
        </div>
      </div>
  )
}

export default EventDetailContent