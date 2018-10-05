import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { WebduinodashboardComponent } from './webduinodashboard/webduinodashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [/*{
    path: 'xxdashboard',
    component: ECommerceComponent,
  }, */
  {
    path: 'webduinodashboard',
    component: WebduinodashboardComponent,
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
