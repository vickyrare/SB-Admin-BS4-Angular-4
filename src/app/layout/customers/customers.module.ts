import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        CustomersRoutingModule,
        PageHeaderModule
    ],
    declarations: [CustomersComponent]
})
export class CustomersModule { }
