import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectRetailRoutingModule } from './proyect-retail-routing.module';
import { ProyectRetailComponent } from './proyect-retail.component';
import { ProyectsharedModule } from './shared/proyectshared.module';


@NgModule({
  declarations: [
    ProyectRetailComponent
  ],
  imports: [
    CommonModule,
    ProyectRetailRoutingModule,
    ProyectsharedModule
  ],
  exports: [ProyectsharedModule]
})
export class ProyectRetailModule { }
