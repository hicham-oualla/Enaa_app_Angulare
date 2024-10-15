// update-retard.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Retard} from "../Model/retard/reatrd";
import {RetardService} from "../Services/retard.service";



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
    this.retardService.getRetardById(this.id).subscribe(
      data => {
        this.retard = data;
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.retardService.updateRetard(this.id, this.retard).subscribe(
      data => {
        console.log(data);
        this.goToRetardList();
      },
      error => console.log(error)
    );
  }

  goToRetardList() {
    this.router.navigate(['/retards']);
  }
}
