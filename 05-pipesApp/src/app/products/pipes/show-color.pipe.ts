import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showColor'
})
export class ShowColorPipe implements PipeTransform {

  transform(value: number):string {

    switch(value) {

      case 0:
        return 'black'
      case 1:
        return 'green'
      case 2:
        return 'red'

      default:
        return '';
    }
  }

}
