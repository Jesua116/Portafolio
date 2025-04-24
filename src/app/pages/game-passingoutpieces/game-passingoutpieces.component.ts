import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-game-passingoutpieces',
  standalone: true,
  imports: [],
  templateUrl: './game-passingoutpieces.component.html',
  styleUrl: './game-passingoutpieces.component.css'
})
export class GamePassingOutPiecesComponent {
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/games/passingoutpieces/index.html');
  }

  volverAProjects(): void {
    window.location.href = '/projects';
  }
}