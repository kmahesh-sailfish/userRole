import { Injectable } from "@angular/core";
import { User } from "../model/user";
import { Role } from "../model/role";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}
  private user: User;

  isAuthorized() {
    var obj: any = localStorage.getItem("user");
    this.user = JSON.parse(obj);
    return !!this.user;
  }

  hasRole(role: Role) {
    return this.isAuthorized() && this.user.Role === role;
  }

  login(role: Role) {
    this.user = { Role: role };

    localStorage.setItem("user", JSON.stringify(this.user));
  }

  logout() {   
    this.user = null as any;
    localStorage.clear();
  }
}
