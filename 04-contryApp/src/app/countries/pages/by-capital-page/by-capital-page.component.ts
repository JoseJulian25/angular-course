import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries-service.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = [];
  public searchValue:string = '';
  public isLoading:boolean = false;

  constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.searchValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term:string){
    this.isLoading = true;

    this.countriesService.searchCapital(term).subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
    });
  }
}
