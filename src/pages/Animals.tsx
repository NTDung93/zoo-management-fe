import { FC, useEffect, useState } from "react";
import AnimalGallery from "../components/Animals/AnimalGallery";
import EventSection from "../components/Animals/EventSection";
import Banner from "../components/Banner/Banner";
import { AnimalObj } from "../models/animal";
import agent from "../api/agent";
import ImageSilderBottom from "../components/Bottom/ImageSliderBottom";

const Animals: FC = () => {
  const [animals, setAnimals] = useState<AnimalObj[]>([]);
  useEffect(() => {
    agent.Animals.list()
      .then((animals) => setAnimals(animals))
      .catch((error) => console.log(error));
  });

  return (
    <>
      <Banner
        pageName={"Animals"}
        singleName={"Animals"}
        pictureUrl="https://res.cloudinary.com/dpysbryyk/image/upload/v1696091217/banner/nyqamtwvezpwoczywbwt.jpg"
      />
      <AnimalGallery animals={animals} />
      <EventSection />
      <ImageSilderBottom />
    </>
  );
};

export default Animals;
