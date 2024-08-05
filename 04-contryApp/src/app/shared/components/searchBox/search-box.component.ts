import {Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {
  
  @Output()
  public onValue:EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder:string = '';

  @ViewChild('txtInput')
  public txtInput!:ElementRef<HTMLInputElement>;

  sendValue():void{
    this.onValue.emit(this.txtInput.nativeElement.value);
  }
}
