import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective {
  /** 0 = fijo, 1 = misma velocidad; 0.3 = 30 % del scroll */
  @Input() speed = 0.3;

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('window:scroll')
  onScroll() {
    const offset = window.pageYOffset * this.speed;
    this.el.nativeElement.style.transform = `translateY(${offset}px)`;
  }
}
