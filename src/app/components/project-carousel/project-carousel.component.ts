import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./project-carousel.component.css']
  
})
export class ProjectCarouselComponent implements AfterViewInit {

  constructor(private router: Router, private route: ActivatedRoute) {}
  
  proyectos = [
    {
      nombre: 'Portafolio Web',
      imagen: 'assets/projects/Portafolio_1.png',
      fragment: 'portafolio'
    },
    {
      nombre: 'Juego Timesaver',
      imagen: 'assets/projects/TS_1.png',
      fragment: 'timesaver'
    },
    {
      nombre: 'Juego Passing Out Pieces',
      imagen: 'assets/projects/POP_1.png',
      fragment: 'timesaver'
    },
    {
      nombre: 'Landing pages',
      imagen: 'assets/projects/FX_1.png',
      fragment: 'inversiones'
    },
    {
      nombre: 'Pagina web',
      imagen: 'assets/projects/Berserk_1.png',
      fragment: 'pagina web'
    },
    {
      nombre: 'Pagina web',
      imagen: 'assets/projects/WanderingBlade_1.png',
      fragment: 'pagina web'
    }
  ];
  

  ngAfterViewInit(): void {
    new Splide('.splide', {
      type: 'loop',
      perPage: 3,
      gap: '2rem',
      autoplay: true,
      pauseOnHover: true,
      arrows: true,
      pagination: true,
    }).mount();

    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const el = document.getElementById(fragment);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  irADetalle(fragmento: string) {
    this.router.navigate(['/projects'], { fragment: fragmento });
  }
}
