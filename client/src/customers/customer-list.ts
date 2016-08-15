import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Customer} from '../common/models/customer.model';
import {SearchPipe} from '../pipes/search';
import {CustomerOptions} from './customer-options';

@Component({
    selector: 'customer-list',
    pipes: [SearchPipe],
    directives: [CustomerOptions],
    template: `
<table id="customerList" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
    <thead>
        <tr>
            <th class="mdl-data-table__cell--non-numeric">Name</th>
            <th>Phone</th>
            <th>Address</th>
        </tr>
    </thead>
    <tbody *ngFor="let customer of customers | search: term">
        <tr (click)="selectedCustomer(customer)">
            <td class="mdl-data-table__cell--non-numeric">{{customer.name}}</td>
            <td>{{customer.phone}}</td>
            <td>{{customer.address}}</td>                  
        </tr>
        <customer-options 
            *ngIf="toggle(customer)"
            (optionSelected)="event.emit({option: $event, arg: customer})">
        </customer-options>
    </tbody>
</table>
    `
})
export class CustomerList {
    @Input() term;
    @Input() customers: Customer[];

    @Output() selected = new EventEmitter();
    @Output() deleted = new EventEmitter();

    @Output() event = new EventEmitter();

    currentCustomer: Customer;
    selectedCustomer(customer: Customer) {
        this.currentCustomer = customer;
        this.selected.emit(customer);
    }

    toggle(customer: Customer) {
        return this.currentCustomer === customer;
    }
}
