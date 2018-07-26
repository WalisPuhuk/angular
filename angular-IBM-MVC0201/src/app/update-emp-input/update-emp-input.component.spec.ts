import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpInputComponent } from './update-emp-input.component';

describe('UpdateEmpInputComponent', () => {
  let component: UpdateEmpInputComponent;
  let fixture: ComponentFixture<UpdateEmpInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmpInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
