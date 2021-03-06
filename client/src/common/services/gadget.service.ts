import {Injectable} from '@angular/core';
import {Reducer, Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {AppStore} from '../models/appstore.model';
import {Gadget} from '../models/gadget.model.ts';
import {Item} from '../models/item.model';
import {Widget} from '../models/widget.model';
import {Customer} from '../models/customer.model';

import * as Rx from 'rxjs/Rx'; //

@Injectable()
export class GadgetService {
  gadget: Observable<Gadget>;
  items: Observable<Array<Item>>;
  widgets: Observable<Array<Widget>>;
  customer: Observable<Array<Customer>>;

  constructor(private store: Store<AppStore>) {
    this.gadget = Rx.Observable.combineLatest(
      store.select('items'),
      store.select('widgets'),
      store.select('customers'),
      (items: Item[] = [], widgets: Widget[] = [], customers: Customer[]) => {
        return {
          items: [...items],
          widgets: [...widgets],
          customers: [...customers]
        };
      });

    this.gadget
      .subscribe(c => console.log('GadgetService.gadget', c));
  }
};
