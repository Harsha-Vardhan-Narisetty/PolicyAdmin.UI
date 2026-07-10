import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginRequest } from '../../../core/models/login-request.model';
import { LoginResponse } from '../../../core/models/login-response.model';
import { AuthService } from '../../../core/services/auth.service';
import { StorageService } from '../../../core/services/storage.service';
import { Router } from '@angular/router';

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
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {

    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });

  }

  login(): void{
    if(this.loginForm.invalid){
      return;
    }

    const request: LoginRequest = {
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!
    };

    this.authService.login(request).subscribe({
      next: (response) => {
        console.log('Login Successful');

        console.log(response.data);

        this.storageService.saveToken(response.data.token);
        this.storageService.saveUser(response.data);
        this.router.navigate(['/Dashboard']);
      },

      error: (error) => {
        console.log(error);
      }

      

    });
  }

}