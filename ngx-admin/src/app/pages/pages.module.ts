import { NgModule} from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { WebduinodashboardComponent } from './webduinodashboard/webduinodashboard.component';
import { ZoneComponent } from './settings/zone/zone.component';
import { ServiceComponent } from './settings/service/service.component';
import { ScenarioComponent } from './settings/scenario/scenario.component';

<<<<<<< HEAD
//import { ZoneComponent } from './webduinosystemview/zone/zone.component';
//import { ServiceComponent } from './service/service.component';
//import { ScenarioComponent } from './scenario/scenario.component';
=======
import { MessagesComponent } from './messages/messages.component';
//import { WebduinodashboardComponent } from './webduinodashboard/webduinodashboard.component';
//import { HeaterwebduinosystemComponent } from './webduinodashboard/heaterwebduinosystem/heaterwebduinosystem.component';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
//import { WebduinosystemComponent } from './settings/webduinosystems/webduinosystem/webduinosystem.component';
//import { Webduinosystem } from './settings/webduinosystems/webduinosystem/webduinosystem.component';

>>>>>>> origin/master

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
<<<<<<< HEAD
    //WebduinoModule,
    //SensorComponent,
    //WebduinodashboardComponent,
    //MiscellaneousModule,
    //WebduinosystemComponent,
    //HeaterwebduinosystemComponent,
    //ZoneComponent,
    //ServiceComponent,
    //ScenarioComponent,

  ],
  declarations: [
    ...PAGES_COMPONENTS,
    WebduinodashboardComponent,
    //WebduinoComponent,
    //SensorComponent,
    //MessagesComponent,
    //HeaterwebduinosystemComponent
    ZoneComponent,
    ServiceComponent,
    ScenarioComponent,
    
  ],
  exports: [ WebduinodashboardComponent/*, SensorComponent*/],
=======
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
>>>>>>> origin/master
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesModule {
}
