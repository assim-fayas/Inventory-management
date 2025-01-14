import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderTableComponent } from './purchase-order-table.component';

describe('PurchaseOrderTableComponent', () => {
  let component: PurchaseOrderTableComponent;
  let fixture: ComponentFixture<PurchaseOrderTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseOrderTableComponent]
    });
    fixture = TestBed.createComponent(PurchaseOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
