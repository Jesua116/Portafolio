import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        // Al montarse el componente, inicia en opacidad 0
        style({ opacity: 0 }),
        // ... y en 1.5 segundos pasa a opacidad 1
        animate('1500ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {
  @ViewChild('typedRef1', { static: true }) typedRef1!: ElementRef;
  @ViewChild('typedRef2', { static: true }) typedRef2!: ElementRef;
  @ViewChild('typedRef3', { static: true }) typedRef3!: ElementRef;

  ngOnInit(): void {
    // 1) PRIMER TYPED
    const firstTypedOptions = {
      strings: ['Portafolio'],  // Solo una palabra
      typeSpeed: 80,
      backSpeed: 30,
      loop: false,
      showCursor: false,       // Sin cursor en la primera animación
      onComplete: () => {
        // Al terminar "Portfolio", arrancar el segundo
        this.launchSecondTyped();
      }
    };
    new Typed(this.typedRef1.nativeElement, firstTypedOptions);
  }

  launchSecondTyped() {
    // 2) SEGUNDO TYPED
    const secondTypedOptions = {
      strings: ['Jesuá Santes|'],
      typeSpeed: 80,
      backSpeed: 30,
      loop: false,
      showCursor: false,       // Puedes poner true si quieres cursor aquí
      onComplete: () => {
        // Al terminar "Jesuá Santes | ", arrancar el tercero
        this.launchThirdTyped();
      }
    };
    new Typed(this.typedRef2.nativeElement, secondTypedOptions);
  }

  launchThirdTyped() {
    // 3) TERCER TYPED: CICLA ADJETIVOS
    const thirdTypedOptions = {
      strings: [
        ' Dev Jr',
        ' Tech Geek',
        ' Game Dev',
        ' Web Enthusiast',
        ' Always Learning',
        ' Creative Mind',
        ' Curious Coder',
        ' Problem Solver',
      ],
      typeSpeed: 80,
      backSpeed: 30,
      loop: true,          // Cicla indefinidamente
      showCursor: true,    // Mostramos cursor en esta fase final
      cursorChar: '|'
    };
    new Typed(this.typedRef3.nativeElement, thirdTypedOptions);
  }
}
