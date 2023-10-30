import { FC, useEffect, useState } from "react";
import { SpeciesObj } from "../../models/species";
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import React from "react";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { AnimalObj } from "../../models/animal";
import agent from "../../api/agent";

interface SpeciesProps {
  species: SpeciesObj[] | null;
}
// eslint-disable-next-line react-hooks/rules-of-hooks

const Category: FC<SpeciesProps> = ({ species }) => {
  const [open, setOpen] = React.useState(true);
  const [animals, setAnimals] = useState<AnimalObj[]>([]);
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<number | null>(
    null
  );

  const handleClick = (speciesId: number) => {
    setSelectedSpeciesId((prevSelectedSpeciesId) =>
      prevSelectedSpeciesId === speciesId ? null : speciesId
    );
    setOpen(open!);
  };

  useEffect(() => {
    agent.Animals.list()
      .then((animals) => setAnimals(animals))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="section__head mt-5">
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
                  Our Zoo <span>Animals Species</span>
                </h2>
                <p className="section__para mx-auto">
                  Explore the incredible diversity of animal species in our zoo.
                  From majestic big cats to playful primates and exotic birds,
                  our zoo is home to a wide range of fascinating creatures from
                  around the world. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row g-3">
          {species?.map((species) => (
            <div className="col-md-6 col-lg-4 col-xl-3">
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                  ></ListSubheader>
                }
              >
                {/* <div className="text-center mb-2">
            <span className="section__particles ">
                  <span className="section__subtitle section__subtitle-dash" >

                    Carnivore
                  </span>
                </span>
            </div> */}

                <ListItemButton
                  onClick={() => handleClick(species.speciesId)}
                  key={species.speciesId}
                >
                  <ListItemText
                    primary={
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#86c305" }}
                      >
                        {species.speciesName}
                      </Typography>
                    }
                  />
                  {selectedSpeciesId === species.speciesId ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItemButton>

                {animals
                  ?.filter((animals) => species.speciesId === animals.speciesId)
                  .map((animals) => (
                    <Collapse
                      in={selectedSpeciesId === species.speciesId}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <a
                                href={`animals/${animals.animalId}`}
                                className="t-link t-link--base heading-clr d-inline-block"
                              >
                                <Typography
                                  variant="body1"
                                  sx={{ color: "#757575" }}
                                >
                                  {animals.name}
                                </Typography>
                              </a>
                            }
                            key={animals.animalId}
                          />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  ))}
              </List>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
