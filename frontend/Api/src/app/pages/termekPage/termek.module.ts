import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTermekComponent } from './listTermekPage/list-termek.component';
import { CreateTermekComponent } from './create-termek/create-termek.component';
import { TermekRoutingModule } from './termek-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [ListTermekComponent, CreateTermekComponent],
  imports: [
    CommonModule,
    TermekRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TermekModule { }
