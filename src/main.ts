import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { register as registerSwiperElements } from 'swiper/element/bundle';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<swiper-container navigation = 'true'>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  <swiper-slide>Slide ...</swiper-slide>
</swiper-container>`,
})
export class App {
  name = 'Angular';
}
registerSwiperElements();
bootstrapApplication(App);
