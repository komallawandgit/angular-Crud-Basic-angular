import { TestBed } from '@angular/core/testing';

import { MyDateService } from './my-date.service';

describe('MyDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyDateService = TestBed.get(MyDateService);
    expect(service).toBeTruthy();
  });
});
