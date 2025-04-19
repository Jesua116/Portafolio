import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/* Import AOS */
import AOS from 'aos';


bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    // 1) Inicializar AOS con ajustes globales
    AOS.init({
      // duration: 800, // ms
      // offset: 300,   // píxeles antes de entrar
      // once: false,   // que se repita
      // mirror: true   // también al hacer scroll hacia arriba
    });

    // 2) Por si tienes imágenes grandes:
    window.addEventListener('load', () => AOS.refresh());
  })
  .catch(err => console.error(err));
