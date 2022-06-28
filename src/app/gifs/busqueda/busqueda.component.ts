import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  //Servicio
  constructor(private gifsService: GifsService){}

  //obtener el valor de un input sin ngModel
  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>; 

  buscar(){
   const valor = this.txtBuscar.nativeElement.value;

  if(valor.trim().length === 0){
    return;
  }

  this.gifsService.buscarGifs(valor);
  console.log(this.gifsService.historial);

  this.txtBuscar.nativeElement.value = "";
  }

}
