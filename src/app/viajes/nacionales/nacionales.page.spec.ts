import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NacionalesPage } from './nacionales.page';

describe('NacionalesPage', () => {
  let component: NacionalesPage;
  let fixture: ComponentFixture<NacionalesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
