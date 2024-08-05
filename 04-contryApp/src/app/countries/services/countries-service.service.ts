import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { Country } from '../interfaces/Country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

  searchCapital(capital:string): Observable<Country[]> {
    const url:string = `${this.apiUrl}/capital/${capital}`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  searchCountry(country:string): Observable<Country[]>{
    const url:string = `${this.apiUrl}/name/${country}`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
      );
  }

  searchRegion(region:string): Observable<Country[]> {
    const url:string = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([]))
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
