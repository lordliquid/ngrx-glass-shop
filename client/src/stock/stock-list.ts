import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Stock} from '../common/models/stock.model';
import {StockDetail} from './stock-details';
import {Router} from '@angular/router';

@Component({
    selector: 'stock-list',
    template: `
    <table id="stockList" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
    <thead>
        <tr>
            <th class="mdl-data-table__cell--non-numeric">Name</th>
            <th>Description</th>
            <th>Width</th>
            <th>Height</th>
            <th>Thickness</th>
        </tr>
    </thead>
    <tbody *ngFor="let item of stock">
        <tr (click)="selected.emit(item)">
            <td class="mdl-data-table__cell--non-numeric">{{item.name}}</td>
            <td>{{item.description}}</td>
            <td>{{item.width}}</td> 
            <td>{{item.height}}</td>
            <td>{{item.thickness}}</td>                 
        </tr>
    </tbody>
</table>
    `
})
export class StockList {
    @Input() stock: Stock[];
    @Output() selected = new EventEmitter();
}
