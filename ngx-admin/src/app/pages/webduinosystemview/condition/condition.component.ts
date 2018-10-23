import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { Condition } from '../../../condition';
import { Scenario } from '../../../scenario';
import { Webduinosystem } from '../../../webduinosystem';
import { WebduinoService } from '../../../webduino.service';
import { Zone } from '../../../zone';
import { Sensor } from '../../../sensor';
import { Trigger } from '../../../trigger';
import { ZoneSensor } from '../../../zonesensor';

@Component({
  selector: 'ngx-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent implements OnInit {

  types = [{
    value: 'zonesensorvalue',
    name: 'Valore sensore zona',
   },
   {
    value: 'zonesensorstatus',
    name: 'Stato sensore',
   },
   {
    value: 'triggerstatus',
    name: 'Stato trigger',
   }];
  

  @Input() condition: Condition;
  @Input() webduinosystemid: number;
  webduinosystem: Webduinosystem;
  zone: Zone;
  zonesensor: ZoneSensor;
  sensor: Sensor;
  trigger: Trigger;
  triggers: Trigger[];
  @Input() cardview: boolean;
  @Output() delete: EventEmitter<Condition> = new EventEmitter<Condition>();
  error: string;
  notready: boolean;

  constructor(private webduinosystemService: WebduinoService, private ngzone: NgZone) { 
    this.notready = false;
  }

  ngOnInit() {
    this.webduinosystemService.getWebduinosystem(this.webduinosystemid)
          .subscribe(webduinosystem => {
            this.webduinosystem = webduinosystem;

            this.webduinosystemService.getTriggers()
              .subscribe(triggers => {
                this.triggers = triggers;

                this.updateType(this.condition.type);
            });  
        });      
  }

  onDelete(): void {
    this.delete.emit(this.condition);
  }
  
  typeChanged(event: any) {
    this.updateType(event.target.value);
  }

  updateType(type: string) {

    if (type == null ) {
      type == 'zonesensorstatus';
    }
  
    if (type == 'zonesensorvalue' || type == 'zonesensorstatus') {
      
      if (this.webduinosystem.zones == null) {
        this.notready = true;
        this.error = "no zone available";
      } else if (this.condition.zoneid != null) {
        this.updateZoneId(this.condition.zoneid)
      } else {        
        this.updateZoneId(this.webduinosystem.zones[0].zoneid);
      }
    } else if (type == 'triggerstatus') {
      if (this.triggers == null) {
        this.notready = true;
        this.error = "no trigger available";
      } else if (this.condition.triggerid != null) {
        this.updateTriggerId(this.condition.triggerid)
      } else {        
        this.updateTriggerId(this.triggers[0].id);
      }
    }
  }

  zoneidChanged(event: any) {
    this.updateZoneId(event.target.value);
  }

  updateZoneId(zoneid: number) {
    this.webduinosystemService.getZone(zoneid)
          .subscribe(zone => {
            this.zone = zone;
            if (this.zone.zonesensors == null) {
              this.notready = true;
              this.error = "no zonesensors available";
            } else if (this.condition.zonesensorid){
              let index = this.zone.zonesensors.findIndex(d => d.id === this.condition.zonesensorid); 
              if (index != -1) {
                this.updatezonsensorid(this.condition.zonesensorid)
              } else {
                this.updatezonsensorid(this.zone.zonesensors[0].id);
              }
            }
        });
  }

  zonesensoridChanged(event: any) {
    this.updatezonsensorid(event.target.value);
  }
  
  updatezonsensorid(zonesensorid: number) {
    this.webduinosystemService.getZoneSensor(this.zone.id, zonesensorid)
          .subscribe(zonesensor => {
            this.webduinosystemService.getSensor(zonesensor.sensorid)
              .subscribe(sensor => {
                this.sensor = sensor;
                this.updateSensorStatus();
        });
      });
  }

  updateSensorStatus() {
    
    let index = this.sensor.statuslist.findIndex(d => d == this.condition.sensorstatus); 
    if (index == -1 || this.condition.sensorstatus == null) {
      if (this.sensor.statuslist) {
        this.condition.sensorstatus = this.sensor.statuslist[0];
        /*this.ngzone.run(() => {
          //this.smartTableData = data;
          this.condition.sensorstatus = this.sensor.statuslist[0];
          });*/
      } else {
        this.notready = true;
        this.error = "no sensor status available";
      }
    }
  }

  triggeridChanged(event: any) {
    this.updateTriggerId(event.target.value)
  }

  updateTriggerId(triggerid: number) {
    let index = this.triggers.findIndex(d => d.id === triggerid); 
    if (index == -1) {
      triggerid = this.triggers[0].id;
    }
    this.condition.triggerid = triggerid;

    this.webduinosystemService.getTrigger(this.condition.triggerid)
          .subscribe(trigger => {
            this.trigger = trigger;
            this.updateTriggerStatus();

    });
  }

  updateTriggerStatus() {
    
    let index = this.trigger.statuslist.findIndex(d => d === this.condition.triggerstatus); 
    if (index == -1 || this.condition.triggerstatus == null) {
      if (this.trigger.statuslist) {
        this.condition.triggerstatus = this.trigger.statuslist[0];
      } else {
        this.notready = true;
        this.error = "no trigger status available";
      }
    }
  }
}
