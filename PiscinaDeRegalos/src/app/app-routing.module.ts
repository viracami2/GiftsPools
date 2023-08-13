import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarRegaloComponent } from './VictorEsteban/agregar-regalo/agregar-regalo.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ListarRegalosComponent } from './VictorEsteban/listar-regalos/listar-regalos.component';
import { AsignarRegalosComponent } from './VictorEsteban/asignar-regalos/asignar-regalos.component';
import { AdminLayoutComponent } from './Game/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './Game/layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  { path: 'regalo', component: AgregarRegaloComponent },
  { path: 'lista', component: ListarRegalosComponent },
  { path: 'asignar', component: AsignarRegalosComponent },
  
  // { path: '**', pathMatch: 'full',   redirectTo: '/', },
  // { path: '',   redirectTo: '/',  },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/Game/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/Game/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
