import {Component} from '@angular/core';

@Component({
    selector: 'calculator',
    template: require('./calculator.component.html'),
})
export class Calculator {
    
    showList: boolean = false;

    unit: any = {
        type: 'Mirror',
        width: 0,
        height: 0,
        result: 0,
        sqrFt: 0,
        price: 0,
        tempered: false,
        bars: false,
        canTemper: false,
        canBar: false,
        linearInch: 0
    }

    constructor() {
        
    }

    calculate() {
        let sqrInch = this.unit.width * this.unit.height;
        this.unit.result = 0;

        this.unit.sqrFt = this.round(sqrInch / 144);

        this.unit.linearInch = this.rectangleLinearInch(this.unit.width, this.unit.height);
        this.addToTotal(this.unit.sqrFt * this.unit.price);

        if (isNaN(this.unit.result)) {
            this.unit.result = 0;
        }
    }

    addToTotal(amount) {
        this.unit.result += this.round(amount);
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

    rectangleLinearInch(width, height) {
        return (width * 2) + (height * 2);
    }
}