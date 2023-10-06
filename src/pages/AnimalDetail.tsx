import { useEffect, useState } from "react";
import AnimalDetailSection from "../components/AnimalDetail/AnimalDetailSection";
import OtherAnimalsSection from "../components/AnimalDetail/OtherAnimalsSection";
import BackToTop from "../components/BackToTop/BackToTop";
import Banner from "../components/Banner/Banner";
import ImageSilderBottom from "../components/Bottom/ImageSliderBottom";
import { AnimalObj } from "../models/animal";
import { useLocation } from "react-router-dom";
import agent from "../api/agent";

const AnimalDetail = () => {
  const [animal, setAnimal] = useState<AnimalObj | null>(null);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const animalId = queryParams.get("id");

  useEffect(() => {
    animalId && agent.Animals.details(Number(animalId))
      .then(animal => setAnimal(animal))
      .catch(err => console.log(err))
  }, [animalId]);


  return (
    <>
      <BackToTop />
      <Banner
        pageName={animal?.name ?? ''}
        singleName={"Animal detail"}
        pictureUrl={animal?.image?.substring(1, animal?.image?.length - 1).split(", ")[0] ?? ''}
      />
      <AnimalDetailSection animal={animal} />
      <OtherAnimalsSection />
      <ImageSilderBottom />
    </>
  );
};

export default AnimalDetail;
