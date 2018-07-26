import { Component, OnInit, Input } from '@angular/core';


import { Employee } from '../employee';

@Component({
	selector: 'app-list-one-emp',
	templateUrl: './list-one-emp.component.html',
	styleUrls: ['./list-one-emp.component.css']
})
export class ListOneEmpComponent implements OnInit {
	
	constructor() { }

	ngOnInit() {
	}

	getEmployee(): void {
	}
	
}
