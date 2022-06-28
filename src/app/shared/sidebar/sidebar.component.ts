import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  
})
export class SidebarComponent {
  constructor(private gifsService: GifsService){}

  get historial(){
    return this.gifsService.historial;
  }

  mostrarGifs(item: string){
    this.gifsService.buscarGifs(item)
  }

}
