import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../enviroments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { User, AuthStatus, LoginResponse, CheckTokenResponse } from '../interfaces';
import { UserRegister } from '../interfaces/register-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private readonly baseUrl:string = environment.baseUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  public currentUser = computed( () => this._currentUser());
  public authStatus = computed( () => this._authStatus());

  constructor() {
      this.checkTokenStatus().subscribe();
  }

  private setAuthenticated(user: User, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set( AuthStatus.authenticated);
    localStorage.setItem('token', token);
    
    return true;
  }

  register(newUser: UserRegister): Observable<boolean> {
    const url = `${this.baseUrl}/auth/register`;
    
    return this.http.post<LoginResponse>(url, newUser)
      .pipe(
        map(({user, token}) => this.setAuthenticated(user, token)),
        catchError(err => {
          return throwError( () => err.error.message)
        })
      )
  }

  login(email: string, password: string): Observable<boolean> {

    const url = `${this.baseUrl}/auth/login`;
    const body = {email, password};

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map(({user, token}) => this.setAuthenticated(user, token)),
        catchError(err => {
            return throwError( () => err.error.message)
        })
      )
  }

  logout() {
    localStorage.removeItem('token');
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated)
  }

  checkTokenStatus(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/check-token`;
    const token = localStorage.getItem('token');
    

    if(!token) {
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    

    return this.http.get<CheckTokenResponse>(url, {headers} )
      .pipe(
        map( ({user, token}) => this.setAuthenticated(user, token)),
        
        catchError(() => {
          this._authStatus.set(AuthStatus.notAuthenticated);
          return of(false);
        })
      )
  }
}
