import { Component, OnInit } from '@angular/core';
import {Customer} from "./customer";

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
    customers: Customer[];
    constructor() {
        this.customers = [
            new Customer("John", "Cena", "johnc", "B1"),
            new Customer("Ricky", "Chen", "rickyc", "B1"),
        ]
    }

    ngOnInit() { }
}
