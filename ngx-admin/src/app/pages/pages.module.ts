import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { WebduinodashboardComponent } from './webduinodashboard/webduinodashboard.component';
//import { ZoneComponent } from './settings/zone/zone.component';
//import { ServiceComponent } from './settings/service/service.component';
import { ScenarioComponent } from './webduinosystemview/scenario/scenario.component';
import { SensorComponent } from './webduinosystemview/sensor/sensor.component';
import { ZoneComponent } from './webduinosystemview/zone/zone.component';
import { ServiceComponent } from './webduinosystemview/service/service.component';
//import { ScenarioComponent } from './settings/scenario/scenario.component';

//import { ZoneComponent } from './webduinosystemview/zone/zone.component';
//import { ServiceComponent } from './service/service.component';
//import { ScenarioComponent } from './scenario/scenario.component';
//import { HeaterComponent } from './webduinosystemview/heater/heater.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  /*HeaterComponent,*/
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    //WebduinoModule,
    //SensorComponent,
    //WebduinodashboardComponent,
    //MiscellaneousModule,
    //WebduinosystemComponent,
    //HeaterwebduinosystemComponent,
    //ZoneComponent,
    //ServiceComponent,
    //ScenarioComponent,
    //HeaterComponent,

  ],
  declarations: [
    ...PAGES_COMPONENTS,
    WebduinodashboardComponent,
    //WebduinoComponent,
    //SensorComponent,
    //MessagesComponent,
    //HeaterwebduinosystemComponent
    /*SensorComponent,
    ZoneComponent,
    ServiceComponent,
    ScenarioComponent, */
    //HeaterComponent,
    //SensorComponent,
    //ZoneComponent,
    //ServiceComponent,
    //ScenarioComponent,
  ],
  exports: [ WebduinodashboardComponent/*, SensorComponent*//*, HeaterComponent*/],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PagesModule {
}
