import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../../service';
import { WebduinoService } from '../../../webduino.service';

@Component({
  selector: 'ngx-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  @Input() serviceid: number;
  service : Service;

  constructor(private webduinosystemService: WebduinoService,) 
  {
  }

  ngOnInit() {

    this.webduinosystemService.getService(this.serviceid)
      .subscribe(service => {
        this.service = service;
      });
    
  }
}

