import { FC } from "react";
import { AnimalObj } from "../../models/animal";

interface AnimalProps {
  animal: AnimalObj | undefined;
}

const AnimalDetailSection: FC<AnimalProps> = ({ animal }) => {
  // console.log(animal?.image.split(",")[0].trim().substring(1));
  const listImage = animal?.image.split(",").map(item => item.replace(/\[|\]/g, "").trim())  ?? [];
  return (
    <>
      <div className="section--sm section--top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="animal-details-slider">
                <div className="animal-details-slider__item">
                  <img
                    src={listImage[0]}
                    alt="image"
                    className="animal-details-slider__img"
                  />
                </div>
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
            <h4 className="mt-0">{animal?.name}</h4>
            <p>
              Suspendisse pulvinar augue ac venenatis condimentum sem libero
              volutpat nibh nec pellentesque velide quis nunc. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; Fusce id purus. Ut variuncidunt libero. Phasellus dolor.
              Maecenas vestibulum mollis diam. Pellentesque ut neque.
              Pellentesque habitant morbi tristique senectus et netus malesuada
              fames ac turpis egestas.
            </p>
            <h4>Fascinating Facts</h4>
        
            <div className="row g-4">
              <div >
                <ul className="list list--base">
                  <li>    Flamingos get their beautiful pink colour from the small animals
                that they eat. </li>
                  <li>In the Zoo we feed a specially prepared diet that
                keeps them pink.</li>
                <li>Flamingos often stand on one leg. One reason is
                that it keeps the folded leg warm.</li>
                </ul>
              </div>
            
            </div>
            <h4>Physical Characteristics</h4>
            <p>
              fames ac turpis egestas. Ut non enim eleifend felis pretium
              feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna. In hac
              habitasse platea dictumst. Curabitur at lacus ac velit ornare
              lobortis. Curabitur a felis in nunc fringilla tristique. Morbi
              mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam
              vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget,
              semper nec, quam. Sed hendrerit. Morbi ac felis.
            </p>
            <h4>Habitat/Diet</h4>
            <p>
              Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
              consequat, leo eget bibendum sodales, augue velit cursus nunc,
              quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
              Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
              metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis
              hendrerit fringilla.
            </p>
            <h4>Social Behavior</h4>
            <p>
              {animal?.behavior}
            </p>
           
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="ps-xxl-5">
              <ul className="list">
                <li>
                  <div className="member-card">
                    <img
                      src={listImage[1] ?? listImage[0]}
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
