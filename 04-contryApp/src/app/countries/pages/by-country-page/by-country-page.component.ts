import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries-service.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public countries:Country[] = [];
  public searchValue:string = '';
  public isLoading:boolean = false;

  constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.searchValue = this.countriesService.cacheStore.byCountry.term;
  }

  searchByCountry(country:string){
    this.isLoading = true;
    this.countriesService.searchCountry(country).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
