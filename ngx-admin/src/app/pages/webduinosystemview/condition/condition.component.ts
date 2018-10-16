import { Component, OnInit, Input } from '@angular/core';
import { Condition } from '../../../condition';
import { Scenario } from '../../../scenario';
import { Webduinosystem } from '../../../webduinosystem';
import { WebduinoService } from '../../../webduino.service';
import { Zone } from '../../../zone';

@Component({
  selector: 'ngx-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent implements OnInit {

  types = [{
    value: 'zonesensorvalue',
    name: 'Valore sensore',
   },
   {
    value: 'zonesensorstatus',
    name: 'Stato sensore',
   },
   {
    value: 'triggerstatus',
    name: 'Stato trigger',
   }]

  @Input() condition: Condition;
  //@Input() scenario: Scenario;
  @Input() webduinosystemid: number;
  webduinosystem: Webduinosystem;
  zone: Zone;
  @Input() cardview: boolean;

  constructor(private webduinosystemService: WebduinoService,) { }

  ngOnInit() {
    this.webduinosystemService.getWebduinosystem(this.webduinosystemid)
          .subscribe(webduinosystem => {
            this.webduinosystem = webduinosystem;
        });    
  }

  zoneidChanged(event: any) {
    this.webduinosystemService.getZone(event.target.value)
          .subscribe(zone => {
            this.zone = zone;
        });
  }

}
