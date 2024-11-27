import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InternacionalesPage } from './internacionales.page';

describe('InternacionalesPage', () => {
  let component: InternacionalesPage;
  let fixture: ComponentFixture<InternacionalesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InternacionalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
