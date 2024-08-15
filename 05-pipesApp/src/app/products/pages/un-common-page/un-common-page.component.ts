import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-un-common-page',
  templateUrl: './un-common-page.component.html',
  styleUrl: './un-common-page.component.css'
})
export class UnCommonPageComponent {

  //i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    this.name = 'Yohansi';
    this.gender = 'female';
  }

  //i18n Plural
  public clients:string[] = ['Marlin', 'Yohansi', 'Jose Julian' ,'Alex', 'Samil', 'Edward'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void {
    this.clients.pop();
  }

  //KeyValue Pipe
  public person = {
    name: 'Jose Julian',
    lastname: 'Martinez',
    age: 20
  }

  //Async Pipe
  public myObservableTimer = interval(1000).pipe(
    tap(value => console.log(value))
  )

  public myPromiseTImer = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa')
      this.person.age++;
    }, 2000);
  });
}
