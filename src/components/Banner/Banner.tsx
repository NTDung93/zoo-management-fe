import React from 'react'

interface Props {
  pageName: string,
  singleName: string,
}

const Banner = ({pageName, singleName} : Props) => (
  <div className="banner" style={{ backgroundImage: 'url(assets/images/banner-img-3.png)' }}>
    <div className="banner__content">
      <div className="container">
        <div className="row g-3 justify-content-center">
          <div className="col-lg-10 text-center">
            <h2 className="mt-0 text--white">{pageName}</h2>
            {/* Breadcrumbs  */}
            <ul className="list list--row breadcrumbs justify-content-center">
              <li className="list--row__item breadcrumbs__item">
                <a href="index.html" className="t-link breadcrumbs__link text--white">
                  Home
                </a>
              </li>
              <li className="list--row__item breadcrumbs__item">
                <a href="contact.html" className="t-link breadcrumbs__link text--white" style={{marginLeft: '10px'}}>
                  {singleName}
                </a>
              </li>
            </ul>
            {/* Breadcrumbs End */}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Banner