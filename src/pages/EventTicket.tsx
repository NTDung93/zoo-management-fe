import Banner from "../components/Banner/Banner";

export default function EventTicket() {
    return (
        <>
            <Banner pageName={'Event ticket'} singleName={'Event ticket'} />

            <div className="section">
                <div className="container">
                    <div className="row g-4 justify-content-between">
                        <div className="col-lg-6 col-xxl-5">
                            <div className="pe-xl-4">
                                <h3 className="mt-0">Admission for Zoo Lights</h3>
                                <p className="section__para">
                                    Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.
                                    Vestibulum volutpat pretium libero. Cras id dui.
                                </p>
                                <div className="zoo-box">
                                    <h5 className="mt-0">Adult Admission</h5>
                                    <p className="section__para">
                                        Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.
                                        Vestibulum volutpat pretium libero. Cras id dui.
                                    </p>
                                    <form action="#" className="row">
                                        <div className="col-12">
                                            <label className="form-label fw-bold t-heading-font heading-clr">
                                                Ages 14 & Older
                                            </label>
                                            <div className="form--select">
                                                <select
                                                    className="form-select form--select"
                                                    aria-label="Default select example"
                                                >
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <span className="d-block sm-text mt-2 t-heading-font">
                                                <strong>Note:</strong> Suspligula. Nulla facilisi. Donec id
                                                justo.
                                            </span>
                                        </div>
                                    </form>
                                    <hr className="my-5" />
                                    <h5 className="mt-0">Child Admission</h5>
                                    <p className="section__para">
                                        Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.
                                        Vestibulum volutpat pretium libero. Cras id dui.
                                    </p>
                                    <form action="#" className="row">
                                        <div className="col-12">
                                            <label className="form-label fw-bold t-heading-font heading-clr">
                                                Ages 04 & Older
                                            </label>
                                            <div className="form--select">
                                                <select
                                                    className="form-select form--select"
                                                    aria-label="Default select example"
                                                >
                                                    <option selected>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <span className="d-block sm-text mt-2 t-heading-font">
                                                <strong>Note:</strong> Suspligula. Nulla facilisi. Donec id
                                                justo.
                                            </span>
                                        </div>
                                    </form>
                                    <a
                                        href="#"
                                        className="btn btn--md btn--base mt-4 text-uppercase sm-text"
                                    >
                                        add selected to cart
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ps-xl-4">
                                <h3 className="mt-0">Event Rules</h3>
                                <p className="section__para">
                                    Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.
                                    Vestibulum volutpat pretium libero. Cras id dui.
                                </p>
                                <h5 className="mt-0">Rules 01</h5>
                                <p className="section__para">
                                    Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                                </p>
                                <h5 className="mt-0">Rules 02</h5>
                                <p className="section__para">
                                    Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                                </p>
                                <h5 className="mt-0">Rules 03</h5>
                                <p className="section__para">
                                    Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                                </p>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="event-counter">
                                            <img
                                                src="assets/images/event-counter-img.png"
                                                alt="image"
                                                className="event-counter__img"
                                            />
                                            <div className="event-counter__list event-countdown">
                                                <div className="event-counter__item">
                                                    <h5 className="m-0 text-center text--white">
                                                        <span className="hours"></span>
                                                    </h5>
                                                    <span
                                                        className="d-block text-center fw-md text--white t-heading-font"
                                                    >
                                                        HOURS
                                                    </span>
                                                </div>
                                                <div className="event-counter__item">
                                                    <h5 className="m-0 text-center text--white">
                                                        <span className="minutes"></span>
                                                    </h5>
                                                    <span
                                                        className="d-block text-center fw-md text--white t-heading-font"
                                                    >
                                                        MINS
                                                    </span>
                                                </div>
                                                <div className="event-counter__item">
                                                    <h5 className="m-0 text-center text--white">
                                                        <span className="seconds"></span>
                                                    </h5>
                                                    <span
                                                        className="d-block text-center fw-md text--white t-heading-font"
                                                    >
                                                        SEC
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <h3 className="mb-4">Related Event</h3>
                            <div className="row g-4 justify-content-center">
                                <div className="col-md-6 col-lg-3">
                                    <div className="blog-post">
                                        <img
                                            src="assets/images/blog-post-1.png"
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
                                                    <a href="event-details.html" className="t-link blog-post__title-link">
                                                        The chameleon is a species of chameleon found
                                                    </a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="blog-post">
                                        <img
                                            src="assets/images/blog-post-2.png"
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
                                                    <a href="event-details.html" className="t-link blog-post__title-link">
                                                        The chameleon is a species of chameleon found
                                                    </a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="blog-post">
                                        <img
                                            src="assets/images/blog-post-3.png"
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
                                                    <a href="event-details.html" className="t-link blog-post__title-link">
                                                        The chameleon is a species of chameleon found
                                                    </a>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="blog-post">
                                        <img
                                            src="assets/images/about-img-1.png"
                                            alt="image"
                                            className="blog-post__img"
                                        />
                                        <div className="blog-post__overlay">
                                            <div className="blog-post__date">
                                                <div className="blog-post__date-content">
                                                    <h5 className="mt-0 mb-1 text-center text--white">{10}</h5>
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
        </>
    )
}