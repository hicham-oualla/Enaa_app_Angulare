import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprenantService } from 'src/app/Services/apprenant.service';
import { ApprenantDTO } from 'src/app/Model/apprenants/apprenants';
import {ClasseService} from "../../Services/classes.service";

@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.component.html',
  styleUrls: ['./apprenants.component.css']
})
export class ApprenantsComponent implements OnInit {

  id: number = 0;
  classeApprenants: ApprenantDTO[] = [];
  filteredApprenants: ApprenantDTO[] = [];
  searchTerm: string = '';
  classename!:string;


  constructor(private service: ApprenantService,
              private router: Router,
              private route: ActivatedRoute,
              private classSerivice: ClasseService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getClasseApprenants(this.id);

    this.classSerivice.getClasseById(this.id).subscribe(
      data=> {
        this.classename = data.nom;
      })

  }

  getClasseApprenants(id: number): void {
    this.service.findAllByClasseId(id).subscribe(
      data => {
        this.classeApprenants = data;
        this.filteredApprenants = data; // Initially, filtered list is the same as full list
      }
    );
  }

  searchApprenant(): void {
    const lowerCaseTerm = this.searchTerm.toLowerCase();
    this.filteredApprenants = this.classeApprenants.filter(apprenant =>
      (apprenant.nom && apprenant.nom.toLowerCase().includes(lowerCaseTerm)) ||
      (apprenant.idNational && apprenant.idNational.toLowerCase().includes(lowerCaseTerm))
    );
  }


  toAddApprenant(): void {
    this.router.navigate(['addapprenants', this.id]);
  }

  deleteApprenant(id: number): void {
    this.service.deleteApprenant(id).subscribe(() => {
      this.filteredApprenants = this.filteredApprenants.filter(c => c.id !== id);
    });
  }

  editApprenant(id: number): void {
    this.router.navigate(['/editApprenant', id]);
  }
}
