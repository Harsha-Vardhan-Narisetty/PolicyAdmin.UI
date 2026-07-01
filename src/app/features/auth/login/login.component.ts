import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginRequest } from '../../../core/models/login-request.model';
import { LoginResponse } from '../../../core/models/login-response.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  applicationName = 'Policy Admin System';

  version = '1.0';

  loginForm;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService
  ) {

    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });

  }

  login(): void{
    const request = this.loginForm.value as LoginRequest;

    this.authService.login(request).subscribe({
      next: (response) => {
        console.log("Login Successful");
        
        console.log(response.data);
      },

      error: (error) => {
        console.error(error);
      }
    });
  }

}