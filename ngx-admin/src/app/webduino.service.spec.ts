import { TestBed } from '@angular/core/testing';

import { WebduinoService } from './webduino.service';

describe('WebduinoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebduinoService = TestBed.get(WebduinoService);
    expect(service).toBeTruthy();
  });
});
