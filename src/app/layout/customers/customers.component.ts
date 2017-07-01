import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';
import {CustomerService} from '../../services/customer.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
    customers: Customer[] = [];
    constructor(private customerService: CustomerService) {
    }

    ngOnInit() {
        this.customerService
            .getAll()
            .subscribe(c => this.customers = c);
    }
}
