import { Component } from '@angular/core';
import { Empresa } from '../../../models/empresa';
import { EmpresaService } from '../../../services/empresa.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-editar-empresa',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './editar-empresa.component.html',
  styleUrl: './editar-empresa.component.css'
})
export class EditarEmpresaComponent {

  empresas: Empresa[] = [];
  empresaId: string = '';
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
    });

    
  }

  submit(){
    if (this.form.valid) {
      const nuevaEmpresa: Empresa = {
        id: this.empresaId,
        nombre: this.form.value.nombre,
        coordinates: {
          latitud: this.form.value.latitud,
          longitud: this.form.value.longitud
        },
        fundacion: this.form.value.fechaFundacion
      }

      this.empresaService.updateEmpresa(nuevaEmpresa).subscribe( () => this.form.reset());
    }
  }
}
