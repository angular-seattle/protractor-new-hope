import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FiringFormComponent } from './firing-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatDividerModule,
  MatInputModule,
  MatListModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [
    FiringFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
  ]
})
export class FiringFormModule { }
