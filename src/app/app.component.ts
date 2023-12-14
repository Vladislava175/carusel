import { Component } from "@angular/core";
import { ISlide } from "./models/slide";

@Component({
  selector: "app-root",
  template: `
    <div style="width: 500px; height: 200px; margin: 0 auto">
      <app-carusel [slideList]="slideList" ></app-carusel>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  slideList: ISlide[] = [
    { url: "/assets/image1.jpg", title: "image1" },
    { url: "/assets/image2.jpg", title: "image2" },
    { url: "/assets/image3.jpg", title: "image3" },
    { url: "/assets/image4.jpg", title: "image4" },
    { url: "/assets/image5.jpg", title: "image5" },
  ];
}
