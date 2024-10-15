import { Component, OnInit } from '@angular/core';
import { AbsenceService } from "../../Services/absence.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Absence } from "../../Model/absence";
import { ApprenantService } from "../../Services/apprenant.service";
import { JustificationAbsenceService } from "../../justification-absence.service"; // Import the Justification service

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit {
  id!: number;
  absences: Absence[] = [];
  nom!: string;
  add:boolean = false;

  constructor(
    private service: AbsenceService,
    private route: ActivatedRoute,
    private router: Router,
    private appservice: ApprenantService,
    private justificationService: JustificationAbsenceService // Inject the justification service
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAbsenceList();

    this.appservice.getApprenantById(this.id).subscribe(
      data => {
        this.nom = data.nom;
      });
  }

  onAddAbsence() {
  this.add=true;
  }

  onDeleteAbsence(id: number) {
    if (confirm('Wach bghiti t7iyyed had l\'absence?')) {
      this.service.deleteAbsence(id).subscribe(
        () => {
          console.log('Absence t7iyydat');
          this.getAbsenceList(); // Refresh the list after deletion
        },
        error => {
          console.error('Error f deletion dial absence:', error);
        }
      );
    }
  }

  getAbsenceList() {
    this.service.getAbsencesByApprenant(this.id).subscribe(
      data => {
        this.absences = data;
        console.log(data);
      },
      error => {
        console.error('Error fash kanjib absences:', error);
      }
    );
  }


  // Method to download justification by absenceId
  downloadJustificationPdf(absenceId: number) {
    this.justificationService.getJustificationPdf(absenceId).subscribe(
      (response: Blob) => {
        // Create a temporary URL for the Blob and trigger download
        const url = window.URL.createObjectURL(response);
        const a = document.createElement('a');
        a.href = url;
        a.download = `justification_absence_${absenceId}.pdf`; // Use absenceId for file name
        a.click(); // Trigger the download
        window.URL.revokeObjectURL(url); // Cleanup the URL object after the download
      },
      error => {
        console.error('Error fetching justification:', error);
      }
    );
  }
}
