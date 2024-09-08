import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClasseComponent } from './classe/classe.component';


const routes: Routes = [
 {
    path: '',component: HomeComponent,
  },
  {
    path: 'classes',component: ClasseComponent,
  }
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
