import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Stock} from '../common/models/stock.model';

@Component({
    selector: 'stock-add',
    template: `
<div class="mdl-card mdl-shadow--2dp">
<div class="mdl-card__title">
    <h2 class="mdl-card__title-text">Add Stock</h2>
</div>
    <form novalidate>
    <div class="mdl-card__supporting-text">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text"
                [(ngModel)]="newStock.name">
            <label class="mdl-textfield__label" for="name">Name</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input #phone class="mdl-textfield__input" type="text"
                [(ngModel)]="newStock.description">
            <label class="mdl-textfield__label" for="description">Description</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text"
                [(ngModel)]="newStock.width">
            <label class="mdl-textfield__label" for="width">Width</label>
        </div>          
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text"
                [(ngModel)]="newStock.height">
            <label class="mdl-textfield__label" for="height">Height</label>
        </div>                  
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text"
                [(ngModel)]="newStock.thickness">
            <label class="mdl-textfield__label" for="thickness">Thickness</label>
        </div> 
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text"
                [(ngModel)]="newStock.priceA">
            <label class="mdl-textfield__label" for="priceA">Annealed Price</label>
        </div>    
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text"
                [(ngModel)]="newStock.priceCut">
            <label class="mdl-textfield__label" for="priceCut">Cut Size Price</label>
        </div> 
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text"
                [(ngModel)]="newStock.priceT">
            <label class="mdl-textfield__label" for="priceT">Tempered Price</label>
        </div>              
    </div>
    </form>

<div class="mdl-card__actions mdl-card--border"> 
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" 
        (click)="add.emit(newStock)">
            Add
    </a>
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" 
        (click)="cancelled.emit(newStock)">
            Cancel
    </a>
</div>
</div>
    `
})
export class StockAdd {
    newStock: Stock;
    originalName: string;
    @Output() add = new EventEmitter();
    @Output() cancelled = new EventEmitter();

    @Input() set stock(value: Stock) {
        if (value) this.originalName = value.name;
        this.newStock = Object.assign({}, value);
    }
}
