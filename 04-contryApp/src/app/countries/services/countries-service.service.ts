import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/Country';
import { CacheStore } from '../interfaces/Cache-store';
import { Region } from '../interfaces/Region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl:string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: {term: '', countries: []},
    byCountry: {term: '', countries: []},
    byRegion: {countries: []}
  }

  constructor(private http:HttpClient) { 
    this.loadFromLocalStorage();
  }


  private getContriesRequest(url:string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        delay(1000)
      );
  }

  private saveToLocalStorage(): void{
    localStorage.setItem('CacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(): void{
    if(!localStorage.getItem('CacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('CacheStore')!);
  }

  searchCapital(capital:string): Observable<Country[]> {
    const url:string = `${this.apiUrl}/capital/${capital}`;

    return this.getContriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCapital = {term: capital, countries: countries}),
        tap(() => this.saveToLocalStorage())
      );
  }

  searchCountry(country:string): Observable<Country[]>{
    const url:string = `${this.apiUrl}/name/${country}`;

    return this.getContriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCountry = {term:country, countries: countries}),
        tap(() => this.saveToLocalStorage())
      );
  }

  searchRegion(region:Region): Observable<Country[]> {
    const url:string = `${this.apiUrl}/region/${region}`;

    return this.getContriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byRegion = {region:region, countries: countries}),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchCountryAlphaCode(alphaCode: string): Observable<Country | null>  {
    const url:string = `${this.apiUrl}/alpha/${alphaCode}`;

    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }
}
