import { LightningElement } from 'lwc';

export default class OtroComponente extends LightningElement {
  message = "Soy un componente no relacionado";
  textoOtro = "";

  handleTextoOtro (event) {
    this.textoOtro = event.target.value;
  }

  enviarAOtro () {
    console.log('Texto Otro: ' + this.textoOtro);
    this.textoOtro = "";
  }
}