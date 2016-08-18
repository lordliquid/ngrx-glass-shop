import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {Items} from './items/items.component';
import {Customers} from './customers/customers.component';
import {StockComponent} from './stock/stock.component';
import {Widgets} from './widgets/widget.component';
import {Calculator} from './calculator/calculator.component';
import {Devtools} from '@ngrx/devtools';

import {AppStore} from './common/models/appstore.model';

@Component({
  selector: 'my-app',
  template: require('./app.html'),
  providers: [Items, Widgets, Customers, StockComponent],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/items', component: Items },
  { path: '/calculator', component: Calculator },
  { path: '/customers', component: Customers },
  { path: '/stock', component: StockComponent}
])
export class App {
  public links = {
    items: ['/items'],
    calculator: ['/calculator'],
    customers: ['/customers'],
    stock: ['/stock']
  };

  constructor(
    private router: Router
  ) { }

  goTo(location: any) {
    this.router.navigate(location);
  }
}
