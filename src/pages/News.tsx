import Banner from "../components/Banner/Banner";
import New from "../components/News/New";
import Pagination from "../components/News/Pagination";

export default function News() {
  return (
    <>
      <Banner pageName={'News'} singleName={'News'} />

      <div className="section">
        <div className="section__head">
          <div className="container">
            <div className="row g-4">
              <New />
              <New />
              <New />
              <New />
              <New />
              <New />
              <New />
              <New />
              <New />
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </>
  );
}
