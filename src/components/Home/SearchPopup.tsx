
function SearchPopup() {
  return (
    <>
      <div className="body-overlay" id="body-overlay"></div>
      <div className="search-popup" id="search-popup">
        <form action="#" className="search-form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search....." />
          </div>
          <button type="submit" className="submit-btn xl-text">
            <i className="las la-search"></i>
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchPopup;
