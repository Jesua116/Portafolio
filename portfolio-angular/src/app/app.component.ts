import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

declare var AOS: any; // Para que TypeScript reconozca la variable global


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'portfolio-angular';

  ngOnInit() {
    AOS.init({
      duration: 800, // Duración de la animación en ms
      once: true     // Si true, la animación se reproduce solo una vez
    });
  }
}
