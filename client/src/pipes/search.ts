import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(value: Array<any> = [], args: string = '') {
        let newArray = value.filter(this.test(args));
        return newArray;
    }

    test(term) {
        return function check(item){
            return item.name.toLowerCase().includes(term.toLowerCase())
            || item.phone.toString().includes(term)
            || item.address.includes(term);
        };
    }
}
