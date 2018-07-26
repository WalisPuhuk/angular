import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllEmpComponent } from './list-all-emp.component';

describe('ListAllEmpComponent', () => {
  let component: ListAllEmpComponent;
  let fixture: ComponentFixture<ListAllEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
