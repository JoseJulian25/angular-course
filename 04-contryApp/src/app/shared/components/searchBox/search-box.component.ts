import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer:Subject<string> = new Subject();  
  private debouncerSuscription?:Subscription;
  @Input()
  public searchValue:string = '';

  @Output()
  public onValue:EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder:string = '';

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer.
    pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.onValue.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm);
  }
}
