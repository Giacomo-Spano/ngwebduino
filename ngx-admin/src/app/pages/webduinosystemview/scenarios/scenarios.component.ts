import { Component, OnInit, Input } from '@angular/core';
import { Scenario } from '../../../scenario';
import { WebduinoService } from '../../../webduino.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { ScenarioComponent } from '../scenario/scenario.component';

@Component({
  selector: 'ngx-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.scss']
})
export class ScenariosComponent implements OnInit {

  @Input() scenarios: Scenario[];
  @Input() edit: boolean;
  
  constructor(private webduinosystemService: WebduinoService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    ) 
    {
    }

    ngOnInit() {
      this.scenarios;
    }

    onClickScenario(scenario: ScenarioComponent) {
      //var values += event.target.value + ' | ';
      //var str = 'You are my hero!';
      //str += "ggg";
      this.router.navigate(['/pages/scenario/' + scenario.scenario.id]);
      //this.editmode = true;
    }

}
