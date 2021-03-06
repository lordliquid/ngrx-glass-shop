import {Item} from './item.model';
import {Widget} from './widget.model';
import {Customer} from './customer.model';

export interface Gadget {
  items: Item[];
  widgets: Widget[];
  customers: Customer[];
};
