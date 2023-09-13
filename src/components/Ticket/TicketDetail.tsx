import { FC } from "react";

interface TicketDetailProps {}

const TicketDetail: FC<TicketDetailProps> = ({}) => {
  return (
    <div className="col-lg-6">
      <div className="pe-xl-4">
        <div className="zoo-box">
          <h4 className="mt-0">Buy Your zoo ticket</h4>
          <p className="section__para">
            Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.
            Vestibulum volutpat pretium libero. Cras id dui.
          </p>
          <form action="#" className="row g-4">
            <div className="col-12">
              <label className="form-label fw-bold t-heading-font heading-clr">
                Ages 14 & Older
              </label>
              <div className="form--select">
                <select
                  className="form-select form--select"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <ul className="list list--base">
                <li>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <span className="d-block">Adult (13 & Over)</span>
                    <span className="d-block">$45</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <span className="d-inline-block">Senior (60 & over)</span>
                    <span className="d-inline-block">$35</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <span className="d-inline-block">Child (3 - 10)</span>
                    <span className="d-inline-block">$25</span>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <span className="d-inline-block">Child (2 & under)</span>
                    <span className="d-inline-block">$20</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <a
                href="#"
                className="btn btn--md btn--base text-uppercase sm-text w-100"
              >
                Buy Now
              </a>
              <span className="d-block sm-text mt-2 t-heading-font">
                <strong>Note:</strong> Donec interdum, metus et hendrerit
                aliquet, dolor diam sagittis ligula, eget egestas libero turpis
                vel mi. Nunc nulla. Fusce risus nisl viverra etempor eretium in
                sapien.
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;
