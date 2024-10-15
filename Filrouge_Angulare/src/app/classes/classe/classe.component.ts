import { Component, OnInit } from '@angular/core';
import { Classe } from '../../Model/classe/classe';
import { ClasseService } from '../../Services/classes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})

export class ClasseComponent implements OnInit{

  class : Classe []=[];
  constructor(private serClasse : ClasseService, private router: Router){

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
  editClass(id:number):void{
      this.router.navigate(['/edit',id])
  }
  addClass():void{
      this.router.navigate(['/add'])

  }

  deleteClasse(id:number): void{
    this.serClasse.deleteClasse(id).subscribe(()=>{
      this.class = this.class.filter(c => c.id !==id);
    })
  }

  toApprenants(id:number){
    this.router.navigate(['apprenants', id]);
  }

}
