import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PrivateComponent } from "./private.component";
import { ImageGalleryComponent } from "./image-gallery/image-gallery.component";
import { AuthGuardService } from "../services/auth-guard.service";

const routes: Routes = [
  {
    path: "images",
    component: ImageGalleryComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {}
