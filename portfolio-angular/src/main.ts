import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/* Import AOS */
import AOS from 'aos';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    /* Inicializar AOS después de que la app ha arrancado */
    AOS.init({
      duration: 800,  // Duración de la animación en ms
      once: true      // true = solo se anima la 1ra vez que aparece el elemento
    });
  })
  .catch((err) => console.error(err));
