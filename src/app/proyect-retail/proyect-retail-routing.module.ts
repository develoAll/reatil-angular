import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectRetailComponent } from './proyect-retail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'retail',
    pathMatch: 'full',
  },
  {
    path: 'retail',
    component: ProyectRetailComponent,
  },
  {
    path: '**',
    redirectTo: 'retail',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectRetailRoutingModule { }
