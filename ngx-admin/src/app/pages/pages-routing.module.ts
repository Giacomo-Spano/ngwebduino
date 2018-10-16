import { RouterModule, Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { PagesComponent } from './pages.component';
import { WebduinodashboardComponent } from './webduinodashboard/webduinodashboard.component';
//import { HeaterComponent } from './webduinosystemview/heater/heater.component';
import { CommonModule } from './webduinosystemview/sensor/common.module';
import { HeaterComponent } from './webduinosystemview/heater/heater.component';
import { Webduinosystem } from '../webduinosystem';
import { ScenarioComponent } from './webduinosystemview/scenario/scenario.component';
import { ProgramComponent } from './webduinosystemview/program/program.component';
//import { HeaterComponent } from './webduinosystemview/heater/heater.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [/*{
    path: 'heater',
    component: HeaterComponent,
  }, */
  {
    path: 'webduinodashboard',
    component: WebduinodashboardComponent,
  },
  {
    path: 'heater',
    component: HeaterComponent,
  },
  /*{
    path: 'scenario',
    component: ScenarioComponent,
  },*/
  {
    path: 'scenario/:id',
    component: ScenarioComponent,
  },
  {
    path: 'program/:programid',
    component: ProgramComponent,
  },
  {
    path: 'wx',
    component: Webduinosystem,
  },
  {
    path: 'webduinosystemview',
    //component: WebduinodashboardComponent,
    loadChildren: './webduinosystemview/webduinosystemview.module#WebduinosystemviewModule',
  }/*, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }*/, {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule',
  }, 
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, /*{
    path: '**',
    component: NotFoundComponent,
  }*/],
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesRoutingModule {
}
