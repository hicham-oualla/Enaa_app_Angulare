import {Component, OnInit} from '@angular/core';
import {Absence} from "../Model/absence";
import {AbsenceService} from "../Services/absence.service";
import {ActivatedRoute} from "@angular/router";
import {ApprenantService} from "../Services/apprenant.service";
import {AuthService} from "../Services/auth.service";
import {JustificationAbsenceService} from "../justification-absence.service";

@Component({
  selector: 'app-abs-apprenants',
  templateUrl: './abs-apprenants.component.html',
  styleUrls: ['./abs-apprenants.component.css']
})
export class AbsApprenantsComponent implements  OnInit{

  selectedFile: File | null = null;
  id!: number | null;
  absences: Absence[] = [];
  nom!: string;
  userRole!: string | null;

  constructor(
    // private justAbsenceService: JustificationAbsenceService,  // Similar to Retard Justification Service
    private absenceService: AbsenceService,
    private route: ActivatedRoute,
    private apprenantService: ApprenantService,
    private authService: AuthService,
    private absjust : JustificationAbsenceService,
  ) {}

  ngOnInit(): void {
    this.userRole = localStorage.getItem("role");
    this.id = this.authService.getCurrentUserId();

    if (this.id) {
      this.getApprenantName();  // Fetch Apprenant name
      this.getAbsenceList();    // Fetch list of absences
    }
  }

  getAbsenceList() {
    this.absenceService.getAbsencesByApprenant(this.id).subscribe(
      data => {
        this.absences = data;
        console.log(data);
      },
      error => {
        console.error('Error fetching absences:', error);
      }
    );
  }

  getApprenantName() {
    this.apprenantService.getApprenantById(this.id).subscribe(
      data => {
        this.nom = data.nom;
      },
      error => {
        console.error('Error fetching apprenant name:', error);
      }
    );
  }

  onImportJustification(absenceId: number) {
    if (this.selectedFile) {
      this.absjust.uploadJustification(absenceId,this.selectedFile).subscribe(
        data => {
          console.log(data);
          // Refresh the list of absences after uploading justification
          this.getAbsenceList();
        },
        error => {
          console.error('Error uploading justification:', error);
        }
      );
    } else {
      console.error('No file selected');
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}

