import { Component, OnInit, Input } from '@angular/core';
import { Sensor } from '../../../sensor';
import { WebduinosystemService } from '../../../webduinosystem.service';

@Component({
  selector: 'ngx-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {

  @Input() sensor: Sensor;
  @Input() sensorid: number;

  //id: number;
  
  constructor(private webduinosystemService: WebduinosystemService,) 
  {
  }

  ngOnInit() {

    this.webduinosystemService.getSensor(this.sensorid)
      .subscribe(sensor => {
        this.sensor = sensor;
      });
    
  }
}
