import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import { UserRegister } from '../../interfaces/register-request.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router)

  public myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  register() {
    const {name, email, password} = this.myForm.value;

    const user: UserRegister = {name, email, password}

    this.authService.register(user).subscribe({
      next: () => {
        Swal.fire("Success", "Registration successful!", "success").then(() => {
          this.router.navigateByUrl("/dashboard");
        });
      },
      error: (error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Error",
          html: error,
          showConfirmButton: false,
          timer: 1500,
          width: '300px'
        });
    }});
  }

}
