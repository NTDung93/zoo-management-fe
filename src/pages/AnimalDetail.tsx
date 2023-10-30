import { useEffect, useState } from "react";
import agent from "../api/agent";
import AnimalDetailSection from "../components/AnimalDetail/AnimalDetailSection";
import OtherAnimalsSection from "../components/AnimalDetail/OtherAnimalsSection";
import BackToTop from "../components/BackToTop/BackToTop";
import Banner from "../components/Banner/Banner";
import ImageSilderBottom from "../components/Bottom/ImageSliderBottom";
import { AnimalObj } from "../models/animal";
import { useParams } from "react-router-dom";

const AnimalDetail = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState<AnimalObj>();

  useEffect(() => {
    agent.Animals.details(id ?? "")
      .then((response) => {
        setAnimal(response);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <BackToTop />
      <Banner
        pageName={animal?.name ?? "Animal detail"}
        singleName={"Animal detail"}
        pictureUrl={animal?.image.replace(/\[|\]|'/g, "").split(",")[0] ?? ""}
      />
      <AnimalDetailSection animal={animal} />
      <OtherAnimalsSection currentAnimalID={animal?.animalId ?? ""} />
      <ImageSilderBottom />
    </>
  );
};

export default AnimalDetail;
