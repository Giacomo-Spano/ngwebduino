import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaterComponent } from './heater/heater.component';
import { WebduinosystemviewComponent } from './webduinosystemview.component';

const routes: Routes = [{
  path: '',
  component: WebduinosystemviewComponent,
  children: [{
    path: 'heater',
    component: HeaterComponent,
  },
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebduinosystemviewRoutingModule { }
