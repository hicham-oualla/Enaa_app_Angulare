import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AbsenceService} from "../../Services/absence.service";
import {AbsenceDTO} from "../../Model/absence-dto/absence-dto";


@Component({
  selector: 'app-add-absence',
  templateUrl: './add-absence.component.html',
  styleUrls: ['./add-absence.component.css']
})
export class AddAbsenceComponent implements OnInit {
  absenceForm!: FormGroup;
  apprenantId!: number;


  constructor(
    private fb: FormBuilder,
    private absenceService: AbsenceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apprenantId = +this.route.snapshot.paramMap.get('id')!;
    this.initForm();
  }

  initForm(): void {
    this.absenceForm = this.fb.group({
      datedebut: ['', Validators.required],
      datedefin: ['', Validators.required],

    });
  }

  onSubmit(): void {
    if (this.absenceForm.valid) {
      const formValue = this.absenceForm.value;
      const absenceDTO: AbsenceDTO = {
        datedebut: formValue.datedebut,
        datedefin: formValue.datedefin,
        duration: this.calculateDuration(formValue.datedebut, formValue.datedefin),
        apprenantId: this.apprenantId,
        etat_absence: formValue.etat_absence

      };

      this.absenceService.saveAbsence(absenceDTO).subscribe(
        response => {
          console.log('Absence ajoutée avec succès', response);
          this.router.navigate(['absence', this.apprenantId]);
          window.location.reload()

        },
        error => {
          console.error('Erreur lors de l\'ajout de l\'absence', error);
        }
      );
    }
  }


  calculateDuration(start: Date, end: Date): number {
    const diffTime = Math.abs(new Date(end).getTime() - new Date(start).getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}
