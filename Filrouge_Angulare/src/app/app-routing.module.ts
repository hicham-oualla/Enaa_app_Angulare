import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClasseComponent } from './classe/classe.component';
import { ClasseFormComponent } from './classe-form/classe-form.component';
import { ApprenantsComponent } from './apprenants/apprenants/apprenants.component';


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
    path: 'apprenants',component: ApprenantsComponent,
  }

  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
