import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router';

import { PolicyHolderService } from '../../../core/services/policy-holder.service';
import { CreatePolicyHolder } from '../../../core/models/create-policy-holder';

@Component({
  selector: 'app-policy-holder-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './policy-holder-form.component.html',
  styleUrl: './policy-holder-form.component.css'
})
export class PolicyHolderFormComponent {
  
  policyHolderForm;

  constructor(
    private fb: FormBuilder,
    private policyHolderService: PolicyHolderService,
    private router: Router
  ) {
  this.policyHolderForm = this.fb.group({

      firstName: ['',Validators.required],

      lastName: ['',Validators.required],

      dateOfBirth: ['',Validators.required],

      gender: ['',Validators.required],

      email: ['',[Validators.required,Validators.email]],

      phoneNumber: ['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],

      addressLine1: ['',Validators.required],

      addressLine2: [''],

      city: ['',Validators.required],

      state: ['',Validators.required],

      postalCode: ['',Validators.required],

      country: ['',Validators.required]

    });
  }

  onSubmit(): void {
    if (this.policyHolderForm.invalid) {
      this.policyHolderForm.markAllAsTouched();
      return;
    }

    const request = this.policyHolderForm.value as CreatePolicyHolder;

    this.policyHolderService.createPolicyHolder(request).subscribe({
      next: (response) => {
        alert(response.message);
        this.router.navigate(['/policyholders'])
      },

      error: (error) => {
        console.error(error);
        alert('unable to create Policy Holder');
      }
    });
  }
}
