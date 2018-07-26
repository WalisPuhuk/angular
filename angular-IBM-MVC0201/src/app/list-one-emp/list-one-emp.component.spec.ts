import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOneEmpComponent } from './list-one-emp.component';

describe('ListOneEmpComponent', () => {
  let component: ListOneEmpComponent;
  let fixture: ComponentFixture<ListOneEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOneEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOneEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
