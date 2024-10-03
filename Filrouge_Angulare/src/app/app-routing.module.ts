import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClasseComponent } from './classe/classe.component';
import { ClasseFormComponent } from './classe-form/classe-form.component';
import { ApprenantsComponent } from './apprenants/apprenants/apprenants.component';
import {ApprenantsFormComponent} from "./apprenants-form/apprenants-form.component";
import {SuiviComponent} from "./suivi/suivi.component";
import {LogineComponent} from "./logine/logine.component";
import {RetardComponent} from "./retard/retard.component";


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
    path: 'editApprenant/:id',component: ApprenantsFormComponent,
  },
  {
    path: 'suivi/:id',component: SuiviComponent,
  },

  {
    path: 'login',component:  LogineComponent,
  },
  {path:'retard/:id', component:RetardComponent}





];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
