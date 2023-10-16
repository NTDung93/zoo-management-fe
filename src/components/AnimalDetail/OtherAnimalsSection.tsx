import { FC, useEffect, useState } from "react";
import { AnimalObj } from "../../models/animal";
import agent from "../../api/agent";
import ImageSplitter from "../../utils/ImageSplitter";

interface AnimalProps {
  currentAnimalID: string;
}
const OtherAnimalsSection: FC<AnimalProps> = ({ currentAnimalID }) => {
  const [animals, setAnimals] = useState<AnimalObj[]>([]);
  useEffect(() => {
    agent.Animals.list()
      .then((animals) => setAnimals(animals))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="section--sm">
      <div className="container">
        <div className="row g-4">
          <div className="col-12">
            <h4 className="m-0">Other Animals</h4>
          </div>
          {animals
            ?.filter(
              (animalData) =>
                animalData.animalId.trim() !== currentAnimalID.trim()
            ) // Lọc ra các con không có currentAnimalID
            .slice(0, 4)
            .map((animalData, index) => (
              <div className="col-md-4 col-lg-3" key={index}>
                <div className="animal-card">
                <ImageSplitter imageUrls={animalData.image.substring(1, animalData.image.length - 1).split(", ")} nameClass={"animal-card__img"} />
                  <div className="animal-card__body">
                    <h5 className="mt-0 mb-2 text-center">
                      <a
                        href={`/animals/${animalData.animalId}`}
                        className="t-link t-link--base heading-clr d-inline-block"
                      >
                        {animalData.name}
                      </a>
                    </h5>
                    <span className="d-block sm-text text-center">
                      {animalData.region}{" "}
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

export default OtherAnimalsSection;
