import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Videojuego } from '../../../models/videojuego';
import { VideojuegoService } from '../../../services/videojuego.service';
import { EmpresaService } from '../../../services/empresa.service';
import { Empresa } from '../../../models/empresa';

@Component({
  selector: 'app-listar-videojuegos',
  imports: [RouterLink],
  templateUrl: './listar-videojuegos.component.html',
  styleUrl: './listar-videojuegos.component.css'
})
export class ListarVideojuegosComponent {

  videojuegos: Videojuego[] = [];
  empresas: Empresa[] = [];

  constructor(private videojuegoService: VideojuegoService, private empresaService: EmpresaService){
    this.videojuegoService.getVideojuegos().subscribe(v => this.videojuegos = v);
    this.empresaService.getEmpresas().subscribe(e => this.empresas = e);
  }

  eliminarVideojuego(id: string){
    this.videojuegoService.deleteVideojuego(id).subscribe( () => this.videojuegoService.getVideojuegos().subscribe(v => this.videojuegos = v));
  }


}
