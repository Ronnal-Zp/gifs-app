import { Component } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent{

  constructor(public gifsService: GifsService){}

  get resultadoGifs(){
    return this.gifsService.resultadoGifs;
  }

}
