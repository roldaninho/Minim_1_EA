export class User {
  nombre: String;
  fecha: String;
  dni: String;
  telefono: String;
  fiebre: String;
  tos: String;
  dificultad: String;
  malestar: String;


  constructor(nombre = '', fecha = '', dni = '', telefono = '', fiebre = '', tos = '', dificultad = '', malestar = '') {
    this.nombre = nombre;
    this.fecha = fecha;
    this.dni = dni;
    this.telefono = telefono;
    this.fiebre = fiebre;
    this.tos = tos;
    this.dificultad = dificultad;
    this.malestar = malestar;
  }
}