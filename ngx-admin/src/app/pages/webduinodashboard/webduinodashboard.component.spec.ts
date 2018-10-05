import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebduinodashboardComponent } from './webduinodashboard.component';

describe('WebduinodashboardComponent', () => {
  let component: WebduinodashboardComponent;
  let fixture: ComponentFixture<WebduinodashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebduinodashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebduinodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
