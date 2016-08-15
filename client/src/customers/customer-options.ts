import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
    selector: 'customer-options',
    template: `
        <tr>
            <td class="mdl-data-table__cell--non-numeric">
                <button id="deleteButton" 
                    class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
                    (click)="optionSelected.emit('DELETE');">
                    <i class="material-icons">delete</i>
                </button>
            </td>
        </tr>
    `
})
export class CustomerOptions {
    @Output() optionSelected = new EventEmitter();
}