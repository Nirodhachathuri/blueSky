import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MapComponent } from '../map/map.component';



@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatIconModule
  ]
})
export class FooterModule { }
