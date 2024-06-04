import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParidadesComponent } from './Components/paridades/paridades.component';

 const routes: Routes = [{
   path: 'paridades', component: ParidadesComponent
 }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
