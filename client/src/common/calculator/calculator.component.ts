import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Stock} from '../models/stock.model';
import {Glass, Color} from '../models/glass.model';

@Component({
    selector: 'calculator',
    template: require('./calculator.component.html'),
})
export class Calculator {
    showList: boolean = false;
    stock: Stock;
    //thicknessFractions: Array<any>;

    thickness = {
        '1/32': .03125,
        '1/16': .0625,
        '3/32': .09375,
        '1/8' : .125,
        '5/32' : .15625,
        '3/16' : .1875,
        '7/32' : .21875,
        '1/4' : .25,
        '9/32' : .28125,
        '5/16' : .3125,
        '11/32' : .34375,
        '3/8' : .375,
        '13/32' : .40625,
        '7/16' : .4375,
        '15/32' : .46875,
        '1/2' : .5,
        '17/32' : .53125,
        '9/16' : .5625,
        '19/32' : .59375,
        '5/8' : .625,
        '21/32' : .65625,
        '11/16' : .6875,
        '23/32' : .71875,
        '3/4' : .75,
        '25/32' : .78125,
        '13/16' : .8125,
        '27/32' : .84375,
        '7/8' : .875,
        '29/32' : .90625,
        '15/16' : .9375,
        '31/32' : .96875,
        'Inch' : 1
    };

    unit = {
        name: 'Mirror',
        width: 0,
        height: 0,
        price: 0,
        total: 0,
        linearInch: 0,
        subtotal: 0,
        sqrFt: 0,
        quantity: 1,
        tempered: false,
        bars: 0,
        canTemper: false,
        canBar: true
    };

    thicknessFractions = Object.keys(this.thickness);

    constructor() {
        console.log(this.thicknessFractions);
    }



    getLinearInch(unit: { width: number, height: number, linearInch: number }) {
        this.unit = Object.assign({}, unit, {
            linearInch: (unit.width * 2) + (unit.height * 2)
        });
    }

    getSqrFt(unit: { width: number, height: number, sqrFt: number }) {
        this.unit = Object.assign({}, unit, {
            sqrFt: this.round((unit.width * unit.height) / 144)
        });
    }

    getTotal(unit: { price: number, sqrFt: number, total: number }) {
        this.unit = Object.assign({}, unit, {
            total: this.round(unit.price * unit.sqrFt)
        });
    }

    getSubtotal(unit: { quantity: number, total: number, subtotal: number }) {
        this.unit = Object.assign({}, unit, {
           subtotal: this.round(unit.quantity * unit.total)
        });
    }

    calculate() {
        this.getSqrFt(this.unit);
        this.getLinearInch(this.unit);
        this.getTotal(this.unit);
        this.getSubtotal(this.unit);
        this.getLinearInch(this.unit);

        console.log('Current Unit: ', this.unit);
    }

    round(num: number) {
        return parseFloat((num).toFixed(2));
    }

    toggleBars() {
        if (!this.unit.bars) {
            this.addBars(this.unit);
        } else {
            this.removeBars();
        }
        this.calculate();
    }

    addBars(unit: { bars: number, canBar: boolean}) {
        if (unit.canBar) {
            return Object.assign({}, unit, { bars: 1.55 });
        } else {
            console.log(`Unable to add bars, bars property
             not found or unit is not applicable for bars.`);
            return unit;
        }
    }

    removeBars() {
       // this.unit.price = this.round(parseFloat() - 1.90);
    }

    toggleList() {
        this.showList = !this.showList;
    }
}


    // unit: any = {
    //     type: 'Mirror',
    //     width: 0,
    //     height: 0,
    //     price: 0,
    //     result: 0,
    //     linearInch: 0,
    //     subtotal: 0,
    //     sqrFt: 0,
    //     quantity: 1,
    //     tempered: false,
    //     bars: false,
    //     canTemper: false,
    //     canBar: true,

    //     // getLinearInch: () => (this.unit.width * 2) + (this.unit.height * 2),

    //     // getSqrFt: () => this.round((this.unit.width * this.unit.height / 144)),

    //     // getResult: () => this.round((this.unit.price * this.unit.sqrFt)),

    //     // getSubtotal: () => this.round((this.unit.quantity * this.unit.result))
    // };
