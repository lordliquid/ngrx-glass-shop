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
import {StockDetail} from './stock-details';

@Component({
    selector: 'stock',
    directives: [StockAdd, StockList, StockDetail],
    providers: [StockService],
    template: `
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell mdl-cell--6-col">
                <stock-list [stock]="stock | async" (selected)="selectStock($event)"></stock-list>
            </div>
            <div class="mdl-cell mdl-cell mdl-cell--6-col">
                <stock-add (add)="saveStock($event)"
                    (cancelled)="resetStock($event)"
                    [stock]="selectedStock | async"></stock-add>
            </div>
            <div class="mdl-cell mdl-cell mdl-cell--6-col">
                <stock-detail [item]="selectedStock | async"></stock-detail>
            </div>
        </div>
    `
})
export class StockComponent {
    @Input() stockId: any;

    stock: Observable<Array<Stock>>;
    selectedStock: Observable<any>;
    gadget: Observable<Gadget>;


    constructor(private stockService: StockService,
                private gadgetService: GadgetService,
                private store: Store<AppStore>) {
        this.stock = stockService.stock;
        this.selectedStock = store.select('selectedStock');
        this.selectedStock.subscribe(v => console.log(v));

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