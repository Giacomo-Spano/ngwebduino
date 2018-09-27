import { NgModule} from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { MessagesComponent } from './messages/messages.component';
//import { WebduinodashboardComponent } from './webduinodashboard/webduinodashboard.component';
//import { HeaterwebduinosystemComponent } from './webduinodashboard/heaterwebduinosystem/heaterwebduinosystem.component';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
//import { WebduinosystemComponent } from './settings/webduinosystems/webduinosystem/webduinosystem.component';
//import { Webduinosystem } from './settings/webduinosystems/webduinosystem/webduinosystem.component';


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    //WebduinosystemComponent,
    //HeaterwebduinosystemComponent,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    MessagesComponent,
    //HeaterwebduinosystemComponent
    
  ],
  //exports: [ HeaterwebduinosystemComponent],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesModule {
}
