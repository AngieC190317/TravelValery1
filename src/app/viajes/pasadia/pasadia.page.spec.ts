import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasadiaPage } from './pasadia.page';

describe('PasadiaPage', () => {
  let component: PasadiaPage;
  let fixture: ComponentFixture<PasadiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PasadiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
