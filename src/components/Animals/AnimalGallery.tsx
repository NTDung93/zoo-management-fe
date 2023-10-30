
import { FC } from "react";
import { AnimalObj } from "../../models/animal";
import ImageSplitter from "../../utils/ImageSplitter";

interface AnimalProps {
  animals: AnimalObj[] | null;
}

const AnimalGallery: FC<AnimalProps> = ({ animals }) => {

  
  return (
    <div className="section--sm section--top">
      <div className="section__head">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-8 col-xl-6">
              <div className="text-center">
                <span className="section__particles">
                  <span className="section__subtitle section__subtitle-dash">
                    Animals
                  </span>
                </span>
                <h2 className="section__title mt-2">
                  Our Zoo <span>Animals</span>
                </h2>
                <p className="section__para mx-auto">
                  Phasellus consectetuer vestibulum elit. Ametusbibendum mattis
                  non. Vestibulum fringilla pede sit ameugue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          {animals?.map((animalData, index) => (
            <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
              <div className="animal-card">
              <ImageSplitter imageUrls={animalData.image.substring(1, animalData.image.length - 1).split(",")} nameClass={"animal-card__img"} />
                <div className="animal-card__body">
                  <h5 className="mt-0 mb-2 text-center">
                    <a
                      href={`animals/${animalData.animalId}`}
                      className="t-link t-link--base heading-clr d-inline-block"
                    >
                      {animalData.animalSpecies.speciesName}
                    </a>
                  </h5>
                  <span className="d-block sm-text text-center">
                    {animalData.region}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimalGallery;
