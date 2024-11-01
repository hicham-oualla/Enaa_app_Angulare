import {JustificationRetard} from "../../justification-retard";

export class Retard {
  id!: number; // Unique identifier for the retard
  date!: Date; // Date of the tardiness
  durationDeRetard!: number; // Duration of the tardiness (in minutes, for example)
  etat_retard!: 'JUSITIFIER' | 'NONJUSITIFIER'; // Remove the leading space here
  justificationRetard?: JustificationRetard[]; // Optional list of justifications for tardiness
  apprenant!: {
    id: number
  }
}



export class RetardUpdate {
  id!: number
  date!: Date
  durationDeRetard!: number
  etat_retard!: string
}


