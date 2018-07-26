import { Component, OnInit, Input } from '@angular/core';


import { Employee } from '../employee';


@Component({
    selector: 'app-update-emp-input',
    templateUrl: './update-emp-input.component.html',
    styleUrls: ['./update-emp-input.component.css']
})
export class UpdateEmpInputComponent implements OnInit {
    @Input() employee: Employee;

    constructor() { }

    ngOnInit() {
        this.getEmployee();
    }

    getEmployee(): void {
    }
}
