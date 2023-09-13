import { FC } from "react";
import imgmain from "./../assets/images/blog-post-5.png";
import imgsection from "./../assets/images/event-img-7.png";
import imgcate from "./../assets/images/people-5.jpg";
import imgmemberCard from "./../assets/images/member-card-1.png";

import Content from "./../components/NewDetail/Content";
import NewCate from "./../components/NewDetail/NewCate";
import Tags from "./../components/NewDetail/Tags";
interface NewDetailProps { }

const NewDetail: FC<NewDetailProps> = ({ }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-7 col-lg-8">
            <Content imgmain={imgmain} imgsection={imgsection} />
            <div className="list list--row flex-wrap justify-content-md-between align-items-center blog-share">
              <ul className="list list--row flex-wrap align-items-center">
                <li>
                  <span className="fw-md d-block"> Share </span>
                </li>
                <li>
                  <a
                    href="#"
                    className="t-link btn btn--gallery text-uppercase sm-text fw-bold"
                  >
                    tiger
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="t-link btn btn--gallery text-uppercase sm-text fw-bold"
                  >
                    animal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="t-link btn btn--gallery text-uppercase sm-text fw-bold"
                  >
                    blog
                  </a>
                </li>
              </ul>
              <ul className="list list--row flex-wrap align-items-center">
                <li>
                  <span className="fw-md d-block"> Share </span>
                </li>
                <li>
                  <a
                    href="#"
                    className="t-link t-link--light icon icon--circle icon--xs bg--dark text--white"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="t-link t-link--light icon icon--circle icon--xs bg--dark text--white"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="t-link t-link--light icon icon--circle icon--xs bg--dark text--white"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="section--sm pb-0">
              <h4 className="mt-0">Leave a Comment</h4>
              <form action="#" className="row g-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control form--control"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control form--control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control form--control"
                    placeholder="Website"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control form--control"
                    placeholder="Write Comment"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn--lg btn--base text-uppercase sm-text"
                  >
                    leave a comment
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="ps-xl-4 ps-xxl-5">
              <ul className="list">
                <li>
                  <div className="widget">
                    <h5 className="mt-0">Search Keyword</h5>
                    <div className="search-box">
                      <input
                        type="text"
                        className="form-control search-box__control"
                        placeholder="Search Keyword"
                      />
                      <button className="search-box__btn" type="button">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="widget">
                    <h5 className="widget__title">Popular News</h5>
                    <ul className="list">
                      <NewCate
                        img={imgcate}
                        title={"Maecenas tempus tellus"}
                        date={"28 May 2021"}
                        author={"Viserzoo"}
                      />
                      <NewCate
                        img={imgcate}
                        title={"Maecenas tempus tellus"}
                        date={"28 May 2021"}
                        author={"Viserzoo"}
                      />
                      <NewCate
                        img={imgcate}
                        title={"Maecenas tempus tellus"}
                        date={"28 May 2021"}
                        author={"Viserzoo"}
                      />
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="widget">
                    <h5 className="widget__title">News Tag</h5>
                    <ul className="list list--row flex-wrap">
                      <Tags nameTag="Tiger" />
                      <Tags nameTag="African lion" />
                      <Tags nameTag="Birds" />
                      <Tags nameTag="Live Came" />
                      <Tags nameTag="Water World" />
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="member-card">
                    <img
                      src={imgmemberCard}
                      alt="image"
                      className="member-card__img"
                    />
                    <div className="member-card__content align-items-start">
                      <h5 className="membership-card__title mb-2 text--white">
                        Premium
                      </h5>
                      <h4 className="membership-card__price mt-2">$108.59</h4>
                      <ul className="list list--base">
                        <li className="text--white">20% Dsicount All Event</li>
                        <li className="text--white">Allow 2 adult person</li>
                      </ul>
                      <a href="#" className="btn btn--md btn--base mt-4">
                        Buy Ticket
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDetail;
