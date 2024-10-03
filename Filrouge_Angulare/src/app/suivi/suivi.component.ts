import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit{

  id!:number;

  constructor(private route: ActivatedRoute,
              private router:Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  toRetartd(id:number){
    this.router.navigate(['retard', id])
  }

}
