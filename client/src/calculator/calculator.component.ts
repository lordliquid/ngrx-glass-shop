import {Component} from '@angular/core';
import {Stock} from '../common/models/stock.model';
import {Thickness, Glass, Color} from '../common/models/glass.model';

@Component({
    selector: 'calculator',
    template: require('./calculator.component.html'),
})
export class Calculator {
    showList: boolean = false;
    stock: Stock;

    unit: any = {
        type: 'Mirror',
        width: 0,
        height: 0,
        price: 0,
        result: 0,
        linearInch: 0,
        subtotal: 0,
        sqrFt: 0,
        quantity: 1,
        tempered: false,
        bars: false,
        canTemper: false,
        canBar: false,

        getLinearInch: () => (this.unit.width * 2) + (this.unit.height * 2),

        getSqrFt: () => parseFloat((this.unit.width * this.unit.height / 144).toFixed(2)),

        getResult: () => parseFloat((this.unit.price * this.unit.sqrFt).toFixed(2)),

        getSubtotal: () => parseFloat((this.unit.quantity * this.unit.result).toFixed(2))
    };

    constructor() {

    }

    addStockItem(item: Stock) {
        this.stock = {
            id: item.id,
            name: item.name,
            thickness: item.thickness,
            width: item.width,
            height: item.height,
            description: item.description,
            priceA: item.priceA,
            priceT: item.priceT,
            priceCut: item.priceCut
        };
    }

    calculate() {
        this.unit.sqrFt = this.unit.getSqrFt();
        this.unit.linearInch = this.unit.getLinearInch();
        this.unit.result = this.unit.getResult();
        this.unit.subtotal = this.unit.getSubtotal();

        console.log('Current Unit: ', this.unit);
    }

    round(num): number {
        return parseFloat((num).toFixed(2));
    }

    toggleBars() {
        if (!this.unit.bars) {
            this.addBars();
        } else {
            this.removeBars();
        }
        this.calculate();
    }

    addBars() {
        this.unit.price = this.round(parseFloat(this.unit.price) + 1.90);
    }

    removeBars() {
        this.unit.price = this.round(parseFloat(this.unit.price) - 1.90);
    }

    toggleList() {
        this.showList = !this.showList;
    }
}
