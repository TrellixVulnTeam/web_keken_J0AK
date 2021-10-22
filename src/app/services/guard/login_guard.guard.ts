import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../Usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor( public usuarioService: UsuarioService,
               public router: Router
    ) {

  }
  canActivate() {
    if (this.usuarioService.estalogueado()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}