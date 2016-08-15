import {Item} from './item.model';
import {Widget} from './widget.model';
import {Customer} from './customer.model';

export interface AppStore {
  customers: Customer[];
  selectedCustomer: Customer;
  items: Item[];
  selectedItem: Item;
  widgets: Widget[];
  selectedWidget: Widget;
};
