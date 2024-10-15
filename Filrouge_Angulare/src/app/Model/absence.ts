import {Justification} from "../justification-absence";

export interface Absence {
  id: number;
  datedebut: Date; // Start date of the absence
  datedefin: Date; // End date of the absence
  duration: number; // Duration of the absence
  apprenantId: number; // ID of the associated student
  etat_absence: 'JUSTIFIE' | 'NON_JUSTIFIE';
  justification?: Justification[];// Enum representation of absence state
}
