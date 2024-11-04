import { Component, signal } from '@angular/core';

@Component({
  selector: 'auth-password-input',
  templateUrl: './password-input.component.html',
})
export class PasswordInputComponent {
  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
