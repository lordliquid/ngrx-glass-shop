import {Component, EventEmitter, Output} from '@angular/core';
import {CustomerList} from './customer-list';

@Component({
    selector: 'customer-search',
    directives: [CustomerList],
    template: `<form action="#">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input #box class="mdl-textfield__input" type="text" id="search" 
            (input)="update.emit(box.value)">
            <label class="mdl-textfield__label" for="search">Search</label>
        </div>
    </form>
    `
})
export class CustomerSearch {
    @Output() update = new EventEmitter();

    ngOnInit() {
        this.update.emit('');
    }
}
