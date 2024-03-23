import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //styles : ["p{color: blue;}"]
})
export class EmpleadoComponent {
  nombre = "Pepe";
  apellido = "Argento"
  edad = 25;
  empresa = "Google";
  registro = false;
  textoDeRegistro = "No hay nadie Registrado";
  getEmpresa(value:String){
  }

  habilitarEmpresa(){
    this.registro = false;
  }

  setUsuarioRegistro(event : Event){
    // alert("EL usuario se acaba de registrar")

    //casteamos el objeto del evento
    if((<HTMLInputElement>event.target).value == "si"){
      this.textoDeRegistro = "El usuario se acaba de registrar"
    }else{
      this.textoDeRegistro = "El usuario no esta registrado! "
    }
  }

  cambiarEmpresa(event : Event){
    this.empresa = (<HTMLInputElement>event.target).value;
  }
}
