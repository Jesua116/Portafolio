import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

declare var AOS: any;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'portfolio-angular';

  ngOnInit() {
    AOS.init({
      duration: 800, 
      once: true   
    });
  }
}
