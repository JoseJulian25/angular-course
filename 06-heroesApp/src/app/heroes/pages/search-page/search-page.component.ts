import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/Hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  heroes:Hero[] = [];

  constructor(private heroesService:HeroesService){}

  searchHero(): void {

    const value:string = this.searchInput.value || '';

    this.heroesService.getSuggestions(value)
    .subscribe(heroes => this.heroes = heroes);
  }

}