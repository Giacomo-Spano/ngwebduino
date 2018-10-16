import { Component, OnInit, Input } from '@angular/core';
import { Action } from '../../../action';
import { Scenario } from '../../../scenario';
import { Webduinosystem } from '../../../webduinosystem';
import { WebduinoService } from '../../../webduino.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() action: Action;
  @Input() scenario: Scenario;
  @Input() webduinosystemid: number;
  webduinosystem: Webduinosystem;
  @Input() cardview: boolean;

  actionForm: FormGroup;

  constructor(private webduinosystemService: WebduinoService,
              private fb: FormBuilder,) {

               }

  ngOnInit() {
    this.webduinosystemService.getWebduinosystem(this.webduinosystemid)
          .subscribe(webduinosystem => {
            this.webduinosystem = webduinosystem;

            /*this.actionForm = this.fb.group({
              actuatorControl: [webduinosystem.actuators[1]]
            });*/
        });   
        
        
  }

}
