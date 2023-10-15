import { AreaObj } from "./area";

export interface CageObj {
    cageId: string
    name: string
    maxCapacity: number
    areaId: string
    area: AreaObj;
}