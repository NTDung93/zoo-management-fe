import { NewsObj } from "../../models/news";
import "./New.css";
interface Props {
  news: NewsObj;
}

const New = ({ news }: Props) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="blog-post">
        <img src={news.image} alt="image" className="blog-post__img" />
        <div className="blog-post__overlay">
          <div className="blog-post__date">
            <div className="blog-post__date-content">
              <h5 className="mt-0 mb-1 text-center text--white">
                {" "}
                {news.writingDate
                  ? new Date(news.writingDate).toLocaleString("default", {
                      month: "short",
                    })
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
            <ul className="list list--row breadcrumbs">
              <li className="breadcrumbs__item" id="firstchild">
                <a href="#" className="t-link text--white t-link--base">
                  {news.animalSpecies.speciesName}
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
