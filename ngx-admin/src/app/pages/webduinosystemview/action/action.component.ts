import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Action } from '../../../action';
import { Scenario } from '../../../scenario';
import { Webduinosystem } from '../../../webduinosystem';
import { WebduinoService } from '../../../webduino.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Sensor } from '../../../sensor';
import { Trigger } from '../../../trigger';
import { ActionCommand } from '../../../actioncommand';
import { Zone } from '../../../zone';
import { ZoneSensor } from '../../../zonesensor';
//import { Zone } from '../../../zone';
//import { ZoneSensor } from '../../../zonesensor';

@Component({
  selector: 'ngx-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  types = [{
    value: 'actuator',
    name: 'Attuatore',
   },
   {
    value: 'service',
    name: 'Servizio',
   },
   {
    value: 'trigger',
    name: 'Trigger',
   },
   {
    value: 'webduinosystem',
    name: 'Webduinosystem',
   }];

  @Input() action: Action;
  @Input() scenario: Scenario;
  @Input() webduinosystemid: number;
  webduinosystem: Webduinosystem;
  @Input() cardview: boolean;

  sensor: Sensor;
  triggers: Trigger[];
  actioncommand: ActionCommand;
  zone: Zone;
  zonesensor: ZoneSensor;
  zonesensors: Sensor[];

  error: string;
  notready: boolean;

  actionForm: FormGroup;

  constructor(private webduinosystemService: WebduinoService,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef) {


               }

  ngOnInit() {
    this.webduinosystemService.getWebduinosystem(this.webduinosystemid)
          .subscribe(webduinosystem => {
            this.webduinosystem = webduinosystem;

            this.webduinosystemService.getTriggers()
              .subscribe(triggers => {
                this.triggers = triggers;

                this.updateType(this.action.type);
            });  
        });   
        
        
  }

  typeChanged(event: any) {
    this.updateType(event.target.value);
  }

  updateType(type: string) {

    if (type == null ) {
      type == 'actuator';
    }
  
    if (type == 'actuator') {      
      if (this.webduinosystem.actuators == null) {
        this.notready = true;
        this.error = "no zone available";
      } else if (this.action.sensorid != null) {
        this.updateSensorId(this.action.sensorid)
      } else {        
        this.updateSensorId(this.webduinosystem.actuators[0].sensorid);
      }
    } else if (type == 'service') {
    } else if (type == 'trigger') {
      /*if (this.triggers == null) {
        this.notready = true;
        this.error = "no trigger available";
      } else if (this.condition.triggerid != null) {
        this.updateTriggerId(this.condition.triggerid)
      } else {        
        this.updateTriggerId(this.triggers[0].id);
      }*/
    } else if (type == 'webduinosystem') {
    }
  }

  zoneidChanged(event: any) {
    this.updateZoneId(event.target.value);
  }

  updateZoneId(zoneid: number) {

    let index = this.webduinosystem.zones.findIndex(d => d.zoneid == zoneid); 
    if (index == -1 || this.action.zoneid == null) {
      if (this.webduinosystem.zones) {
        this.action.zoneid = this.webduinosystem.zones[0].zoneid;
      } else {
        this.notready = true;
        this.error = "no zone available";
        return;
      }
    }

    this.webduinosystemService.getZone(this.action.zoneid)
     .subscribe(zone => {
       this.zone = zone;
       this.updateZoneSensorId(this.action.zonesensorid);
    });
  }

  actioncommandChanged(event: any) {
    this.updateactioncommand(event.target.value);
  }

  updateactioncommand(actioncommand: string) {

    let index = this.sensor.actioncommandlist.findIndex(d => d.command == actioncommand); 
    if (index == -1 || this.action.actioncommand == null) {
      if (this.sensor.actioncommandlist && this.sensor.actioncommandlist.length > 0) {
        this.action.actioncommand = this.sensor.actioncommandlist[0].command;
        this.actioncommand = this.sensor.actioncommandlist[0];
      } else {
        this.notready = true;
        this.error = "no sensor actioncommand available";
        return;
      }
    } else {
      this.actioncommand = this.sensor.actioncommandlist[index];
      this.action.actioncommand = this.sensor.actioncommandlist[index].command;
    }
   

    
    if (this.actioncommand.zone) {  
      this.updateZoneId(this.action.zoneid);
    }


  }

  sensoridChanged(event: any) {
    this.updateSensorId(event.target.value);
  }

  updateSensorId(sensorid: number) {

    let index = this.webduinosystem.actuators.findIndex(d => d.sensorid == sensorid); 
    if (index == -1 || this.action.sensorid == null) {
      if (this.webduinosystem.actuators) {
        this.action.sensorid = this.webduinosystem.actuators[0].sensorid;
      } else {
        this.notready = true;
        this.error = "no sensor status available";
        return;
      }
    }

    this.webduinosystemService.getSensor(sensorid)
    .subscribe(sensor => {
      this.sensor = sensor;
      this.updateactioncommand(this.action.actioncommand);
      //this.cd.markForCheck();
      });
  }

  updateZoneSensorId(zonesensorid: number) {

    let index = this.zone.zonesensors.findIndex(d => d.sensorid == zonesensorid); 
    if (index == -1 || this.action.zonesensorid == null) {
      if (this.zone.zonesensors) {
        this.action.zonesensorid = this.zone.zonesensors[0].sensorid;
      } else {
        this.notready = true;
        this.error = "no zonesensor available";
        return;
      }
    }
  }

    

  onDelete(): void {
    
  }

}
