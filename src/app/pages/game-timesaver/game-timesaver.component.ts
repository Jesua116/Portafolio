import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-game-timesaver',
  templateUrl: './game-timesaver.component.html',
  styleUrls: ['./game-timesaver.component.css']
})
export class GameTimesaverComponent {
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/games/timesaver/index.html');
  }

  volverAProjects(): void {
    window.location.href = '/projects';
  }
  
}

