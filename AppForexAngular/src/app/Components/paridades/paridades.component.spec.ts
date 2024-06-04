import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParidadesComponent } from './paridades.component';

describe('ParidadesComponent', () => {
  let component: ParidadesComponent;
  let fixture: ComponentFixture<ParidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
