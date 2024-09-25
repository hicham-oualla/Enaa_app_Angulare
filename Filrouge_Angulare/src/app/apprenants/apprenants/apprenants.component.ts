import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprenantService } from 'src/app/Services/apprenant.service';
import {ApprenantDTO, Apprenants} from 'src/app/Services/Model/apprenants';

@Component({
  selector: 'app-apprenants',
  templateUrl: './apprenants.component.html',
  styleUrls: ['./apprenants.component.css']
})
export class ApprenantsComponent implements OnInit{

  id:number=0;
  classeApprenants: ApprenantDTO[]=[];

  constructor(private service: ApprenantService,
    private router: Router,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getClasseApprenants(this.id);
  }

  getClasseApprenants(id: number){
    this.service.findAllByClasseId(id).subscribe(
      data=>{
        console.log(data);
        this.classeApprenants=data;
      }
    )
  }
  toAddAprennat(){
    this.router.navigate(['addapprenants', this.id])
  }
  deleteApprenant(id: number):void {
    this.service.deleteApprenant(id).subscribe((data)=>{
      this.classeApprenants=this.classeApprenants.filter(c=>c.id!==id);
    })
  }

}
