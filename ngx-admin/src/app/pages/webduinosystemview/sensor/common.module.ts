import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { SensorComponent } from './sensor.component';
import { ZoneComponent } from '../zone/zone.component';
import { ScenarioComponent } from '../scenario/scenario.component';
import { ServiceComponent } from '../service/service.component';
import { HeaterComponent } from '../heater/heater.component';
import { ProgramComponent } from '../program/program.component';
import { TimerangeComponent } from '../timerange/timerange.component';
import { ActionComponent } from '../action/action.component';
import { ConditionComponent } from '../condition/condition.component';

import { Component, ChangeDetectionStrategy } from '@angular/core'
import { NbAccordionModule } from '@nebular/theme';

const components = [
  //HeaterComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    //SensorComponent,
    NbAccordionModule,
  ],
  declarations: [
    ...components,
    SensorComponent,
    ZoneComponent,
    ScenarioComponent,
    ServiceComponent,
    HeaterComponent,
    ProgramComponent,
    TimerangeComponent,
    ActionComponent,
    ConditionComponent,
  ],
  entryComponents: [
  ],
  exports: [ 
    SensorComponent,
    ZoneComponent,
    ScenarioComponent,
    ServiceComponent,
    HeaterComponent,
    ProgramComponent,
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA
   ]
})
export class CommonModule { }


