import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {AppStore} from '../models/appstore.model';
import {Customer} from '../models/customer.model';

const BASE_URL = 'http://localhost:3000/customers/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class CustomerService {
  customers: Observable<any>;

  constructor(private http: Http, private store: Store<AppStore>) {
    this.customers = store.select('customers');
  }

  loadCustomers() {
    this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({ type: 'ADD_CUSTOMERS', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  saveCustomer(customer: Customer) {
    (customer.id) ? this.updateCustomer(customer) : this.createCustomer(customer);
  }

  createCustomer(customer: Customer) {
    this.http.post(`${BASE_URL}`, JSON.stringify(customer), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: 'CREATE_CUSTOMER', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateCustomer(customer: Customer) {
    this.http.put(`${BASE_URL}${customer.id}`, JSON.stringify(customer), HEADER)
      .subscribe(action => this.store.dispatch({ type: 'UPDATE_CUSTOMER', payload: customer }));
  }

  deleteCustomer(customer: Customer) {
    this.http.delete(`${BASE_URL}${customer.id}`)
      .subscribe(action => this.store.dispatch({ type: 'DELETE_CUSTOMER', payload: customer }));
  }

  searchCustomer(term: string) {
    this.http.get(BASE_URL)
      .map(res => res.json())
      .subscribe(action => this.store.dispatch({ type: 'SEARCH_CUSTOMER', payload: term }));
  }
}
