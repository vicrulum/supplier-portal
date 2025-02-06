import { TestBed } from '@angular/core/testing';

import { OrderConfirmationService } from './order-confirmation.service';

describe('OrderConfirmationService', () => {
  let service: OrderConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
