import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Customer} from '../common/models/customer.model';
import {SearchPipe} from '../pipes/search';

@Component({
    selector: 'customer-list',
    pipes: [SearchPipe],
    template: `
<table id="customerList" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
    <thead>
        <tr>
            <th class="mdl-data-table__cell--non-numeric">Name</th>
            <th>Phone</th>
            <th>Address</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let customer of customers | search: term" 
            (click)="selected.emit(customer)">
            <td class="mdl-data-table__cell--non-numeric">{{customer.name}}</td>
            <td>{{customer.phone}}</td>
            <td>{{customer.address}}</td>     
            <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
                (click)="deleted.emit(customer); $event.stopPropagation();">
                <i class="material-icons">add</i>
            </button>                          
        </tr>   
    </tbody>
</table>
    `
})
export class CustomerList {
    @Input() term;
    @Input() customers: Customer[];
    @Output() selected = new EventEmitter();
    @Output() deleted = new EventEmitter();
}
