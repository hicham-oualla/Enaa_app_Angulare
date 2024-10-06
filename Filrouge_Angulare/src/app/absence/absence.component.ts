import { Component, OnInit } from '@angular/core';
import { AbsenceService } from "../Services/absence.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Absence } from "../Model/absence"; // T2ked mn l'path

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit {
  id!: number;
  absences: Absence[] = [];

  constructor(private service: AbsenceService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAbsenceList();
  }

  onEditAbsence(id: number) {
    // Logic l edit absence form wla fta7 modal
    this.router.navigate(['edit_absence', id]);
  }

  onAddAbsence() {
    this.router.navigate(['add_absence', this.id]);
  }

  onDeleteAbsence(id: number) {
    if(confirm('Wach bghiti t7iyyed had l\'absence?')) {
      this.service.deleteAbsence(id).subscribe(
        () => {
          console.log('Absence t7iyydat');
          this.getAbsenceList(); // 3awed jib l'liste apres deletion
        },
        error => {
          console.error('Error f deletion dial absence:', error);
        }
      );
    }
  }

  getAbsenceList() {
    this.service.getAbsencesByApprenant(this.id).subscribe(
      data => {
        this.absences = data;
        console.log(data);
      },
      error => {
        console.error('Error fash kanjib absences:', error);
      }
    );
  }
}
