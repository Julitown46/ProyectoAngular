export interface Empresa{
    id: string;
    nombre: string;
    coordinates:{
        latitud: number;
        longitud: number;
    }
    fundacion: string;
}