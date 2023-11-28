import { LightningElement } from 'lwc';

export default class HijoComponente extends LightningElement {
  message = "Soy un componente Hijo";
  textoHijo = "";

  handleTextoHijo (event) {
    this.textoHijo = event.target.value;
  }

  enviarAPadre () {
    console.log('Texto Hijo: ' + this.textoHijo);
    this.textoHijo = "";
  }

}