import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxPopoverCardComponent, NgxPopoverFormComponent, NgxPopoverTabsComponent } from '../ui-features/popovers/popover-examples.component';
import { WebduinosystemviewComponent } from './webduinosystemview.component';
import { HeaterComponent } from './heater/heater.component';
import { WebduinosystemviewRoutingModule } from './webduinosystemview-routing.module';
import { ShieldsComponent } from './shields/shields.component';
import { ShieldComponent } from './shields/shield/shield.component';
import { WebduinoModule } from '../webduino/webduino.module';
import { SensorComponent } from './sensor/sensor.component';
import { ZoneComponent } from './zone/zone.component';
import { StatusCardComponent } from './status-card/status-card.component';

const components = [
  WebduinosystemviewComponent,
  HeaterComponent,
  NgxPopoverCardComponent,
  NgxPopoverFormComponent,
  NgxPopoverTabsComponent,

];

@NgModule({
  imports: [
    ThemeModule,
    WebduinosystemviewRoutingModule,
    WebduinoModule,
    
    //SensorComponent,
  ],
  declarations: [
    ...components,
    HeaterComponent,
    StatusCardComponent,
    ShieldsComponent,
    ShieldComponent,
    SensorComponent,
    ZoneComponent,
  ],
  entryComponents: [
    NgxPopoverCardComponent,
    NgxPopoverFormComponent,
    NgxPopoverTabsComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WebduinosystemviewModule { }


