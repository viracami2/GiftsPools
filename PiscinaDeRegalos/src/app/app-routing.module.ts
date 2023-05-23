import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarRegaloComponent } from './agregar-regalo/agregar-regalo.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ListarRegalosComponent } from './listar-regalos/listar-regalos.component';
import { AsignarRegalosComponent } from './asignar-regalos/asignar-regalos.component';

const routes: Routes = [
  { path: 'regalo', component: AgregarRegaloComponent },
  { path: 'lista', component: ListarRegalosComponent },
  { path: '', component: AsignarRegalosComponent },
  
  // { path: '**', pathMatch: 'full',   redirectTo: '/', },
  // { path: '',   redirectTo: '/',  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
