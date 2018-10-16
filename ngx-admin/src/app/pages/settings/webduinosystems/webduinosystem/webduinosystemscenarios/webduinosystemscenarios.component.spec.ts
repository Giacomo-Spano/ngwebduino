import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebduinosystemscenariosComponent } from './webduinosystemscenarios.component';

describe('WebduinosystemscenariosComponent', () => {
  let component: WebduinosystemscenariosComponent;
  let fixture: ComponentFixture<WebduinosystemscenariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebduinosystemscenariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebduinosystemscenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
