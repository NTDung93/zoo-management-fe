const SearchPopup = () => {
  return (
    <div>
        <div className="body-overlay" id="body-overlay" />
        <div className="search-popup" id="search-popup">
          <form action="#" className="search-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search....." />
            </div>
            <button type="submit" className="submit-btn xl-text">
              <i className="las la-search" />
            </button>
          </form>
        </div>
    </div>
  )
}

export default SearchPopup