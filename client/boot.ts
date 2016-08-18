import 'core-js';
require('zone.js');
import 'rxjs/Rx';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {instrumentStore} from '@ngrx/devtools';

import {ROUTER_PROVIDERS} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {provideStore} from '@ngrx/store';
import {App} from './src/app';
import {ItemsService} from './src/common/services/items.service';
import {StockService} from './src/common/services/stock.service';
import {items} from './src/common/stores/items.store';
import {selectedItem} from './src/common/stores/selectedItem.store';
import {selectedWidget} from './src/common/stores/selectedWidget.store';
import {GadgetService} from './src/common/services/gadget.service.ts';
import {customers} from './src/common/stores/customers.store';
import {CustomerService} from './src/common/services/customers.service';
import {selectedCustomer} from './src/common/stores/selectedCustomer.store';
import {stock} from './src/common/stores/stock.store';

bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  ItemsService,
  GadgetService,
  CustomerService,
  StockService,
  provideStore({items, selectedItem, selectedWidget, customers, selectedCustomer, stock}),
  instrumentStore()
]);
