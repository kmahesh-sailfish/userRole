import { Component, OnInit } from "@angular/core";
import { ImageService } from '../../image/shared/image.service';

@Component({
  selector: "app-image-gallery",
  templateUrl: "./image-gallery.component.html",
  styleUrls: ["./image-gallery.component.css"]
})
export class ImageGalleryComponent implements OnInit {
  public images: any[];
  public filterBy: string = "all";
  public visibleImages: any[] = [];
  constructor(public imageService:ImageService) {}

  ngOnInit(): void {
   this.visibleImages= this.imageService.getImages();
  }
}
