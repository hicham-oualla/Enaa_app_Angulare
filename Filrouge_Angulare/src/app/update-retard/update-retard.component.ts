import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RetardService } from "../Services/retard.service";
import {Retard, RetardUpdate} from "../Model/retard/reatrd";

@Component({
  selector: 'app-update-retard',
  templateUrl: './update-retard.component.html',
  styleUrls: ['./update-retard.component.css']
})
export class UpdateRetardComponent implements OnInit {
  id!: number;
  retard: Retard = new Retard();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private retardService: RetardService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("The ID is", this.id);
    this.retardService.getRetardById(this.id).subscribe(
      data => {
        this.retard = data;
        console.log("Loaded retard data:", this.retard);
      },
      error => console.error("Error loading retard:", error)
    );
  }

  onSubmit() {
    console.log("Updating retard with ID:", this.id, "Data:", this.retard);
    this.retardService.updateRetard(this.id, this.retard).subscribe(
      data => {
        console.log("Updated retard:", data);
        this.goToRetardList(this.retard.apprenant.id);
      },
      error => {
        console.error("Error updating retard:", error);
        alert('An error occurred while updating the retard. Please try again.');
      }
    );
  }

  goToRetardList(id:number) {
    this.router.navigate(['/retard/'+ id]);
  }
}
