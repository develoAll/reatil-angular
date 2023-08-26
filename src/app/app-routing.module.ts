import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contenido',
    pathMatch: 'full',
  },
  {
    path: 'contenido',
    loadChildren: () =>
      import(`./proyect-retail/proyect-retail.module`).then((m) => m.ProyectRetailModule),
  },
  {
    path: '**',
    redirectTo: 'contenido',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
