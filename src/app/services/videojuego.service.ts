import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Videojuego } from '../models/videojuego';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  private urlVideojuego= 'http://localhost:3002/videojuegos';

  constructor(private http: HttpClient) { }

  getVideojuegos(){
    return this.http.get<Videojuego[]>(this.urlVideojuego);
  }

  getVideojuego(id: string){
    return this.http.get<Videojuego>(`${this.urlVideojuego}/${id}`);
  }

  addVideojuego(videojuego: Videojuego){
    return this.http.post(this.urlVideojuego, videojuego);
  }

  updateVideojuego(videojuego: Videojuego){
    return this.http.put(`${this.urlVideojuego}/${videojuego.id}`, videojuego);
  }

  deleteVideojuego(id: string){
    return this.http.delete(`${this.urlVideojuego}/${id}`);
  }
}
