import { LightningElement, api } from 'lwc';

export default class HijoComponente extends LightningElement {
  @api message = "Soy un componente Hijo";
  textoHijo = "";

  handleTextoHijo (event) {
    this.textoHijo = event.target.value;
  }

  enviarAPadre () {
    console.log('Texto Hijo: ' + this.textoHijo);
    this.textoHijo = "";
  }

  @api
  reemplazarMensajeDesdePadre(message) {
    this.message = message;
  }
}