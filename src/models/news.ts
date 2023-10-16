import { AnimalObj } from "./animal";
import { EmpObj } from "./employee";
import { SpeciesObj } from "./species";

export interface NewsObj {
    newsId: number;
    title: string;
    content: string;
    writingDate?: Date;
    image: string;
    employeeId: string;
    speciesId: number;
    animalId: string;
    animalSpecies: SpeciesObj;
    animal: AnimalObj;
    employee: EmpObj;
}
