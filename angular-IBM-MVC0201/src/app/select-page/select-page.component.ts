import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../mock-employees';

@Component({
	selector: 'app-select-page',
	templateUrl: './select-page.component.html',
	styleUrls: ['./select-page.component.css']
})
export class SelectPageComponent implements OnInit {
	employees = EMPLOYEES;

	constructor() { }

	ngOnInit() {
		console.log(this.getEmp(7012));
	}

	getEmp(empno) {
		for (let employee of this.employees){
			let emp = this.employees.find(x => x.empno === empno)
			if(emp)
				return emp;
		}
	}
}
