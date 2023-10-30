import { FC } from "react";
import { AnimalObj } from "../../models/animal";
import {  StarRounded } from "@mui/icons-material";

interface AnimalProps {
  animal: AnimalObj | undefined;
}

const AnimalDetailSection: FC<AnimalProps> = ({ animal }) => {
  // console.log(animal?.image.split(",")[0].trim().substring(1));
  var listImage = animal?.image?.replace(/\[|\]|'/g, "").split(",") ?? [];

  console.log(listImage);
  return (
    <>
      <div className="section--sm section--top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="animal-details-slider">
                <div className="animal-details-slider__item">
                  <img
                    src={listImage[1] ?? listImage[0]}
                    alt="image"
                    className="animal-details-slider__img"
                  />
                </div>
                <div className="animal-details-slider__item">
                  <img
                    src={listImage[2] ?? listImage[0]}
                    alt="image"
                    className="animal-details-slider__img"
                  />
                </div>
                <div className="animal-details-slider__item">
                  <img
                    src={listImage[3] ?? listImage[0]}
                    alt="image"
                    className="animal-details-slider__img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-7 col-lg-8">
            <h3 style={
              {color:"#86c305"}
            } className="mt-0">{animal?.name}</h3>
            <h4><StarRounded/> Social Behavior</h4>
            <p style={{fontSize:"19px"}}>
              {animal?.behavior}
            </p>
           
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="ps-xxl-5">
              <ul className="list">
                <li>
                  <div className="member-card">
                    <img
                      src={animal?.image.replace(/\[|\]|'/g, "").split(",")[0]}
                      alt="image"
                      className="member-card__img"
                    />
                    {/* <div className="member-card__content align-items-start">
                      <h5 className="membership-card__title mb-2 text--white">
                        Premium
                      </h5>
                      <h4 className="membership-card__price mt-2">$108.59</h4>
                      <ul className="list list--base">
                        <li className="text--white">20% Discount All Event</li>
                        <li className="text--white">Allow 2 adult person</li>
                      </ul>
                      <a href="#" className="btn btn--md btn--base mt-4">
                        Buy Ticket
                      </a>
                    </div> */}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimalDetailSection;
