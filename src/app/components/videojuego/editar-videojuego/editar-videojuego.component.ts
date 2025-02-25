import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Videojuego } from '../../../models/videojuego';
import { Empresa } from '../../../models/empresa';
import { VideojuegoService } from '../../../services/videojuego.service';
import { EmpresaService } from '../../../services/empresa.service';

@Component({
  selector: 'app-editar-videojuego',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './editar-videojuego.component.html',
  styleUrl: './editar-videojuego.component.css'
})
export class EditarVideojuegoComponent {
  videojuegos: Videojuego[] = [];
  empresas: Empresa[] = [];
  videojuegoId: string = '';
  form: FormGroup;

  constructor(private empresaService: EmpresaService, private fb: FormBuilder, private videojuegoService: VideojuegoService, private route: ActivatedRoute){

    const routeParams = this.route.snapshot.paramMap;
    this.videojuegoId = routeParams.get('id')!;

    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      fecha: ['', [Validators.required]]
    });

    this.empresaService.getEmpresas().subscribe(e => this.empresas = e);
    this.videojuegoService.getVideojuegos().subscribe(v => this.videojuegos = v);

    this.videojuegoService.getVideojuego(this.videojuegoId!).subscribe(videojuegoEditar => {
      this.form.patchValue({
        nombre: videojuegoEditar.nombre,
        genero: videojuegoEditar.genero,
        empresa: videojuegoEditar.empresaId,
        fecha: videojuegoEditar.fechaLanzamiento
      });
    });
  }

  submit(){
    if (this.form.valid) {
      const nuevoVideojuego: Videojuego = {
        id: this.videojuegoId,
        nombre: this.form.value.nombre,
        genero: this.form.value.genero,
        empresaId: this.form.value.empresa,
        fechaLanzamiento: this.form.value.fecha
      }

      this.videojuegoService.updateVideojuego(nuevoVideojuego).subscribe( () => this.form.reset());
    }
  }
}
