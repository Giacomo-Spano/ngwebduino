/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebduinoModule } from './pages/webduino/webduino.module';
//import { HeaterModule } from './pages/webduinosystemview/heater/heater.module';
//import { HeaterComponent } from './pages/webduinosystemview/heater/heater.component';

//import { HeaterComponent } from './pages/webduinosystemview/heater/heater.component';
import { ScenarioComponent } from './pages/webduinosystemview/scenario/scenario.component';
import { SensorComponent } from './pages/webduinosystemview/sensor/sensor.component';
import { ZoneComponent } from './pages/webduinosystemview/zone/zone.component';
import { ServiceComponent } from './pages/webduinosystemview/service/service.component';
//import { SensorModule } from './pages/webduinosystemview/sensor/sensor.module';
import { CommonModule } from './pages/webduinosystemview/sensor/common.module';
//import { ScenariosComponent } from './scenarios/scenarios.component';
//import {ngNumberPicker} from '@angular-number-picker';

//import { NumberPickerComponent } from 'angular2-number-picker/components';


@NgModule({
  declarations: [
    AppComponent,
    //ScenariosComponent,
    //NumberPickerComponent,
    //HeaterComponent,
    //SensorComponent,
    //ZoneComponent,
    //ServiceComponent,
    //ScenarioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    WebduinoModule,
    //HeaterModule,
    //SensorModule,
    CommonModule,
    //DashboardComponent,
   //WebduinodashboardComponent,
    //HeaterComponent,
    //ngNumberPicker,
    
    
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),

    //HeaterModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  exports: [ ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
