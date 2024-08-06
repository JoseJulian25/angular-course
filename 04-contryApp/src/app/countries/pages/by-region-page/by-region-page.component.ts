import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { CountriesService } from '../../services/countries-service.service';
import { Region } from '../../interfaces/Region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{

  public countries:Country[] = [];
  public regions:Region[] = ['America', 'Europe', 'Asia', 'Africa', 'Oceania'];
  public selectedRegion?:Region;
  public isLoading:boolean = false;
  public searchValue?:string = '';

  constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.searchValue = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region:Region): void{
    this.selectedRegion = region;
    this.isLoading = true;
    
    this.countriesService.searchRegion(region)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      })

      this.searchValue = '';
  }
}
