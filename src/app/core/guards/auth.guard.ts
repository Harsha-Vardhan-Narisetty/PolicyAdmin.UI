import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { StorageService } from '../services/storage.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const storageService = inject(StorageService);

  const token = storageService.getToken();

  if (token){
    return true;
  }

  return router.createUrlTree(['/login']);
};
