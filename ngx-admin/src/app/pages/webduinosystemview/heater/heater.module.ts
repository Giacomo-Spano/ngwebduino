import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { ThemeModule } from '../../../@theme/theme.module';
import { CommonModule } from '../sensor/common.module';
//import { ZoneComponent } from '../zone/zone.component';
//import { ScenarioComponent } from '../scenario/scenario.component';
//import { ServiceComponent } from '../service/service.component';
import { HeaterComponent } from './heater.component';
//import { SensorComponent } from '../sensor/sensor.component';

const components = [
  //HeaterComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...components,
    HeaterComponent,
  ],
  entryComponents: [
  ],
  exports: [ 
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA
   ]
})
export class HeaterModule { }


