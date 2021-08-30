import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ImageFilterPipe } from "./image/shared/filter.pipe";
import { SignupComponent } from "./signup/signup.component";
import { HttpClientModule } from "@angular/common/http";
import { ImageService } from "./image/shared/image.service";
import { NgImageSliderModule } from "ng-image-slider";
import { ToastrModule } from "ngx-toastr";
import { FooterComponent } from "./footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgImageSliderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
