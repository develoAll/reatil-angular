import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


// esto es para nuestro modules compartidos
// ejemplo de angular material
const mat_modules = [
  MatCheckboxModule,
  NgxPaginationModule,
  MatIconModule,
  MatButtonModule,
  FormsModule
]

// loading para carga
const components = [LoadingComponent];

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,mat_modules
  ],
  exports: [
    components,mat_modules
  ]
})
export class ProyectsharedModule { }
