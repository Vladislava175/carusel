import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { ISlide } from "../models/slide";

@Component({
  selector: "app-carusel",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="slider">
      <div>
        <div class="arrow left" (click)="leftArrowClick()">❰</div>
        <div class="arrow right" (click)="rightArrowClick()">❱</div>
      </div>
      <div
        class="slide"
        [ngStyle]="{ 'background-image': currentSlideUrl }"
      ></div>
      <h1 class="title">
        {{ slideList[currentIndex].title }}
      </h1>
      <div class="dots">
        <button
          (click)="currentIndex = i"
          *ngFor="let slide of slideList; let i = index"
          [class]="'dot ' + (i === currentIndex ? 'active' : '')"
        ></button>
      </div>
    </div>
  `,
  styleUrls: ["carusel.component.css"]
})
export class CaruselComponent {
  @Input() slideList: ISlide[] = [];
  currentIndex: number = 0;

  get currentSlideUrl() {
    return `url('${this.slideList[this.currentIndex].url}')`;
  }
  leftArrowClick() {
    this.currentIndex !== 0 && this.currentIndex--;
  }
  rightArrowClick() {
    this.currentIndex < this.slideList.length && this.currentIndex++;
  }
}
