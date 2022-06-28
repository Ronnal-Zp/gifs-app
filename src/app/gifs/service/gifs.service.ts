import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  //--Informacion persistente-- 
  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem("historial")!) || [];
    this.resultadoGifs = JSON.parse(localStorage.getItem("gifsParaMostrar")!) || [];
  }

  private _historial : string[] = [];
  private _apiKey    : string = "zSo9khtcaMS8C9dDNbu1CGfdY4nocF9Z"; 
  private servicioUrl: string = "https://api.giphy.com/v1/gifs"; 

  public resultadoGifs: Gif[] = []

  get historial(){
    return [...this._historial];
  }

  buscarGifs(query: string){
    
    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      //--Informacion Persistente--
      localStorage.setItem("historial", JSON.stringify(this._historial));
    }
    

    //--Mejoras a la peticion
    const params = new HttpParams()
        .set("api_key", this._apiKey)
        .set("limit", "10")
        .set("q", query);


    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
      .subscribe((res) => {
        this.resultadoGifs = res.data;
        localStorage.setItem("gifsParaMostrar", JSON.stringify(this.resultadoGifs));
      })

  }


}
