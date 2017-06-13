import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbyinitiative'
})
export class SortbyinitiativePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const arr = value as object[];
    arr.sort((a, b) =>  b['initiative'] - a['initiative']);
    return arr;
  }

}
