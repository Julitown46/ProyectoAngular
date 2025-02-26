import { Component } from '@angular/core';
import { Empresa } from '../../../models/empresa';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmpresaService } from '../../../services/empresa.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MapaComponent } from '../../mapa/mapa.component';

@Component({
  selector: 'app-detalle-empresa',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MapaComponent],
  templateUrl: './detalle-empresa.component.html',
  styleUrl: './detalle-empresa.component.css'
})
export class DetalleEmpresaComponent {
  empresas: Empresa[] = [];
  empresaId: string = '';
  latitud: number = 0;
  longitud: number = 0;
  form: FormGroup;

  constructor(private empresaService: EmpresaService, private fb: FormBuilder, private route: ActivatedRoute){
    this.empresaService.getEmpresas().subscribe(e => this.empresas = e);

    const routeParams = this.route.snapshot.paramMap;
    this.empresaId = routeParams.get('id')!;

    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      latitud: ['', [Validators.required]],
      longitud: ['', [Validators.required]],
      fechaFundacion: ['', [Validators.required]]
    });

    this.empresaService.getEmpresa(this.empresaId!).subscribe(empresaEditar => {
      this.form.patchValue({
        nombre: empresaEditar.nombre,
        latitud: empresaEditar.coordinates.latitud,
        longitud: empresaEditar.coordinates.longitud,
        fechaFundacion: empresaEditar.fundacion
      });

      this.latitud = empresaEditar.coordinates.latitud;
      this.longitud = empresaEditar.coordinates.longitud;
    });

    
  }
}
