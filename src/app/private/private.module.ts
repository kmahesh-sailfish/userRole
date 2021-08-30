import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PrivateRoutingModule } from "./private-routing.module";
import { PrivateComponent } from "./private.component";
import { ImageGalleryComponent } from "./image-gallery/image-gallery.component";
import { ImageService } from "../image/shared/image.service";
import { ImageFilterPipe } from "../image/shared/filter.pipe";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [PrivateComponent, ImageGalleryComponent, ImageFilterPipe],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ImageService, ImageFilterPipe]
})
export class PrivateModule {}
