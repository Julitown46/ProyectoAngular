import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Videojuego } from '../../../models/videojuego';
import { Empresa } from '../../../models/empresa';
import { VideojuegoService } from '../../../services/videojuego.service';
import { EmpresaService } from '../../../services/empresa.service';

@Component({
  selector: 'app-crear-videojuego',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './crear-videojuego.component.html',
  styleUrl: './crear-videojuego.component.css'
})
export class CrearVideojuegoComponent {
  videojuegos: Videojuego[] = [];
  empresas: Empresa[] = [];
  form: FormGroup;

  constructor(private empresaService: EmpresaService, private fb: FormBuilder, private videojuegoService: VideojuegoService){
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      fecha: ['', [Validators.required]]
    });

    this.empresaService.getEmpresas().subscribe(e => this.empresas = e);
    this.videojuegoService.getVideojuegos().subscribe(v => this.videojuegos = v);
  }

  submit(){
    if (this.form.valid) {
      const nuevoVideojuego: Videojuego = {
        id: (Number(this.videojuegos[this.videojuegos.length-1].id) +1).toString(),
        nombre: this.form.value.nombre,
        genero: this.form.value.genero,
        empresaId: this.form.value.empresa,
        fechaLanzamiento: this.form.value.fecha
      }

      this.videojuegoService.addVideojuego(nuevoVideojuego).subscribe( () => this.form.reset());
    }
  }
}
