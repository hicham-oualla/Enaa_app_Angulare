import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClasseComponent } from './classes/classe/classe.component';
import { ClasseFormComponent } from './classes/classe-form/classe-form.component';
import { ApprenantsComponent } from './apprenants/apprenants/apprenants.component';
import {ApprenantsFormComponent} from "./apprenants/apprenants-form/apprenants-form.component";
import {SuiviComponent} from "./suivi/suivi.component";
import {LogineComponent} from "./Security/logine/logine.component";
import {RetardComponent} from "./reatrd/retard/retard.component";
import {RetardFormComponent} from "./reatrd/retard-form/retard-form.component";
import {AbsenceComponent} from "./absences/absence/absence.component";
import {AddAbsenceComponent} from "./absences/add-absence/add-absence.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EspaceApprenantsComponent} from "./espace-apprenants/espace-apprenants.component";
import {RetardApprenantComponent} from "./retard-apprenant/retard-apprenant.component";
import {AbsApprenantsComponent} from "./abs-apprenants/abs-apprenants.component";
import {UpdateRetardComponent} from "./update-retard/update-retard.component";
import {NosLoisComponent} from "./nos-lois/nos-lois.component";
import {GuideUtilisateurComponentComponent} from "./guide-utilisateur-component/guide-utilisateur-component.component";
import {UpdateAbsenceComponent} from "./update-absence/update-absence.component";


const routes: Routes = [
 {
    path: '',component: HomeComponent,
  },
  {
    path: 'classes',component: ClasseComponent,
  },
  {
    path: 'add',component: ClasseFormComponent,
  },
  {
    path: 'edit/:id',component: ClasseFormComponent,
  },
  {
    path: 'apprenants/:id',component: ApprenantsComponent,
  },
  {
    path: 'addapprenants/:id',component: ApprenantsFormComponent,
  },

  {
    path: 'suivi/:id',component: SuiviComponent,
  },

  {
    path: 'espace-app',component: EspaceApprenantsComponent,
  },
  {
    path: 'nos_lois',component: NosLoisComponent,
  },
  {
    path: 'guid',component: GuideUtilisateurComponentComponent,
  },



  {
    path: 'login',component:  LogineComponent,
  },
  {
    path: 'retard-app',component:  RetardApprenantComponent,
  },

  {path:'retard/:id', component:RetardComponent},

  {path:'add_retrad/:id', component:RetardFormComponent},


  {path:'absence/:id', component:AbsenceComponent},

  { path: 'add_absence/:id', component: AddAbsenceComponent },
  { path: 'dashbord', component: DashboardComponent },
  { path: 'absAPP', component: AbsApprenantsComponent },
  { path: 'updateRetard/:id', component: UpdateRetardComponent },
  {path:'updateabsence/:id',component:UpdateAbsenceComponent},










];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
