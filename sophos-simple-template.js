import { LitElement, html } from 'lit-element';

export class SophosSimpleTemplate extends LitElement {
  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
  };

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties() {
    return {
    };
  };

  static get styles() {
    return css`
    `
  }

  render() {
    return html``;
  }
}
customElements.define('sophos-simple-template', SophosSimpleTemplate);