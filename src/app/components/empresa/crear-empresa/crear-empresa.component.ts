import { Component } from '@angular/core';
import { Empresa } from '../../../models/empresa';
import { EmpresaService } from '../../../services/empresa.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-crear-empresa',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './crear-empresa.component.html',
  styleUrl: './crear-empresa.component.css'
})
export class CrearEmpresaComponent {
  
  empresas: Empresa[] = [];
  form: FormGroup;

  constructor(private empresaService: EmpresaService, private fb: FormBuilder){
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      latitud: ['', [Validators.required]],
      longitud: ['', [Validators.required]],
      fechaFundacion: ['', [Validators.required]]
    });

    this.empresaService.getEmpresas().subscribe(e => this.empresas = e);
  }

  submit(){
    if (this.form.valid) {
      const nuevaEmpresa: Empresa = {
        id: (Number(this.empresas[this.empresas.length-1].id) +1).toString(),
        nombre: this.form.value.nombre,
        coordinates: {
          latitud: this.form.value.latitud,
          longitud: this.form.value.longitud
        },
        fundacion: this.form.value.fechaFundacion
      }

      this.empresaService.addEmpresa(nuevaEmpresa).subscribe( () => this.form.reset());
    }
  }


}
