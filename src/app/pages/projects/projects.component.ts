import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import Splide from '@splidejs/splide';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  

  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  private typed?: Typed;

  ngAfterViewInit(): void {
    const projectCards = document.querySelectorAll('.detailed-project');

    const sliders = document.querySelectorAll('.splide');
    sliders.forEach((slider) => {
      new Splide(slider as HTMLElement, {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 2500,
        pauseOnHover: true,
        arrows: true,
        pagination: true,
      }).mount();
    });

    projectCards.forEach((card) => {
      const raw = card.getAttribute('data-hover-text');
      let frases: string[] = [];

      try {
        frases = raw ? JSON.parse(raw) : [];
      } catch {
        frases = [raw || ''];
      }

      card.addEventListener('mouseenter', () => {
        const random = frases[Math.floor(Math.random() * frases.length)];
        this.updateTyped(random);
      });

      card.addEventListener('mouseleave', () => {
        this.updateTyped(); // vuelve a modo descanso
      });
    });

    // Modo descanso inicial
    this.updateTyped();
  }

  updateTyped(frase?: string) {
    if (this.typed) this.typed.destroy();

    const descanso = ['Zzz.', 'Zzz..', 'Zzz...', '🍕...', '🎮...'];

    this.typed = new Typed('#typedMascot', {
      strings: frase ? [frase] : descanso,
      typeSpeed: frase ? 40 : 120,
      backSpeed: frase ? 20 : 60,
      backDelay: 800,
      loop: !frase,
      showCursor: false,
      smartBackspace: true,
    });
  }
}
