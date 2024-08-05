import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries-service.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries:Country[] = [];

  constructor(private countriesService:CountriesService){}

  searchByCountry(country:string){
    this.countriesService.searchCountry(country).subscribe(countries => {
      this.countries = countries;
    });
  }
}
