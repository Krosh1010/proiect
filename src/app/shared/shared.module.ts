import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    NgbModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule, 
    NgbModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    
  ]
})
export class SharedModule { }
