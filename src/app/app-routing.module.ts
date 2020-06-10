import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];


const f = () => {
  console.log('a');
  const order = ['static-field', 'instance-field', 'static-method', 'instance-method'];

};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
