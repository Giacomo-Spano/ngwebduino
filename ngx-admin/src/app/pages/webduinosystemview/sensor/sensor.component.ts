import { Component, OnInit, Input } from '@angular/core';
import { Sensor } from '../../../sensor';
import { WebduinoService } from '../../../webduino.service';

@Component({
  selector: 'ngx-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {

 sensor: Sensor;
  @Input() sensorid: number;

  //id: number;
  
  constructor(private webduinosystemService: WebduinoService,) 
  {
  }

  ngOnInit() {

    this.webduinosystemService.getSensor(this.sensorid)
      .subscribe(sensor => {
        this.sensor = sensor;
      });
    
  }
}
