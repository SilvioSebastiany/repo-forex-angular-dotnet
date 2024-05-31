import { TestBed } from '@angular/core/testing';

import { ParidadeService } from './paridade.service';

describe('ParidadeService', () => {
  let service: ParidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
