import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import EJEMPLO_LEX from '@salesforce/messageChannel/example__c';

export default class OtroComponente extends LightningElement {
  message = "Soy un componente no relacionado";
  textoOtro = "";

  subscription = null;
  @wire(MessageContext)
  messageContext;

  connectedCallback () {
    this.subscription = subscribe(
      this.messageContext, 
      EJEMPLO_LEX, 
      (payload) => this.handlePayload(payload)
    );
  }

  handlePayload (payload) {
    this.message = payload.message;
  }

  handleTextoOtro (event) {
    this.textoOtro = event.target.value;
  }

  enviarAOtro () {
    console.log('Texto Otro: ' + this.textoOtro);
    this.textoOtro = "";
  }
}