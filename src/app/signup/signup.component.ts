import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  public signup: FormGroup;
  public ExistUser: any = [
    {
      userId: "abc@media.com",
      password: "abc123",
      userName: "tom"
    },
    {
      userId: "def@media.com",
      password: "def123",
      userName: "dick"
    }
  ];
  constructor(public route: Router, public toastr: ToastrService) {}

  ngOnInit(): void {
    this.signup = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ]),
      userId: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
      ])
    });
  }
  signupUser() {
    console.log(this.signup.value);
    this.ExistUser.push(this.signup.value);
    this.toastr.success("Success");
    localStorage.setItem("ExistUser", JSON.stringify(this.ExistUser));
    this.route.navigate(["/login"]);
    //this.
  }
}
