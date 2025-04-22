import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GameTimesaverComponent} from './pages/game-timesaver/game-timesaver.component';

export const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'projects', component: ProjectsComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'game/:id', component: GameTimesaverComponent},];

