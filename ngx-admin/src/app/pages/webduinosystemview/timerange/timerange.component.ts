import { Component, OnInit, Input, Output, SimpleChanges, OnChanges, DoCheck, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Timerange } from '../../../timerange';
import { Scenario } from '../../../scenario';
import { Webduinosystem } from '../../../webduinosystem';

@Component({
  selector: 'ngx-timerange',
  templateUrl: './timerange.component.html',
  styleUrls: ['./timerange.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerangeComponent implements OnInit, OnChanges, DoCheck {

  @Input() timerange: Timerange;
  //@Input() scenario: Scenario;
  @Input() webduinosystemid: number;
  @Input() cardview: boolean;

  @Output()
  change: EventEmitter<Timerange> = new EventEmitter<Timerange>();

  starttime = {hour: 13, minute: 30};
  endtime = {hour: 13, minute: 30};

  oldname: string;

  
  constructor() {
    
   }

  ngOnInit() {
    this.oldname = this.timerange.name;
    if (this.timerange.starttime != null) {
      const str = this.timerange.starttime.split(':');
      this.starttime.hour = Number(str[0]);
      this.starttime.minute = Number(str[1]);
    }
    if (this.timerange.endtime != null) {
      const str = this.timerange.endtime.split(':');
      this.endtime.hour = Number(str[0]);
      this.endtime.minute = Number(str[1]);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }

  ngDoCheck() {
    if (this.oldname != this.timerange.name) {
      this.change.emit(this.timerange);
      this.oldname = this.timerange.name;
    }
  }

}
