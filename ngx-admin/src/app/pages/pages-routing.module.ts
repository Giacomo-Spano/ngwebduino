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
<<<<<<< HEAD
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
=======
  }, {
    path: 'iot-dashboard',
    component: DashboardComponent,
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
>>>>>>> origin/master
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
