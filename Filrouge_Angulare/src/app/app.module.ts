import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { ClasseComponent } from './classes/classe/classe.component';
import { ClasseFormComponent } from './classes/classe-form/classe-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApprenantsComponent } from './apprenants/apprenants/apprenants.component';
import { ApprenantsFormComponent } from './apprenants/apprenants-form/apprenants-form.component';
import { SuiviComponent } from './suivi/suivi.component';
import { LogineComponent } from './Security/logine/logine.component';
import { RetardComponent } from './reatrd/retard/retard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import { RetardFormComponent } from './reatrd/retard-form/retard-form.component';

import { AbsenceComponent } from './absences/absence/absence.component';
import { AddAbsenceComponent } from './absences/add-absence/add-absence.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { EspaceApprenantsComponent } from './espace-apprenants/espace-apprenants.component';
import { RetardApprenantComponent } from './retard-apprenant/retard-apprenant.component';

import { JustificationRetardComponent } from './justification-retard/justification-retard.component';

import {MatButtonModule} from "@angular/material/button";

import { AbsApprenantsComponent } from './abs-apprenants/abs-apprenants.component';
import { UpdateRetardComponent } from './update-retard/update-retard.component';
import { NosLoisComponent } from './nos-lois/nos-lois.component';
import { GuideUtilisateurComponentComponent } from './guide-utilisateur-component/guide-utilisateur-component.component';
import { UdpateApprenantsComponent } from './udpate-apprenants/udpate-apprenants.component';
import { TsetComponent } from './tset/tset.component';
;



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ClasseComponent,
    ClasseFormComponent,
    ApprenantsComponent,
    ApprenantsFormComponent,
    SuiviComponent,
    LogineComponent,
    RetardComponent,
    SidebarComponent,
    RetardFormComponent,

    AbsenceComponent,
     AddAbsenceComponent,
     DashboardComponent,
     EspaceApprenantsComponent,
     RetardApprenantComponent,


     JustificationRetardComponent,
    AbsApprenantsComponent,
    UpdateRetardComponent,
    NosLoisComponent,
    GuideUtilisateurComponentComponent,
    UdpateApprenantsComponent,
    TsetComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
