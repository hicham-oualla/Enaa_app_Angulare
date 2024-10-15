class JustificationRetard {
}

export class Retard {
  id!: number; // Unique identifier for the retard
  date!: Date; // Date of the tardiness
  durationDeRetard!: number; // Duration of the tardiness (in minutes, for example)
  etat_retard!: 'JUSTIFIE' | 'NON_JUSTIFIE'; // Enum representation of tardiness state
  apprenantId!: number; // ID of the associated student (apprenant)
  justificationRetard?: JustificationRetard[]; // Optional list of justifications for tardiness
}
