import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Role } from "../model/role";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  role: Role;
  ExistUser: any = [];

  constructor(
    public router: Router,
    public authService: AuthService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    var obj: any = localStorage.getItem("ExistUser");
    if (obj != undefined) {
      this.ExistUser = JSON.parse(obj);
    } else {
      this.ExistUser = [
        { userId: "abc@media.com", password: "abc123", userName: "tom" },
        { userId: "def@media.com", password: "def123", userName: "dick" }
      ];
    }

    this.loginForm = new FormGroup({
      userId: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ])
    });
  }
  loginUser() {
    console.log(this.loginForm.value);
    this.ExistUser.forEach((obj: any) => {
      if (obj.userId == this.loginForm.value["userId"]) {
        localStorage.setItem("userName", obj.userName);
        this.authService.login(1);
        this.router.navigate(["/"]);
        this.toastr.success("Success");
        return;
      } else {
        this.toastr.error(
          "User Does not exist and Please provide valid User Name and Password"
        );
      }
    });
  }
  signup() {
    this.authService.logout();
    this.router.navigate(["signup"]);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["login"]);
  }
}
