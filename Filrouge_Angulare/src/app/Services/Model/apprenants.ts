export interface Apprenants {
    id: number;                // Optional, since some fields may be undefined initially
    nom: string;
    email: string;
    password: string;
    role: string;              // You may need to define an enum for Role if applicable
    classeId: number;
    address: string;
    phone: string;
    idNational: string;

}


export interface ApprenantDTO {
  id: number;
  nom: string;
  email: string;
  password: string;
  role: string;
  classeId: number;
  address: string;
  phone: string;
  idNational: string;
}
