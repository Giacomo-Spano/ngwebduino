import { Component, OnInit, Input } from '@angular/core';
import { WebduinoService } from '../../../webduino.service';
import { Scenario } from '../../../scenario';

@Component({
  selector: 'ngx-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit {

  scenario: Scenario;
  @Input() scenarioid: number;
  
  constructor(private webduinosystemService: WebduinoService,) 
  {
  }

  ngOnInit() {

    this.webduinosystemService.getScenario(this.scenarioid)
      .subscribe(scenario => {
        this.scenario = scenario;
      });    
  }
}

