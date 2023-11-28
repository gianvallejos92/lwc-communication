import { LightningElement } from 'lwc';

export default class PadreComponente extends LightningElement {
  message = "Soy tu Padre";
  textoPadre = "";

  handleTextoPadre (event) {
    this.textoPadre = event.target.value;
  }

  enviarAHijo () {
    console.log('Texto Padre: ' + this.textoPadre);
    this.template.querySelector('c-hijo-componente').reemplazarMensajeDesdePadre(this.textoPadre);
    this.textoPadre = "";
  }
}