import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private urlEmpresa = 'http://localhost:3001/empresas';

  constructor(private http: HttpClient) { }

    getEmpresas(){
      return this.http.get<Empresa[]>(this.urlEmpresa);
    }

    getEmpresa(id: string){
      return this.http.get<Empresa>(`${this.urlEmpresa}/${id}`);
    }

    addEmpresa(empresa: Empresa){
      return this.http.post(this.urlEmpresa, empresa);
    }

    updateEvento(empresa: Empresa){
      return this.http.put(`${this.urlEmpresa}/${empresa.id}`, empresa);
    }

    deleteEmpresa(id: string){
      return this.http.delete(`${this.urlEmpresa}/${id}`);
    }
}
