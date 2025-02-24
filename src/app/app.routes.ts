import { Routes } from '@angular/router';
import { EntradaComponent } from './components/entrada/entrada.component';
import { ListarEmpresasComponent } from './components/empresa/listar-empresas/listar-empresas.component';
import { CrearEmpresaComponent } from './components/empresa/crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './components/empresa/editar-empresa/editar-empresa.component';
import { ListarVideojuegosComponent } from './components/videojuego/listar-videojuegos/listar-videojuegos.component';
import { CrearVideojuegoComponent } from './components/videojuego/crear-videojuego/crear-videojuego.component';
import { EditarVideojuegoComponent } from './components/videojuego/editar-videojuego/editar-videojuego.component';

export const routes: Routes = [
    { path: '', component: EntradaComponent },
    { path: 'listaempresas', component: ListarEmpresasComponent },
    { path: 'crearempresa', component: CrearEmpresaComponent },
    { path: 'editarempresa/:id', component: EditarEmpresaComponent },
    { path: 'listavideojuegos', component: ListarVideojuegosComponent },
    { path: 'crearvideojuego', component: CrearVideojuegoComponent },
    { path: 'editarvideojuego/:id', component: EditarVideojuegoComponent }
];
