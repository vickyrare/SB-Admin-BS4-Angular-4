import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Customer } from '../layout/customers/customer';

@Injectable()
export class CustomerService {
    private baseUrl: string = 'http://localhost:8080';

    constructor(private http: Http) {}

    getAll(): Observable<Customer[]> {
        let customers = this.http
            .get(`${this.baseUrl}/customers`, { headers: this.getHeaders()})
            .map(mapCustomers);
        return customers;
    }

    private getHeaders() {
        // I included these headers because otherwise FireFox
        // will request text/html
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    get(id: number): Observable<Customer> {
        let customer = this.http
            .get(`${this.baseUrl}/customer/${id}`, {headers: this.getHeaders()})
            .map(mapCustomer);
        return customer;
    }

    /*save(customer: Customer) : Observable<Response>{
        // this won't actually work because the StarWars API
        // is read-only. But it would look like this:
        return this
            .http
            .put(`${this.baseUrl}/customers/${customer.id}`,
                JSON.stringify(customer),
                {headers: this.getHeaders()});
    }*/

}


function mapCustomers(response: Response): Customer[] {
    // The response of the API has a results
    // property with the actual results
    return response.json()._embedded.customers.map(toCustomer);
}

function toCustomer(r: any): Customer {
    let customer = <Customer>({
        customerNumber: r.customerNumber,
        startDate: r.startDate,
        endDate: r.endDate,
        active: r.active
    });
    console.log('Parsed customer:', customer);
    return customer;
}

function mapCustomer(response: Response): Customer {
    // toCustomer looks just like in the previous example
    return toCustomer(response.json());
}
