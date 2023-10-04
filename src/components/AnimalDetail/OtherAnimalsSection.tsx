import { FC, useEffect, useState } from "react";
import { AnimalObj } from "../../models/animal";
import agent from "../../api/agent";

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
            ?.filter((animalData) => animalData.id.trim() !== currentAnimalID.trim()) // Lọc ra các con không có currentAnimalID
			.slice(0, 4)
			.map((animalData, index) => (
              <div className="col-md-4 col-lg-3" key={index}>
                <div className="animal-card">
                  <img
                    src={animalData.image.split(",")[0].trim().substring(1)}
                    alt="image"
                    className="animal-card__img"
                  />
                  <div className="animal-card__body">
                    <h5 className="mt-0 mb-2 text-center">
                      <a
                        href={`/animals/${animalData.id}`}
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
