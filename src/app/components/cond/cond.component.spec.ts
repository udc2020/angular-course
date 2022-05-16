import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondComponent } from './cond.component';

describe('CondComponent', () => {
  let component: CondComponent;
  let fixture: ComponentFixture<CondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
