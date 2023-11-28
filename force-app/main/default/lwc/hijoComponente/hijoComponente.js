import { LightningElement } from 'lwc';

export default class HijoComponente extends LightningElement {
  message = "Soy un componente Hijo";
  textoHijo = "";

  handleTextoHijo (event) {
    this.textoHijo = event.target.value;
  }

  //bubles: true, composed: true => Hasta el DOM
  //bubles: false, composed: true => Gran Parent
  //bubles: false, composed: false => Parent

  enviarAPadre () {
    console.log('Texto Hijo: ' + this.textoHijo);
    const event = new CustomEvent('saluda', {
      detail: this.textoHijo
    });
    this.dispatchEvent(event);
    this.textoHijo = "";
  }

}