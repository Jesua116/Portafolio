import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;   // ruta al SVG o PNG en /assets/icons
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule],
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular 18', icon: 'assets/icons/angular.svg' },
    { name: 'TypeScript', icon: 'assets/icons/typescript.svg'      },
    { name: 'Unity 3D',   icon: 'assets/icons/unity.svg'   },
    { name: 'Node.js',    icon: 'assets/icons/nodedotjs.svg'    },
    { name: 'GitHub',        icon: 'assets/icons/github.svg'     }
  ];
}
