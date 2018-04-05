import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TractorControlComponent } from './tractor-control/tractor-control.component';
import { FiringFormComponent } from './firing-form/firing-form.component';
import { PrisonerManifestComponent } from './prisoner-manifest/prisoner-manifest.component';
import { AppRoutes } from './app.routes';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckbox,
  MatCheckboxModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';
import { PrisonerCardComponent } from './prisoner-manifest/prisoner-card.component';
import { HomeComponent } from './home/home.component';
import { FiringFormModule } from './firing-form/firing-form.module';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule,
  ],
})
export class MaterialImportModule{ }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrisonerCardComponent,
    PrisonerManifestComponent,
    TractorControlComponent,
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    FiringFormModule,
    HttpClientModule,
    MaterialImportModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
