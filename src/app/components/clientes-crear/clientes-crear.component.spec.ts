import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesCrearComponent } from './clientes-crear.component';

describe('ClientesCrearComponent', () => {
  let component: ClientesCrearComponent;
  let fixture: ComponentFixture<ClientesCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesCrearComponent]
    });
    fixture = TestBed.createComponent(ClientesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
