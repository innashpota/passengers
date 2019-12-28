import {TestBed} from '@angular/core/testing';

import {AppService} from './app.service';

describe('AppService', () => {
  let service: AppService;
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    service = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });

  it('should call submit(), return Observable {status: \'OK\'}}', () => {
    service.submit().subscribe(data => expect(data).toEqual({status: 'OK'}));
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
