import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';
import { FilmeModel } from './filme.model';
import { Router} from '@angular/router';
import { observable } from 'rxjs';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})

export class FilmesComponent implements OnInit {

  filmesSelecionados : Array<FilmeModel> = new Array();
  filme: FilmeModel = new FilmeModel();
  filmes : Array<FilmeModel> = new Array();
  contador: number = 0;
  habilitaCampeonato: boolean = true;

  constructor(private filmesService: FilmesService, private router: Router) { 
  }
    
  ngOnInit() {
     this.listarFilmes();
  }

  listarFilmes(){
    this.filmesService.listarfilmes().subscribe(filmes =>{
      this.filmes =  filmes
    }, err =>{
      console.log('Erro ao carregar filmes', err)
    })
  }

  verificarQtdSelecionados(filmeSelecionado){

    if(filmeSelecionado.Selecionado){

      this.contador++;
      this.filmesSelecionados.push(filmeSelecionado);

    }else{

      this.contador--;
      this.filmesSelecionados.splice(this.filmesSelecionados.indexOf(filmeSelecionado),1);
          }

    this.habilitarBotaoCampeonato();
  }

  exibirResultado() {
    this.router.navigateByUrl('filmes/final', {
      state: this.filmesSelecionados
  })}

  habilitarBotaoCampeonato() {
    debugger
    if(this.contador == 8){
      this.habilitaCampeonato = false;
    } else {
      this.habilitaCampeonato = true;
    }
  }

}

