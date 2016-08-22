import {Injectable} from '@angular/core';
import {Reducer, Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as Rx from 'rxjs/Rx'; //

@Injectable()
export class ObjectReset {

    Reset(obj: any) {
        console.log('from function: ', obj);
        let newObject: typeof obj;
        let keys: Array<any>;
        keys = Object.keys(obj);
        keys.map(key =>
        {
            if (typeof (obj[key]) === typeof '') {
                newObject[key] = '';
            }
            if (typeof (obj[key]) === typeof 0) {
                newObject[key] = null;
            }
            if (typeof (obj[key]) === typeof 0.0) {
                newObject[key] = null;
            }
            if (typeof (obj[key]) === typeof undefined) {
                newObject[key] = undefined;
            }
            if (typeof (obj[key]) === typeof null) {
                newObject[key] = null;
            }
            if (typeof (obj[key]) === typeof {}) {
                newObject[key] = this.Reset(obj[key]);
            }
        });
        console.log('from function: ', newObject);
        return newObject;
    }
}

// var objectReset: Object;
// var newObject: Object = {};
// var obj = {
//   name: 'Robert Cutright',
//   id: 234,
//   price: 34.34,
//   inventory: {
//     pocket: 'Wallet',
// 	more: {
// 		test: 08.8
// 	}
//   }
// }

// this.objectReset = ObjectReset(obj);

// function ObjectReset(obj: Object) {
//  	let newObject: Object = {};
//     let keys: Array<any>;

// 	keys = Object.keys(obj);
	
// 	keys.map(key =>
// 	{
// 		if (typeof (obj[key]) === typeof '') {
// 			newObject[key] = '';
// 		}
// 		if (typeof (obj[key]) === typeof 0) {
// 			newObject[key] = null;
// 		}
// 		if (typeof (obj[key]) === typeof 0.0) {
// 			newObject[key] = null;
// 		}
// 		if (typeof (obj[key]) === typeof undefined) {
// 			newObject[key] = undefined;
// 		}
// 		if (typeof (obj[key]) === typeof null) {
// 			newObject[key] = null;
// 		}
// 		if (typeof (obj[key]) === typeof {}) {
// 			newObject[key] = ObjectReset(obj[key]);
// 		}
// 	});
// 	return newObject;
// }

// console.log("Original Object: ", obj);
// console.log("New Object: ", objectReset);

