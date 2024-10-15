// src/app/models/justification.model.ts

export interface Justification {
  id: number;              // Unique identifier for the justification
  date: string;           // Date in string format (ISO 8601)
  name: string;           // Name of the justification
  type: string;           // Type of the justification (e.g., 'application/pdf')
  pdfData: Blob;          // Binary data for the PDF file
  absenceId: number;      // ID of the associated absence
}
