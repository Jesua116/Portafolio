import { AfterViewChecked, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';
import { Router, ActivatedRoute } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./project-carousel.component.css']
})
export class ProjectCarouselComponent implements AfterViewChecked {
  constructor(private router: Router, private route: ActivatedRoute) {}

  private splideMounted = false;

  proyectos = [
    {
      nombre: 'Portafolio Web',
      imagen: 'assets/projects/Portafolio_1.png',
      fragment: 'project-portfolio'
    },
    {
      nombre: 'Juego Timesaver',
      imagen: 'assets/projects/TS_1.png',
      fragment: 'project-2d'
    },
    {
      nombre: 'Juego Passing Out Pieces',
      imagen: 'assets/projects/POP_1.png',
      fragment: 'project-3d'
    },
    {
      nombre: 'Landing pages',
      imagen: 'assets/projects/FX_1.png',
      fragment: 'project-semester'
    },
    {
      nombre: 'Página Web Responsive',
      imagen: 'assets/projects/Berserk_1.png',
      fragment: 'project-responsive'
    },
    {
      nombre: 'Página Web con Base de Datos',
      imagen: 'assets/projects/WanderingBlade_1.png',
      fragment: 'project-db'
    }
  ];

  ngAfterViewChecked(): void {
    if (!this.splideMounted) {
      const slider = document.querySelector('.splide') as HTMLElement | null;
      if (slider) {
        new Splide(slider, {
          type: 'loop',
          perPage: 3,
          gap: '2rem',
          autoplay: true,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
        }).mount();

        this.splideMounted = true;

        requestAnimationFrame(() => {
          const hash = window.location.hash;
          if (hash) {
            const target = document.querySelector(hash);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          } else {
            window.scrollTo({ top: 0, behavior: 'auto' });
          }
          AOS.refreshHard?.();
        });
      }
    }
  }

  irADetalle(fragmento: string) {
    this.router.navigate(['/projects'], { fragment: fragmento });
  }
}
