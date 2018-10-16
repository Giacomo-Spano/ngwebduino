import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '../sensor/common.module';
import { ScenarioComponent } from './scenario.component';
import { NbAccordionModule } from '@nebular/theme';

//NbAccordionModule

const components = [
];

@NgModule({
  imports: [
    CommonModule,
    //NbAccordionModule,
  ],
  declarations: [
    ...components,
    ScenarioComponent,
  ],
  entryComponents: [
  ],
  exports: [ 
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA
   ]
})
export class ScenarioModule { }


