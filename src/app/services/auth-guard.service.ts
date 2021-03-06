import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  CanLoad,
  Route
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Role } from "../model/role";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthorized()) {
      this.router.navigate(["login"]);
      return false;
    }

    const roles = route.data.roles as Role[];
    if (roles && !roles.some(r => this.authService.hasRole(r))) {
      this.router.navigate(["error", "not-found"]);
      return false;
    }

    return true;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthorized()) {
      return false;
    }

    const roles = route.data && (route.data.roles as Role[]);
    if (roles && !roles.some(r => this.authService.hasRole(r))) {
      return false;
    }

    return true;
  }
}
