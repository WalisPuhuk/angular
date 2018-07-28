import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../mock-employees';

@Component({
  selector: 'app-list-all-emp',
  templateUrl: './list-all-emp.component.html',
  styleUrls: ['./list-all-emp.component.css']
})
export class ListAllEmpComponent implements OnInit {
  employees = EMPLOYEES;
  
  constructor() { }

  ngOnInit() {
  }
  
}
