import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApprenantService } from '../Services/apprenant.service';
import {ApprenantDTO, Apprenants} from '../Services/Model/apprenants';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-apprenants-form',
  templateUrl: './apprenants-form.component.html',
  styleUrls: ['./apprenants-form.component.css']
})
export class ApprenantsFormComponent implements OnInit {
  apprenantForm!: FormGroup;
  id:number=0;

  constructor(
    private fb: FormBuilder,
    private apprenantsService: ApprenantService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.initForm();
  }

  // Initialiser le formulaire réactif
  initForm(): void {
    this.apprenantForm = this.fb.group({
      nom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      //role: ['', [Validators.required]],
      classeId: this.id,
      address: [''],
      phone: [''],
      idNational: ['']
    });
  }

  // Soumettre le formulaire
  onSubmit(): void {
    if (this.apprenantForm.valid) {
      const newApprenant: ApprenantDTO = this.apprenantForm.value;
      this.apprenantsService.createApprenant(newApprenant).subscribe({
        next: (response) => {
          console.log('Apprenant créé avec succès', response);
          this.router.navigate(['/apprenants/'+response.classeId]); // Rediriger après création
        },
        error: (error) => {
          console.error('Erreur lors de la création de l\'apprenant', error);
        }
      });
    }
  }
}
