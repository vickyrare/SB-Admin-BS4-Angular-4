import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { PageHeaderModule } from '../../shared';
import {CustomerService} from '../../services/customer.service';

@NgModule({
    imports: [
        CommonModule,
        CustomersRoutingModule,
        PageHeaderModule
    ],
    providers: [CustomerService],
    declarations: [CustomersComponent]
})
export class CustomersModule { }
