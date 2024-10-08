import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApprenantService} from "../Services/apprenant.service";
import {RetardService} from "../Services/retard.service";
import {AbsenceService} from "../Services/absence.service";
import {AuthService} from "../Services/auth.service";

@Component({
  selector: 'app-espace-apprenants',
  templateUrl: './espace-apprenants.component.html',
  styleUrls: ['./espace-apprenants.component.css']
})
export class EspaceApprenantsComponent {


  userRole!: string | null;

  id!:number | null;
  nom!:string;
  nbrRetard!:number;
  nbrAbsence!:number;

  constructor(private authServive:AuthService,
              private service:ApprenantService,
              private servicer : RetardService,
              private authService: AuthService,
              private absenceService : AbsenceService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.userRole = localStorage.getItem("role");
    this.id = this.authServive.getCurrentUserId();
    this.service.getApprenantById(this.id).subscribe(
      data=>{
        this.nom = data.nom;
      }

    )

    this.servicer.countRetardsByApprenant(this.id).subscribe(
      data=>{
        this.nbrRetard = data
      }

    )
    this.absenceService.countAbsencesByApprenant(this.id).subscribe(
      data=>{
        this.nbrAbsence = data
      }
    )
  }

  toRetartd(id:number|null){
    this.router.navigate(['retard', id])
  }
  toAbsence(id:number|null){
    this.router.navigate(['absence', id])
  }


}
