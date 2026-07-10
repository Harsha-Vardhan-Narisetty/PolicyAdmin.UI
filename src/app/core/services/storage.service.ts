import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveToken(token: string): void{
    localStorage.setItem('token', token);
  }

  getToken(): string | null{
    return localStorage.getItem('token');
  }

  removeToken(): void{
    localStorage.removeItem('token');
  }
  
  saveUser(user : any): void{
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): any{
    const user = localStorage.getItem('user');
    return user? JSON.parse(user) : null;
  }

  clear(): void {
    localStorage.clear();
  }
}
