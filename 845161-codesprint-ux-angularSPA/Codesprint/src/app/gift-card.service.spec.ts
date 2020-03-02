import { TestBed } from '@angular/core/testing';

import { GiftCardService } from './gift-card.service';

describe('GiftCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftCardService = TestBed.get(GiftCardService);
    expect(service).toBeTruthy();
  });
});
