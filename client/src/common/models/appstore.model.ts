import {Item} from './item.model';
import {Widget} from './widget.model';
import {Customer} from './customer.model';
import {Stock} from './stock.model';

export interface AppStore {
  customers: Customer[];
  selectedCustomer: Customer;
  items: Item[];
  stock: Stock[];
  selectedItem: Item;
  widgets: Widget[];
  selectedWidget: Widget;
};
