import { Component, ElementRef, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import Typed from 'typed.js';
import Splide from '@splidejs/splide';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ProjectsComponent implements OnInit, AfterViewInit {


  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  private typed?: Typed;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    window.addEventListener('popstate', () => {
      const currentPath = window.location.pathname;
      if (currentPath === '/projects') {
        window.location.href = '/home';
      }
    });
  }
  

  ngAfterViewInit(): void {
    window.scrollTo({ top: 0, behavior: 'auto' });

    const projectCards = document.querySelectorAll('.detailed-project');

    const sliders = document.querySelectorAll('.splide');

    setTimeout(() => {
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }, 300); // tiempo para que todo cargue (AOS, imágenes, etc.)

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

  volverAInicio(): void {
    window.location.href = '/home';
  }
  
  


}
