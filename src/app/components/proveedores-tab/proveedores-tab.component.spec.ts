import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresTabComponent } from './proveedores-tab.component';

describe('ProveedoresTabComponent', () => {
  let component: ProveedoresTabComponent;
  let fixture: ComponentFixture<ProveedoresTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedoresTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoresTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
