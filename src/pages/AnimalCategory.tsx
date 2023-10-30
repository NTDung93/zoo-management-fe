import { FC, useEffect, useState } from "react";
import EventSection from "../components/Animals/EventSection";
import Banner from "../components/Banner/Banner";
import agent from "../api/agent";
import ImageSilderBottom from "../components/Bottom/ImageSliderBottom";
import { SpeciesObj } from "../models/species";
import Category from "../components/Animals/Category";

const AnimalCategory: FC = () => {
  const [species, setSpecies] = useState<SpeciesObj[]>([]);

  useEffect(() => {
    agent.Species.list()
      .then((species) => setSpecies(species))
      .catch((error) => console.log(error));
  },[]);
  

  return (
    <>
      <Banner
        pageName={"Animals"}
        singleName={"Animals"}
        pictureUrl="https://res.cloudinary.com/dpysbryyk/image/upload/v1696091217/banner/nyqamtwvezpwoczywbwt.jpg"
      />
      <Category species={species}/>
      <EventSection />
      <ImageSilderBottom />
    </>
  );
};

export default AnimalCategory;
