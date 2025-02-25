import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Empresa } from '../../../models/empresa';
import { EmpresaService } from '../../../services/empresa.service';
import { VideojuegoService } from '../../../services/videojuego.service';
import { subscribe } from 'diagnostics_channel';
import { Videojuego } from '../../../models/videojuego';

@Component({
  selector: 'app-listar-empresas',
  imports: [RouterLink],
  templateUrl: './listar-empresas.component.html',
  styleUrl: './listar-empresas.component.css'
})
export class ListarEmpresasComponent {

  empresas: Empresa[] = [];
  videojuegos: Videojuego[] = [];

  constructor(private empresaService: EmpresaService, private videojuegoService: VideojuegoService){
    this.empresaService.getEmpresas().subscribe(e => this.empresas = e);
    this.videojuegoService.getVideojuegos().subscribe(v => this.videojuegos = v);
  }

  eliminarEmpresa(id: string){
      if (this.videojuegos.find(v => v.empresaId === id)) {
        alert("No se puede eliminar porque tiene un videojuego asociado");
      } else {
        this.empresaService.deleteEmpresa(id).subscribe(() => this.empresaService.getEmpresas().subscribe(e => this.empresas = e));
      }
  }
}
