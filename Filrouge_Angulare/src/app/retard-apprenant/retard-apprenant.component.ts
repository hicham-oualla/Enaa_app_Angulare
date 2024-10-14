import { Component, OnInit } from '@angular/core';

import { RetardService } from "../Services/retard.service";
import { ActivatedRoute } from "@angular/router";
import { ApprenantService } from "../Services/apprenant.service";
import { AuthService } from "../Services/auth.service";
import {Retard} from "../Model/retard/reatrd";
import {JustificationRetardService} from "../justification-retard.service";

@Component({
  selector: 'app-retard-apprenant',
  templateUrl: './retard-apprenant.component.html',
  styleUrls: ['./retard-apprenant.component.css']
})
export class RetardApprenantComponent implements OnInit {
  selectedFile: File | null = null;
  id!: number | null;
  retards: Retard[] = [];
  nom!: string;
  userRole!: string | null;

  constructor(
    private justRetart:JustificationRetardService,
    private service: RetardService,
    private route: ActivatedRoute,
    private appservice: ApprenantService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userRole = localStorage.getItem("role");
    this.id = this.authService.getCurrentUserId();

    if (this.id) {
      this.getApprenantName();  // Fetch Apprenant name
      this.getRetardList();     // Fetch list of retards
    }
  }

  getRetardList() {
    this.service.getRetardsByApprenant(this.id).subscribe(
      data => {
        this.retards = data;
        console.log(data);
      },
      error => {
        console.error('Error fetching retards:', error);
      }
    );
  }

  getApprenantName() {
    this.appservice.getApprenantById(this.id).subscribe(
      data => {
        this.nom = data.nom;
      },
      error => {
        console.error('Error fetching apprenant name:', error);
      }
    );
  }

  onImportJustification(retardId: number) {
    if (this.selectedFile) {
      this.justRetart.uploadJustificationRetard(retardId, this.selectedFile).subscribe(
        data => {
          console.log(data);
          // Hna zid chi code bach trefresh l-liste dyal retards
          this.getRetardList();
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
