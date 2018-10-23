import { Component, OnInit , Input} from '@angular/core';
import { WebduinoService } from '../../../webduino.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NbThemeService } from '@nebular/theme';
import { Webduinosystem } from '../../../webduinosystem';
//import { Scenario } from '../../../scenario';
import { ScenarioComponent } from '../scenario/scenario.component';
//import { Webduinosystem } from '../../../webduinosystem';
//import {Router} from '@angular/router';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-heater',
  templateUrl: './webduinosystem.component.html',
  styleUrls: ['./webduinosystem.component.scss']
})
export class WebduinosystemComponent implements OnInit {
  
  id: number;
  editmode: boolean;
  @Input() webduinosystem: Webduinosystem;
  
  constructor(private webduinoservice: WebduinoService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private themeService: NbThemeService
    ) 
      {
        this.editmode = false;
    }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
    // Defaults to 0 if no query param provided.
    this.id = +params['id'] || 0;
    });

    this.getWebduinosystem(/*this.id*/2);
  }

  onClickMe(scenariox: ScenarioComponent) {
    //var values += event.target.value + ' | ';
    var str = 'You are my hero!';
    str += "ggg";
    //this.router.navigate(['/pages/scenario/' + scenariox.scenarioid]);
    this.editmode = true;
  }

  onScenarios() {
    //var values += event.target.value + ' | ';
    var str = 'You are my hero!';
    str += "ggg";
    this.router.navigate(['/pages/scenarios/']);
  }

  getWebduinosystem(id: number): void {
    this.webduinoservice.getWebduinosystem(id)
    .subscribe(webduinosystem => 
      {
        this.webduinosystem = webduinosystem
      });
  }

}
