import {Component, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;
import { WebduinosystemService } from '../../webduinosystemservice';
import { MessageService } from '../../message.service';
import { Router } from '@angular/router';
import { Sensor } from '../../sensor';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  template: `
    <router-outlet></router-outlet>
  `//,
  //styleUrls: ['./dashboard.component.scss'],
  //templateUrl: './dashboard.component.html',
})
export class WebduinosystemviewComponent implements OnInit {
  
  id: number;
  sensor: Sensor;

  
  constructor(
    ) 
    {
      //this.alertmessage.show = false;
    }

  ngOnInit() {
    /*this.route
    .queryParams
    .subscribe(params => {
    // Defaults to 0 if no query param provided.
    this.id = +params['id'] || 0;
    });*/

    //this.getSensor(/*this.id*/42);
  }

  
}

