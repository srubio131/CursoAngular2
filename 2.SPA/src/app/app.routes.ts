import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesSearchComponent } from "./components/heroes-search/heroes-search.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'buscador/:textoABuscar', component: HeroesSearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

// Rutas amigables
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
// Rutas con # y ? (A la antigua usanza)
//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
