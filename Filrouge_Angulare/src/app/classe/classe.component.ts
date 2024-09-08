import { Component, OnInit } from '@angular/core';
import { Classe } from '../Services/Model/classe';
import { ClasseService } from '../Services/classes.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})

export class ClasseComponent implements OnInit{

  class : Classe []=[];
  constructor(private serClasse : ClasseService){

  }
  ngOnInit(): void {

    this.getclasses();

    
  }
private getclasses(){
  this.serClasse.getAllClasses().subscribe(clas=>{
    this.class=clas
  })
  console.log(this.class)
}
  

}
