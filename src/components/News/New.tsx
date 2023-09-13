import img from "./../../assets/images/blog-post-2.png";
import "./New.css";
const New = () => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="blog-post">
        <img src={img} alt="image" className="blog-post__img" />
        <div className="blog-post__overlay">
          <div className="blog-post__date">
            <div className="blog-post__date-content">
              <h5 className="mt-0 mb-1 text-center text--white">10</h5>
              <h6 className="m-0 text-center text--white">MAY</h6>
            </div>
          </div>
          <div className="blog-post__content">
            <h4 className="blog-post__title">
              <a
                href="blog-details.html"
                className="t-link blog-post__title-link"
              >
                The chameleon is a species of chameleon found
              </a>
            </h4>
            <ul className="list list--row breadcrumbs">
              <li className="breadcrumbs__item" id="firstchild">
                <a href="#" className="t-link text--white t-link--base">
                  Robart turs
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a href="#" className="t-link text--white t-link--base">
                  Chameleon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default New;
