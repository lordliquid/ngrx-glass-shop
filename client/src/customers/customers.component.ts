import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Customer} from '../common/models/customer.model';
import {CustomerSearch} from './customer-search';
import {CustomerList} from './customer-list';
import {CustomerAdd} from './customer-add';
import {CustomerService} from '../common/services/customers.service';
import {GadgetService} from '../common/services/gadget.service.ts';
import {Gadget} from '../common/models/gadget.model';
import {Store} from '@ngrx/store';
import {AppStore} from '../common/models/appstore.model';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'customer-main',
    directives: [CustomerSearch, CustomerList, CustomerAdd],
    providers: [CustomerService],
    template : `
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell mdl-cell--6-col">
                <customer-search id="customerSearch"
                    (update)="term = $event">
                </customer-search>
                <customer-list id="customerList"
                    [customers]="customers | async"
                    (selected)="selectCustomer($event)" 
                    (deleted)="deleteCustomer($event)"
                    [(term)]="term">
                </customer-list>
            </div>
            <div class="mdl-cell mdl-cell mdl-cell--6-col">
                <customer-add id="customerAdd"
                    (add)="saveCustomer($event)"
                    (cancelled)="resetCustomer($event)"
                    [customer]="selectedCustomer | async">
                </customer-add>
            </div>
        </div>
    `
})
export class Customers {
    @Input() term;

    gadget: Observable<Gadget>;
    customers: Observable<Array<Customer>>;
    selectedCustomer: Observable<any>;

    constructor(private customerService: CustomerService,
                private gadgetService: GadgetService,
                private store: Store<AppStore>) {
        this.customers = customerService.customers;
        this.selectedCustomer = store.select('selectedCustomer');
        this.selectedCustomer.subscribe(v => console.log(v));
        this.gadget = gadgetService.gadget;

        customerService.loadCustomers();
    }

resetCustomer() {
    let emptyCustomer: Customer = {id: null, name: '', phone: '', address: ''};
    this.store.dispatch({type: 'SELECT_CUSTOMER', payload: emptyCustomer});
  }

  selectCustomer(customer: Customer) {
    this.store.dispatch({type: 'SELECT_CUSTOMER', payload: customer});
  }

  saveCustomer(customer: Customer) {
    this.customerService.saveCustomer(customer);

    // Generally, we would want to wait for the result of `customersService.saveCustomer`
    // before resetting the current customer.
    this.resetCustomer();
  }

  deleteCustomer(customer: Customer) {
    this.customerService.deleteCustomer(customer);

    // Generally, we would want to wait for the result of `customersService.deleteCustomer`
    // before resetting the current customer.
    this.resetCustomer();
  }

  searchCustomer() {
      this.customerService.searchCustomer(this.term);
  }
}
