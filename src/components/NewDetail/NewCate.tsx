import { FC } from "react";

interface NewCateProps {
  img: string;
  title: string;
  date: string;
  author: string;
}

const NewCate: FC<NewCateProps> = ({ img, title, date, author }) => {
  return (
    <li>
      <div className="list list--row">
        <div className="user user--md">
          <img src={img} alt="image" className="user__img" />
        </div>
        <div className="list flex-grow-1">
          <h6 className="m-0">
            <a
              href="blog-details.html"
              className="t-link heading-clr t-link--base"
            >
              {title}
            </a>
          </h6>
          <ul className="list list--row">
            <li>
              <a href="#" className="t-link t-link--base text-clr sm-text">
                {date}
              </a>
            </li>
            <li>
              <a href="#" className="t-link t-link--base text-clr sm-text">
                {author}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default NewCate;
