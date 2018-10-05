import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebduinoComponent } from './webduino.component';

describe('WebduinoComponent', () => {
  let component: WebduinoComponent;
  let fixture: ComponentFixture<WebduinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebduinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebduinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
