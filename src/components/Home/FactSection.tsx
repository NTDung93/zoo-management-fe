
const FactSection = () => {
  return (
	<div className="fact-section-container">
      <div className="section fact-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3 col-xl-3">
              <div className="counter-card">
                <div className="counter-card__head justify-content-center text-center">
                  <h1 className="m-0">
                    <span
                      className="counter-card__title odometer"
                      data-odometer-final="100"
                    >
                      0
                    </span>
                  </h1>
                </div>
                <div className="counter-card__body">
                  <h5 className="m-0 text-center text--white">
                    Total type of animal
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xl-3">
              <div className="counter-card">
                <div className="counter-card__head justify-content-center text-center">
                  <h1 className="d-flex align-items-center gap-2 m-0">
                    <span
                      className="counter-card__title odometer"
                      data-odometer-final="2"
                    >
                      0
                    </span>
                    <span className="counter-card__title">m</span>
                  </h1>
                </div>
                <div className="counter-card__body">
                  <h5 className="m-0 text-center text--white">Daily Visitors</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xl-3">
              <div className="counter-card">
                <div className="counter-card__head justify-content-center text-center">
                  <h1 className="d-flex align-items-center gap-2 m-0">
                    <span
                      className="counter-card__title odometer"
                      data-odometer-final="1.5"
                    >
                      0
                    </span>
                    <span className="counter-card__title">k</span>
                  </h1>
                </div>
                <div className="counter-card__body">
                  <h5 className="m-0 text-center text--white">Team Member</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xl-3">
              <div className="counter-card">
                <div className="counter-card__head justify-content-center text-center">
                  <h1 className="d-flex align-items-center gap-2 m-0">
                    <span
                      className="counter-card__title odometer"
                      data-odometer-final="35"
                    >
                      0
                    </span>
                    <span className="counter-card__title">k</span>
                  </h1>
                </div>
                <div className="counter-card__body">
                  <h5 className="m-0 text-center text--white">Save Wild Life</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FactSection