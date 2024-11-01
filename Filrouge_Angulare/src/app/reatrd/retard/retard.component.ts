import { Component, OnInit } from '@angular/core';
import { RetardService } from "../../Services/retard.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Retard } from "../../Model/retard/reatrd";
import { ApprenantService } from "../../Services/apprenant.service";
import {JustificationRetardService} from "../../justification-retard.service";


@Component({
  selector: 'app-retard',
  templateUrl: './retard.component.html',
  styleUrls: ['./retard.component.css']
})
export class RetardComponent implements OnInit {
  id!: number;
  retards: Retard[] = [];
  nom!: string;
  add: boolean = false;

  constructor(
    private service: RetardService,
    private route: ActivatedRoute,
    private router: Router,
    private appservice: ApprenantService,
    private justificationService: JustificationRetardService // Inject the service
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getRetardList();

    this.appservice.getApprenantById(this.id).subscribe(
      data => {
        this.nom = data.nom;
      }
    );
  }

  getRetardList() {
    this.service.getRetardsByApprenant(this.id).subscribe(
      data => {
        this.retards = data;
      },
      error => {
        console.error('Error fetching retards:', error);
      }
    );
  }

  onDeleteRetard(id: number) {
    const confirmDelete = confirm('Are you sure you want to delete this tardiness record?');

    if (confirmDelete) {
      this.service.deleteRetard(id).subscribe(
        () => {
          this.retards = this.retards.filter(retard => retard.id !== id);
        },
        error => {
          console.error('Error deleting retard:', error);
        }
      );
    }
  }

  // Method to download justification by retardId
  downloadJustificationPdf(retardId: number) {
    this.justificationService.getJustificationRetardPdf(retardId).subscribe(
      (response: Blob) => {
        // Create a temporary URL for the Blob and trigger download
        const url = window.URL.createObjectURL(response);
        const a = document.createElement('a');
        a.href = url;
        a.download = `justification_retard_${retardId}.pdf`;
        a.click(); // Trigger the download
        window.URL.revokeObjectURL(url); // Cleanup the URL object after the download
      },
      error => {
        console.error('Error fetching justification:', error);
      }
    );
  }

  onEditRetard(id: number) {
   this.router.navigate(["/updateRetard",id])
  }

  onAddRetard() {

    this.add = true;


  }
}
