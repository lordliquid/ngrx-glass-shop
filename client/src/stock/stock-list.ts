import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Stock} from '../common/models/stock.model';

@Component({
    selector: 'stock-list',
    template: `
    <table id="stockList" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
    <thead>
        <tr>
            <th class="mdl-data-table__cell--non-numeric">Name</th>
            <th>Description</th>
            <th>Size</th>
            <th>Thickness</th>
        </tr>
    </thead>
    <tbody *ngFor="let item of stock">
        <tr (click)="selectedStock(item)">
            <td class="mdl-data-table__cell--non-numeric">{{item.name}}</td>
            <td>{{item.description}}</td>
            <td>{{item.size}}</td> 
            <td>{{item.thickness}}</td>                 
        </tr>
    </tbody>
</table>
    `
})
export class StockList {
    @Input() stock: Stock[];

    currentStockItem: Stock;
    selectedCustomer(stockItem: Stock) {
        this.currentStockItem = stockItem;
    }
}