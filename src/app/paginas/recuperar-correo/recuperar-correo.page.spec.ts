import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarCorreoPage } from './recuperar-correo.page';

describe('RecuperarCorreoPage', () => {
  let component: RecuperarCorreoPage;
  let fixture: ComponentFixture<RecuperarCorreoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarCorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
