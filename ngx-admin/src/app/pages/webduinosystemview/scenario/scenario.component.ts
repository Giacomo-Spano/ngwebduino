import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { WebduinoService } from '../../../webduino.service';
import { Scenario } from '../../../scenario';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Alertmessage } from '../../../alertmessage';
import { Program } from '../../../program';
import { ProgramComponent } from '../program/program.component';
import { Webduinosystem } from '../../../webduinosystem';

//import { ProgramComponent } from '../pro';

@Component({
  selector: 'ngx-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit, OnChanges {

  @Input() scenario: Scenario;
  webduinosystem: Webduinosystem;
  cardview: boolean;
  //@Input() scenarioid: number;
  //@Input() webduinosystem: Webduinosystem;

  alertmessage: Alertmessage = {
    show: false,
    name: 'Windstorm2',
    message: 'message',
  };  
  
  constructor(
      private webduinosystemService: WebduinoService,
      private route: ActivatedRoute,
      private router: Router,) 
  {
    this.cardview = false;
  }

  ngOnInit() {

    if (this.scenario == null) {

      let id = this.route.snapshot.paramMap.get('id');
      this.cardview = true;

      /*if (id != null) {
        this.scenarioid = +id
        
      }*/


      this.webduinosystemService.getScenario(+id)
        .subscribe(scenario => {
          this.scenario = scenario;      
        }); 
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }

  /*getWebduinosystem(id: number): void {
    this.webduinosystemService.getWebduinosystem(id)
    .subscribe(webduinosystem => 
      {
        this.webduinosystem = webduinosystem;
      });
  }*/

  onSave(): void {
   
    this.webduinosystemService.updateScenario(this.scenario)
    .subscribe(scenario =>
      {
        //this.showLargeMscenarioscenarioscenarioodal(); 
        
        this.scenario = scenario;

        this.alertmessage.show = true;   
          
        //this.alertmessage.ngOnInit();

        this.ngOnInit();
            
      }); 
  }

  onAdd(): void {
    let prgm: Program;
    prgm = new Program(null);
    prgm.scenarioid = this.scenario.id;
    this.scenario.programs.push(prgm);
  }

  onDelete(program: Program): void {
        
  }

  onProgramClick(program: Program): void {
    this.router.navigate(['/pages/program/' + program.id]);    
  }  

  onProgramChange(event) {
    /*this.program.timeranges.forEach(timerange => {
      if (timerange.id == event.id) {
        timerange = event;
      }
    });*/
  }
}

