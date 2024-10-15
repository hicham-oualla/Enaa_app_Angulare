import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApprenantService } from '../../Services/apprenant.service';
import { ApprenantDTO } from '../../Model/apprenants/apprenants';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-apprenants-form',
  templateUrl: './apprenants-form.component.html',
  styleUrls: ['./apprenants-form.component.css']
})
export class ApprenantsFormComponent implements OnInit {
  apprenantForm!: FormGroup;
  classeId: number = 0;
  apprenantId: number | null = null;
  isEditMode: boolean = false;
  isSubmitting: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private apprenantsService: ApprenantService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.classeId = +this.route.snapshot.params['id'] || 0;
    this.apprenantId = +this.route.snapshot.params['apprenantid'] || null;
    this.isEditMode = !!this.apprenantId;

    this.initForm();

    if (this.isEditMode && this.apprenantId) {
      this.loadApprenant(this.apprenantId);
    }
  }

  initForm(): void {
    this.apprenantForm = this.fb.group({
      nom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', this.isEditMode ? [] : [Validators.required, Validators.minLength(6)]],
      address: [''],
      phone: [''],
      idNational: [''],
      classe: [this.classeId, Validators.required]
    });
  }

  loadApprenant(apprenantId: number): void {
    this.apprenantsService.getApprenantById(apprenantId).subscribe({
      next: (apprenant) => {
        this.apprenantForm.patchValue({
          nom: apprenant.nom,
          email: apprenant.email,
          address: apprenant.address,
          phone: apprenant.phone,
          idNational: apprenant.idNational,
          classeId: apprenant.classe
        });
      },
      error: (error) => {
        console.error('Error loading apprenant', error);
        this.errorMessage = 'Erreur lors du chargement des données de l\'apprenant';
      }
    });
  }

  onSubmit(): void {
    if (this.apprenantForm.valid) {
      this.isSubmitting = true;
      this.errorMessage = '';
      const apprenantData: ApprenantDTO = this.apprenantForm.value;

      if (this.isEditMode && this.apprenantId) {
        this.updateApprenant(this.apprenantId, apprenantData);
      } else {
        this.createApprenant(apprenantData);
      }
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires correctement.';
      Object.values(this.apprenantForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsTouched();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  private createApprenant(apprenantData: ApprenantDTO): void {
    console.log('Création d\'un nouvel apprenant:', apprenantData);
    this.apprenantsService.registerApprenant(apprenantData).subscribe({
      next: (response) => {
        console.log('Apprenant créé avec succès:', response);
        if (response.accessToken) {
          localStorage.setItem('authToken', response.accessToken);
        }
        this.router.navigate(['/apprenants', this.classeId]);
      },
      error: (error) => {
        console.error('Erreur lors de la création de l\'apprenant', error);
        this.errorMessage = error.error?.message || 'Erreur lors de la création de l\'apprenant';
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }

  private updateApprenant(id: number, apprenantData: ApprenantDTO): void {
    console.log('Mise à jour de l\'apprenant:', id, apprenantData);
    this.apprenantsService.updateApprenant(id, apprenantData).subscribe({
      next: (response) => {
        console.log('Apprenant mis à jour avec succès:', response);
        this.router.navigate(['/apprenants', this.classeId]);
      },
      error: (error) => {
        console.error('Erreur lors de la modification de l\'apprenant', error);
        this.errorMessage = 'Erreur lors de la modification de l\'apprenant';
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }

  get f() {
    return this.apprenantForm.controls;
  }
}
