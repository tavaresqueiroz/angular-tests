import { TestBed, inject } from '@angular/core/testing';

import { HuezaoService } from './huezao.service';

describe('HuezaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HuezaoService]
    });
  });

  it('should be created', inject([HuezaoService], (service: HuezaoService) => {
    expect(service).toBeTruthy();
  }));
});
