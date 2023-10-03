const ErrorSection = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-md-10 col-xl-8">
            <h2 className="section__title mt-0 text-center">
              Opps! Page Not <span>Found</span>
            </h2>
            <p className="section__para mx-auto text-center">
              Phasellus consectetuer vestibulum elit. Ametusbibendum mattis non.
              Vestibulum fringilla pede sit ameugue.
            </p>
            <div className="text-center my-5">
              <img
                src="https://res.cloudinary.com/dnk5fcjhn/image/upload/v1696068294/tien-dung/error/la1ubc55cxehkcexdzd5.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="text-center">
              <a
                href="/home"
                className="btn btn--xl btn--base text-uppercase sm-text"
              >
                {" "}
                go back to home{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorSection;
