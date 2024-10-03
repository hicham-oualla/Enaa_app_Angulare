import { Component, OnInit } from '@angular/core';
import { RetardService } from "../Services/retard.service";
import { ActivatedRoute } from "@angular/router";
import { Retard } from "../Model/reatrd"; // Make sure the path is correct

@Component({
  selector: 'app-retard',
  templateUrl: './retard.component.html',
  styleUrls: ['./retard.component.css']
})
export class RetardComponent implements OnInit {
  id!: number;
  retards: Retard[] = []; // Property to hold the tardiness records

  constructor(private service: RetardService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getRetardList();
  }
  onEditRetard(id: number) {
    // Logic to navigate to edit tardiness form or open modal
  }
  onAddRetard() {
    // Logic to open a modal or navigate to an add tardiness form
  }

  onDeleteRetard(id: number) {
    // Logic to confirm deletion and call the service to delete
  }
  getRetardList() {
    this.service.getRetardsByApprenant(this.id).subscribe(
      data => {
        this.retards = data; // Assign fetched data to the retards property
        console.log(data);
      },
      error => {
        console.error('Error fetching retards:', error);
      }
    );
  }
}
