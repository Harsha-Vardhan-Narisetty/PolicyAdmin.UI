import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { PolicyHolder } from '../../../core/models/policy-holder.model';
import { PolicyHolderService } from '../../../core/services/policy-holder.service';
import { NgForOf } from "../../../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-policy-holder-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './policy-holder-list.component.html',
  styleUrl: './policy-holder-list.component.css'
})
export class PolicyHolderListComponent implements OnInit {

  policyHolders: PolicyHolder[] = [];

  constructor(
    private policyHolderrservice: PolicyHolderService,
    private router: Router
  ) {}
  

  ngOnInit(): void {
    this.loadPolicyHolders();

  }

  loadPolicyHolders(): void{
    this.policyHolderrservice.getAllPolicyHolders().subscribe({

      next: (response) => {
        console.log(response);

        this.policyHolders = response.data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  addPolicyHolder(): void {
    this.router.navigate(['/policyholders/add']);
  }

  editPolicyHolder(id: number): void {
    this.router.navigate(['/policyholders/edit', id]);
  }

}
