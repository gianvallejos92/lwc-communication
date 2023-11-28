import { LightningElement } from 'lwc';

export default class PadreComponente extends LightningElement {
  message = "Soy tu Padre";
  textoPadre = "";

  handleTextoPadre (event) {
    this.textoPadre = event.target.value;
  }

  enviarAHijo () {
    console.log('Texto Padre: ' + this.textoPadre);
    this.textoPadre = "";
  }

  saludarEnPadre (evt) {
    const text = evt.detail;
    console.log('Message from child: ' + text);
    this.message = text;
  }
}