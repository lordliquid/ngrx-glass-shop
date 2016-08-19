import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {Items} from './items/items.component';
import {Customers} from './customers/customers.component';
import {StockComponent} from './stock/stock.component';
import {Widgets} from './widgets/widget.component';
import {Calculator} from './calculator/calculator.component';
import {Devtools} from '@ngrx/devtools';

import {AppStore} from './common/models/appstore.model';
import {StockDetail} from './stock/stock-details';

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
  { path: '/stock', component: StockComponent},
  { path: '/details/:id', component: StockDetail }
])
export class App {
  @Input() link: any;
  public links = {
    items: ['/items'],
    calculator: ['/calculator'],
    customers: ['/customers'],
    stock: ['/stock'],
    stockDetails: ['/stock/details']
  };

  constructor(
    private router: Router
  ) { }

  public goTo(location: any) {
    this.router.navigate(location);
  }
}
