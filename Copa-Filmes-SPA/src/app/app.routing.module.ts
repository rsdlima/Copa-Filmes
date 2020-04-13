import { FilmesComponent } from './filmes/filmes.component';
import { FinalComponent } from './filmes/final/final.component';
import { AppComponent } from './app.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:FilmesComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'filmes/final', component: FinalComponent }
];

  NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);