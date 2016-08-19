import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Stock} from '../common/models/stock.model';


@Component({
    selector: 'stock-detail',
    template: `
        <h1>Details for {{selectedStock.name}} 
            <span>
                <button id="stockDetailsCancelButton" 
                    class="mdl-button mdl-js-button mdl-button--raised 
                    mdl-js-ripple-effect mdl-button--accent"
                    (click)="cancelled.emit(selectedStock)">
                    Cancel
                </button>
            </span>
        </h1>
        <p>{{selectedStock | json}}</p>
    `
})
export class StockDetail {
    originalName: string;
    selectedStock: Stock;
    @Output() cancelled = new EventEmitter();

    OnInit() {
        this.cancelled.emit('');
    }

    @Input() set item(value: Stock){
     if (value) this.originalName = value.name;
        this.selectedStock = Object.assign({}, value);
  }
}
