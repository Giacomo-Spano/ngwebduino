import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { WebduinoComponent } from './webduino.component';
//import { ScenarioComponent } from './scenario/scenario.component';
//import { ZoneComponent } from '../settings/zone/zone.component';
//import { ServiceComponent } from '../settings/service/service.component';

const components = [
  //SensorComponent,
];

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ...components,
    //SensorComponent,
    WebduinoComponent,
    //ZoneComponent,
    //ServiceComponent,
    //ScenarioComponent,
  ],
  entryComponents: [
  ],
  exports: [ /*SensorComponent*/],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WebduinoModule { }


