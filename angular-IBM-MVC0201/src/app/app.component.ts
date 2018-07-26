import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IBM_emp_0201MVC_Single-table';

  employees = EMPLOYEES;
  
  ngOnInit() {
  }
}
