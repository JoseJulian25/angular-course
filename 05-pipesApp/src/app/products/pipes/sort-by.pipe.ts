import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero): Hero[] {
    
    switch(sortBy){
      case 'name':
        return heroes.sort((a,b) => b.name.length - a.name.length);

      case 'color':
        return heroes.sort((a,b) => a.color > b.color ? 1 : -1);

      case 'vuela':
        return heroes.sort((a,b) => a.vuela < b.vuela ? 1 : -1);

      default:
        return heroes;
    }
  }

}
