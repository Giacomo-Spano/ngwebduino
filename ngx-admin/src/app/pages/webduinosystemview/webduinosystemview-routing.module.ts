import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { WebduinosystemComponent } from './heater/heater.component';
import { WebduinosystemviewComponent } from './webduinosystemview.component';
import { WebduinosystemComponent } from './webduinosystem/webduinosystem.component';

const routes: Routes = [{
  path: '',
  component: WebduinosystemviewComponent,
  children: [{
    path: 'heater',
    component: WebduinosystemComponent,
  },
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebduinosystemviewRoutingModule { }
