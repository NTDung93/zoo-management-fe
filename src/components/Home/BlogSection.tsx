import { NewsObj } from "../../models/news";

interface Props {
  listnews: NewsObj[];
}

function BlogSection({ listnews }: Props) {
  return (
    <div className="section--sm">
      <div className="section__head">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-8 col-xl-6">
              <div className="text-center">
                <span className="section__particles">
                  <span className="section__subtitle section__subtitle-dash">
                    Blog Post
                  </span>
                </span>
                <h2 className="section__title mt-2">
                  Latest <span>News & Tips</span>
                </h2>
                <p className="section__para mx-auto">
                  Stay informed with our latest news and expert tips. Explore our
                  articles and stay connected with the world of nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {listnews.slice(0, 3).map((news) => (
            <div className="col-md-6 col-lg-4" key={news.newsId}>
              <div className="blog-post">
                <img src={news.image} alt="image" className="blog-post__img" />
                <div className="blog-post__overlay">
                  <div className="blog-post__date">
                    <div className="blog-post__date-content">
                      <h5 className="mt-0 mb-1 text-center text--white">
                        {" "}
                        {news.writingDate
                          ? new Date(news.writingDate).toLocaleString(
                              "default",
                              {
                                month: "short",
                              }
                            )
                          : "Date Not Available"}
                      </h5>
                      <h6 className="m-0 text-center text--white">
                        {" "}
                        {news.writingDate
                          ? new Date(news.writingDate).getDate()
                          : "Date Not Available"}
                      </h6>
                    </div>
                  </div>
                  <div className="blog-post__content">
                    <h4 className="blog-post__title">
                      <a
                        href={`/news-detail?id=${news.newsId}`}
                        className="t-link blog-post__title-link"
                      >
                        {news.title}
                      </a>
                    </h4>
                    <ul
                      className="list list--row breadcrumbs"
                      style={{ gap: "2rem" }}
                    >
                      <li className="breadcrumbs__item">
                        <a href="#" className="t-link text--white t-link--base">
                          {news.animalSpecies.speciesName}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
