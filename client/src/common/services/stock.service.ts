import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {AppStore} from '../models/appstore.model';
import {Stock} from '../models/stock.model';

const BASE_URL = 'http://localhost:3000/stock/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class StockService {
    stock: Observable<any>;

    constructor(private http: Http, private store: Store<AppStore>) {
        this.stock = store.select('stock');
    }

    loadStocks() {
        this.http.get(BASE_URL)
            .map(res => res.json())
            .map(payload => ({ type: 'ADD_STOCK', payload }))
            .subscribe(action => this.store.dispatch(action));
    }

    saveStock(stock: Stock) {
        (stock.id) ? this.updateStock(stock) : this.createStock(stock);
    }

    createStock(stock: Stock) {
        this.http.post(`${BASE_URL}`, JSON.stringify(stock), HEADER)
            .map(res => res.json())
            .map(payload => ({ type: 'CREATE_STOCK', payload }))
            .subscribe(action => this.store.dispatch(action));
    }

    updateStock(stock: Stock) {
        this.http.put(`${BASE_URL}${stock.id}`, JSON.stringify(stock), HEADER)
            .subscribe(action => this.store.dispatch({ type: 'UPDATE_STOCK', payload: stock }));
    }

    deleteStock(stock: Stock) {
        this.http.delete(`${BASE_URL}${stock.id}`)
            .subscribe(action => this.store.dispatch({ type: 'DELETE_STOCK', payload: stock }));
    }
}
