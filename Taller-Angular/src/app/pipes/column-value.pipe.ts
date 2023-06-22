import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnValue',
  standalone: true,
})
export class ColumnValuePipe implements PipeTransform {
  transform(element: any, position: string): any {
    if (!element || !position || !element.hasOwnProperty(position)) {
      return null;
    }
    return element[position];
  }
}
