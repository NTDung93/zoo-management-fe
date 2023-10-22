import { useEffect, useState } from "react";
import BackToTop from "../components/BackToTop/BackToTop";
import Banner from "../components/Banner/Banner";
import NewsList from "../components/News/NewsList";
import Pagination from "../components/News/Pagination";
import { NewsObj } from "../models/news";
import agent from "../api/agent";

export default function PageNews() {
  const [listNews, setListNews] = useState<NewsObj[]>([]);

  useEffect(() => {
    agent.News.list()
      .then((response) => {
        setListNews(response);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <BackToTop />
      <Banner
        pageName={"News"}
        singleName={"News"}
        pictureUrl="https://res.cloudinary.com/dpysbryyk/image/upload/v1696091224/banner/ietmrxj8bkpg9gpgjpcc.jpg"
      />

      <div className="section">
        <div className="section__head">
          <div className="container">
            <div className="row g-4">
              <NewsList listnews={listNews} />
            </div>
            
          </div>
        </div>
        <Pagination />
      </div>
    </>
  );
}
