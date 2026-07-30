import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ApiResponse } from "../models/api-response.model";
import { PolicyHolder } from "../models/policy-holder.model";
import { CreatePolicyHolder } from "../models/create-policy-holder";

@Injectable({
    providedIn: 'root'
})
export class PolicyHolderService {
    private apiUrl = 'https://localhost:44301/api/PolicyHolders';

    constructor(private http: HttpClient){ }

    getAllPolicyHolders(): Observable<ApiResponse<PolicyHolder[]>> {
        return this.http.get<ApiResponse<PolicyHolder[]>>(this.apiUrl);
    }

    createPolicyHolder(
        request: CreatePolicyHolder
    ): Observable<ApiResponse<PolicyHolder>> {

        return this.http.post<ApiResponse<PolicyHolder>>(
            this.apiUrl,
            request
        );
    }
}

