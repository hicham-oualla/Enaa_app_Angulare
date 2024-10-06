import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApprenantService} from "../Services/apprenant.service";
import {RetardService} from "../Services/retard.service";
import {Retard} from "../Model/reatrd";

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit{

  id!:number;
  nom!:string;
  nbrRetard!:number;

  constructor(private route: ActivatedRoute,
              private service:ApprenantService,
              private servicer : RetardService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
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
  }

  toRetartd(id:number){
    this.router.navigate(['retard', id])
  }
  toAbsence(id:number){
    this.router.navigate(['absence', id])
  }

}
