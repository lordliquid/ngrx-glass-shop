import {Component, EventEmitter, Output, Input} from '@angular/core';
import {Customer} from '../common/models/customer.model';

@Component({
    selector: 'customer-add',
    template: `
            <div class="mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text">Add Customer</h2>
                </div>
                    <form novalidate>
                    <div class="mdl-card__supporting-text">
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="text"
                                [(ngModel)]="newCustomer.name">
                            <label class="mdl-textfield__label" for="search">Name</label>
                        </div>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="text"
                                [(ngModel)]="newCustomer.phone">
                            <label class="mdl-textfield__label" for="search">Phone</label>
                        </div>
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input class="mdl-textfield__input" type="text"
                                [(ngModel)]="newCustomer.address">
                            <label class="mdl-textfield__label" for="search">Address</label>
                        </div>                        
                    </div>
                    </form>
                
                <div class="mdl-card__actions mdl-card--border"> 
                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" 
                        (click)="add.emit(newCustomer)">
                            Add
                    </a>
                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" 
                        (click)="cancelled.emit(newCustomer)">
                            Cancel
                    </a>
                </div>
            </div>
    `
})
export class CustomerAdd {
    originalName: string;
    newCustomer: Customer;
    @Output() add = new EventEmitter();
    @Output() cancelled = new EventEmitter();

    @Input() set customer(value: Customer) {
        if (value) this.originalName = value.name;
        this.newCustomer = Object.assign({}, value);
    }
}
