import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbsenceService } from "../Services/absence.service";
import { AbsenceDTO } from "../Model/absence-dto/absence-dto";

@Component({
  selector: 'app-update-absence',
  templateUrl: './update-absence.component.html',
  styleUrls: ['./update-absence.component.css']
})

export class UpdateAbsenceComponent implements OnInit {
  absenceDTO: AbsenceDTO = {
    datedebut: new Date(),
    datedefin: new Date(),
    duration: 0,
    apprenantId: 0,

    etat_absence: 'NON_JUSTIFIE'
  };


  constructor(
    private absenceService: AbsenceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.absenceService.getAbsenceById(id).subscribe(
        (absence) => {
          this.absenceDTO = {
            id: absence.id,
            datedebut: absence.datedebut,
            datedefin: absence.datedefin,
            duration: absence.duration,
            apprenantId: absence.apprenantId,
            etat_absence: absence.etat_absence
          };
          console.log(this.absenceDTO)
        },
        (error) => console.error('Error fetching absence', error)
      );
    }
  }

  updateAbsence(): void {
    if (this.absenceDTO.id) {
      this.absenceService.updateAbsence(this.absenceDTO.id, this.absenceDTO).subscribe(
        () => {
          alert('Absence updated successfully');
          this.router.navigate(['/absences']);
        },
        (error) => console.error('Error updating absence', error)
      );
    }
  }

}
