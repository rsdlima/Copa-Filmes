import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FilmesComponent } from './filmes/filmes.component';
import { FilmesService } from './filmes.service';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing.module';
import { FinalComponent } from './filmes/final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [HttpClientModule,FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
