import { Component, OnInit } from '@angular/core';
import { WebduinosystemService } from '../../../webduinosystem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NbThemeService } from '@nebular/theme';
import { Webduinosystem } from '../../../webduinosystem';

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
  webduinosystem: Webduinosystem;
  
  constructor(private webduinosystemService: WebduinosystemService,
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

  getWebduinosystem(id: number): void {
    this.webduinosystemService.getWebduinosystem(id)
    .subscribe(webduinosystem => 
      {
        this.webduinosystem = webduinosystem
      });
  }

}
