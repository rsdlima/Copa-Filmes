import { Component, OnInit } from '@angular/core';
import { FilmeModel } from './../filme.model';
import { Router } from '@angular/router';
import { FilmesService } from '../../filmes.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})

export class FinalComponent implements OnInit {

  filmesSelecionados : Array<FilmeModel> = new Array();
  campeoes : Array<FilmeModel> = new Array();

  constructor(private filmesService: FilmesService, private _route: Router) { 

    let nav = this._route.getCurrentNavigation().extras.state;
    let e = new Array<FilmeModel>();
    Object.assign(e, nav);
    this.filmesSelecionados = e;

  }

  ngOnInit() {
     this.comecarCopa();
  }

  comecarCopa() {
    this.filmesService.ComecarCopa(this.filmesSelecionados)
    .subscribe(campeoes => {
      this.campeoes = campeoes;
    });
   
  } 

}
