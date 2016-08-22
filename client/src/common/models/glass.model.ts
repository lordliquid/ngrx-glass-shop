export interface Glass {
        name: 'Mirror';
        thickness: number;
        width: number;
        height: number;
        price: number;
        total: number;
        linearInch: number;
        subtotal: number;
        sqrFt: number;
        quantity: number;
        bars: number;
        tempered: boolean;
        canTemper: boolean;
        canBar: boolean;

        calculate: any;
};
export enum Thickness {
        '1/32'= .03125,
        '1/16'= .0625,
        '3/32'= .09375,
        '1/8' = .125,
        '5/32' = .15625,
        '3/16' = .1875,
        '7/32' = .21875,
        '1/4' = .25,
        '9/32' = .28125,
        '5/16' = .3125,
        '11/32' = .34375,
        '3/8' = .375,
        '13/32' = .40625,
        '7/16' = .4375,
        '15/32' = .46875,
        '1/2' = .5,
        '17/32' = .53125,
        '9/16' = .5625,
        '19/32' = .59375,
        '5/8' = .625,
        '21/32' = .65625,
        '11/16' = .6875,
        '23/32' = .71875,
        '3/4' = .75,
        '25/32' = .78125,
        '13/16' = .8125,
        '27/32' = .84375,
        '7/8' = .875,
        '29/32' = .90625,
        '15/16' = .9375,
        '31/32' = .96875,
        'Inch' = 1
    };

export class Color {
    Clear: 'Clear';
    Rain: 'Rain';
}

