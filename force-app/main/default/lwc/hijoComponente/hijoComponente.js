import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import EJEMPLO_LEX from '@salesforce/messageChannel/example__c';

export default class HijoComponente extends LightningElement {
  message = "Soy un componente Hijo";
  textoHijo = "";

  @wire(MessageContext)
  messageContext;

  handleTextoHijo (event) {
    this.textoHijo = event.target.value;
  }

  enviarAPadre () {
    console.log('Texto Hijo: ' + this.textoHijo);
    this.textoHijo = "";
  }

  enviarAOtro () {
    console.log('Publish Message Channel');
    const payload = {
      message: this.textoHijo
    };

    publish(this.messageContext, EJEMPLO_LEX, payload);

    this.textoHijo = "";
  }

}