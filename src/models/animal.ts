import { CageObj } from "./cage";
import { EmpObj } from "./employee";
import { SpeciesObj } from "./species";

export interface AnimalObj {
    animalId: string
    name: string
    region: string
    behavior: string
    gender: string
    birthDate: string
    importDate: string
    image: string
    healthStatus: number
    rarity: string
    isDeleted: number
    employeeId: string
    cageId: string
    speciesId: number
    employee: EmpObj
    animalSpecies: SpeciesObj
    cage: CageObj
}