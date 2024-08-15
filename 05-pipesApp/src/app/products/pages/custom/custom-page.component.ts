import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-custom',
  templateUrl: './custom-page.component.html',
  styles: ``
})
export class CustomPageComponent {

  public isToogleCase:boolean = false;
  public sortBy?: keyof Hero;

  public heroes:Hero[] = [
    {
      name: 'Batman',
      vuela: false,
      color: Color.black
    },
    {
      name: 'Iron man',
      vuela: true,
      color: Color.red
    },
    {
      name: 'Hulk',
      vuela: false,
      color: Color.green
    },
    {
      name: 'Capitana Marvel',
      vuela: true,
      color: Color.red
    },
    {
      name: 'Ojo de Alcon',
      vuela: false,
      color: Color.black
    },
  ]
  toggleUpperCase(): void{
    this.isToogleCase = !this.isToogleCase;
  }

  changeSort(value: keyof Hero){
    this.sortBy = value;
  }
}
