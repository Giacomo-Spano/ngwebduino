import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';
import { Program } from "../../../program";
import { WebduinoService } from '../../../webduino.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Scenario } from '../../../scenario';
import { Webduinosystem } from '../../../webduinosystem';

@Component({
  selector: 'ngx-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit, OnChanges{

  @Input() program: Program;
  //@Input() scenario: Scenario;
  
  @Input() webduinosystemid: number;
  @Output() ondelete = new EventEmitter();
  @Output() onprogramclick = new EventEmitter();

  @Input() cardview: boolean;

  constructor(private webduinosystemService: WebduinoService,
    private route: ActivatedRoute,
    private router: Router,) { 
    //this.cardview = false;
  }

  ngOnInit() {

    /*let id = this.route.snapshot.paramMap.get('programid');

    if (id != null) {
      this.programid = +id
      this.cardview = true;
    }


    this.webduinosystemService.getProgram(this.programid)
      .subscribe(program => {
        this.program = new Program(program);
        //this.program = program;


      });    */
  }


  onClickMe() {

    this.onprogramclick.emit(this.program);
    //this.ondelete.emit(this.program);
    
  }

  onSave() {

    //this.onprogramclick.emit(this.program);
    //this.ondelete.emit(this.program);
    
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }

  onTimereangeChange(event) {
    /*this.program.timeranges.forEach(timerange => {
      if (timerange.id == event.id) {
        timerange = event;
      }
    });*/
  }

}
