import {Component, OnInit} from '@angular/core';
import {RetardService} from "../Services/retard.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Retard} from "../Model/reatrd";

@Component({
  selector: 'app-retard-form',
  templateUrl: './retard-form.component.html',
  styleUrls: ['./retard-form.component.css']
})
export class RetardFormComponent implements OnInit{

  id!:number;
  retard: Retard = new Retard();

  constructor(private service:RetardService,
              private router:Router,
              private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
  }

  onSubmit(){
    this.service.saveRetard(this.retard, this.id).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(["retard", this.id])
      }
    )
  }


}
