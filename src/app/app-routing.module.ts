import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { Role } from "./model/role";
import { User } from "./model/user";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "signup",
        component: SignupComponent
      }
    ]
  },
  {
    path: "private",
    canActivate: [AuthGuardService],
    data: {
      roles: [Role.User]
    },
    loadChildren: () =>
      import("./private/private.module").then(m => m.PrivateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
