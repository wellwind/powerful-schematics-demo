import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { DemoTableComponent } from './demo-table/demo-table.component';

const routes: Routes = [
  {
    path: '',
    component: DemoTableComponent,
  },
  {
    path: 'form',
    component: DemoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
