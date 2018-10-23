import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebduinosystemComponent } from './webduinosystem.component';

describe('HeaterComponent', () => {
  let component: WebduinosystemComponent;
  let fixture: ComponentFixture<WebduinosystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebduinosystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebduinosystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
