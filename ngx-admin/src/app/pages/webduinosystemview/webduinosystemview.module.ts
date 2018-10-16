import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
//import { NgxPopoverCardComponent, NgxPopoverFormComponent, NgxPopoverTabsComponent } from '../ui-features/popovers/popover-examples.component';
import { WebduinosystemviewComponent } from './webduinosystemview.component';
//import { HeaterComponent } from './heater/heater.component';
import { WebduinosystemviewRoutingModule } from './webduinosystemview-routing.module';
import { ShieldsComponent } from './shields/shields.component';
import { ShieldComponent } from './shields/shield/shield.component';
import { WebduinoModule } from '../webduino/webduino.module';
import { SensorComponent } from './sensor/sensor.component';
import { ZoneComponent } from './zone/zone.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { ServiceComponent } from './service/service.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { NbActionsModule } from '@nebular/theme';
import { HeaterComponent } from './heater/heater.component';
import { ProgramComponent } from './program/program.component';
import { TimerangeComponent } from './timerange/timerange.component';
import { ConditionComponent } from './condition/condition.component';
import { ActionComponent } from './action/action.component';

const components = [
  WebduinosystemviewComponent,
  //HeaterComponent,
  /*NgxPopoverCardComponent,
  NgxPopoverFormComponent,
  NgxPopoverTabsComponent,*/

];

@NgModule({
  imports: [
    ThemeModule,
    WebduinosystemviewRoutingModule,
    WebduinoModule,
    //HeaterComponent, 
    //SensorComponent,
    NbActionsModule,
  ],
  declarations: [
    ...components,
    //HeaterComponent,
    StatusCardComponent,
    ShieldsComponent,
    ShieldComponent,
    ProgramComponent,
    TimerangeComponent,
    ConditionComponent,
    ActionComponent,
    //SensorComponent,
    //ZoneComponent,
    //ServiceComponent,
    //ScenarioComponent,
    //HeaterComponent,
  ],
  entryComponents: [
    /*NgxPopoverCardComponent,
    NgxPopoverFormComponent,
    NgxPopoverTabsComponent,*/
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WebduinosystemviewModule { }


