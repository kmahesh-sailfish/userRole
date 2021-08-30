import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public title = "demo3";
  public userName: any;
  public loginForm: FormGroup;
  constructor(public router: Router, public authService: AuthService) {}
  ngOnInit() {
    this.userName = localStorage.getItem("userName");
    
  }

  get isAuthorized() {
    return this.authService.isAuthorized();
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["login"]);
  }
}
