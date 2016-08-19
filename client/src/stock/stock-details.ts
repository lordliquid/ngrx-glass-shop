import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Stock} from '../common/models/stock.model';


@Component({
    selector: 'stock-detail',
    template: `
        <h1>Details for {{selectedStock.name}}</h1>
    `
})
export class StockDetail {
    originalName: string;
    selectedStock: Stock;

    @Input() set item(value: Stock){
     if (value) this.originalName = value.name;
        this.selectedStock = Object.assign({}, value);
  }
}
