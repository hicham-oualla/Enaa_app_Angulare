import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasseService } from '../../Services/classes.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Classe, Classedto} from '../../Model/classe/classe';

@Component({
  selector: 'app-classe-form',
  templateUrl: './classe-form.component.html',
  styleUrls: ['./classe-form.component.css']
})
export class ClasseFormComponent implements OnInit{
    classForm: FormGroup;
    classeId:number | null=null;

    constructor(private fb: FormBuilder,
       private classeService: ClasseService,
       private route: ActivatedRoute,
       private router: Router
      ){
      this.classForm= this.fb.group({
        nom:['',[Validators.required]]
      })
    }
  ngOnInit(): void {
    this.classeId = this.route.snapshot.params['id'];

    if(this.classeId){
      this.loadclasse(this.classeId);
    }
  }
  loadclasse(id:number):void{
    this.classeService.getClasseById(id).subscribe((classe)=>{
      this.classForm.patchValue({
        nom:classe.nom,
      })
    })
  }

  onSubmit(): void{
    if(this.classForm.valid){
      const classe : Classedto = this.classForm.value
        if(this.classeId){
          this.classeService.updateClasse(this.classeId, classe).subscribe(()=>{
            alert('Class updated seccssuful')
            this.router.navigate(['/classes'])
          })
        }else{
          this.classeService.createClasse(classe).subscribe(()=>{
            alert("classe add succeful")
            this.router.navigate(['/classes'])
          })
        }
    }
  }
}
