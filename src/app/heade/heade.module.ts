import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { HeadeComponent } from './heade/heade.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HeadeComponent,
  },
];

@NgModule({
  declarations: [HeadeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatListModule,
    MatButtonModule,
    MatSortModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeadeModule { }
