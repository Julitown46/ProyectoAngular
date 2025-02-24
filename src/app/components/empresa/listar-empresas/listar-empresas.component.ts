import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Empresa } from '../../../models/empresa';
import { EmpresaService } from '../../../services/empresa.service';

@Component({
  selector: 'app-listar-empresas',
  imports: [RouterLink],
  templateUrl: './listar-empresas.component.html',
  styleUrl: './listar-empresas.component.css'
})
export class ListarEmpresasComponent {

  empresas: Empresa[] = [];

  constructor(private empresaService: EmpresaService){
    this.empresaService.getEmpresas().subscribe(e => this.empresas = e);
  }

  eliminarEmpresa(id: string){
    this.empresaService.deleteEmpresa(id).subscribe(() => this.empresaService.getEmpresas().subscribe(e => this.empresas = e));
  }
}
