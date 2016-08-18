import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {StockService} from '../common/services/stock.service.ts';
import {AppStore} from '../common/models/appstore.model';
import {Stock} from '../common/models/stock.model';
import {StockList} from './stock-list';
import {StockAdd} from './stock-add';
import {Glass} from '../common/models/glass.model';

import {Gadget} from '../common/models/gadget.model';
import {GadgetService} from '../common/services/gadget.service.ts';

@Component({
    selector: 'stock',
    directives: [StockAdd, StockList],
    providers: [StockService],
    template: `
        <h1>Stock</h1>
        <stock-add></stock-add>
        <stock-list [stock]="stock | async"></stock-list>
    `
})
export class StockComponent {
    stock: Observable<Array<Stock>>;
    selectedStockStock: Observable<any>;
    gadget: Observable<Gadget>;

    constructor(private stockService: StockService,
                private gadgetService: GadgetService,
                private store: Store<AppStore>) {
        this.stock = stockService.stock;
        this.selectedStockStock = store.select('selectedStockStock');
        this.selectedStockStock.subscribe(v => console.log(v));

        this.gadget = gadgetService.gadget;

        stockService.loadStocks();
    }

    resetStock() {
        let emptyStock: Stock = {
            id: null,
            name: '',
            description: '',
            thickness: null,
            width: null,
            height: null,
            priceA: null,
            priceT: null,
            priceCut: null
        };
    this.store.dispatch({type: 'SELECT_STOCK', payload: emptyStock});
  }

  selectStock(stock: Stock) {
    this.store.dispatch({type: 'SELECT_STOCK', payload: stock});
  }

  saveStock(stock: Stock) {
    this.stockService.saveStock(stock);

    // Generally, we would want to wait for the result of `stocksService.saveStock`
    // before resetting the current stock.
    this.resetStock();
  }

  deleteStock(stock: Stock) {
    this.stockService.deleteStock(stock);

    // Generally, we would want to wait for the result of `stocksService.deleteStock`
    // before resetting the current stock.
    this.resetStock();
  }
}