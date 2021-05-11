import { TestBed } from '@angular/core/testing';

import { User.EffectsService } from './user.effects.service';

describe('User.EffectsService', () => {
  let service: User.EffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(User.EffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
