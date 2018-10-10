import { Component, OnInit , Input} from '@angular/core';
import { WebduinoService } from '../../../webduino.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NbThemeService } from '@nebular/theme';
import { Webduinosystem } from '../../../webduinosystem';
//import { Webduinosystem } from '../../../webduinosystem';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-heater',
  templateUrl: './heater.component.html',
  styleUrls: ['./heater.component.scss']
})
export class HeaterComponent implements OnInit {
  
  id: number;
  @Input() webduinosystem: Webduinosystem;
  
  constructor(private webduinoservice: WebduinoService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private themeService: NbThemeService
    ) 
      {
  
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

  onClickMe() {
    var str = 'You are my hero!';
    str += "ggg";
  }

  getWebduinosystem(id: number): void {
    this.webduinoservice.getWebduinosystem(id)
    .subscribe(webduinosystem => 
      {
        this.webduinosystem = webduinosystem
      });
  }

}
