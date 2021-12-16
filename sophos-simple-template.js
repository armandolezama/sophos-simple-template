import { LitElement, html } from 'lit';
import styles from './sophos-simple-template-styles';

export class SophosSimpleTemplate extends LitElement {
  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor () {
    super();  
    this.styleTemplate = 'full-header'; //Admit full-nav or full-header.
    this.showNavigationBar = false;
    this.showHeader = false;
  }

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties () {
    return {    
      styleTemplate : { type : String },
      showNavigationBar : {type : Boolean},
      showHeader : { type : Boolean}
    };
  }

  static get styles () {
    return styles;
  }

  headerContent () {
    return html`
    <div id="header-container">
      <slot name="header-content"></slot>
    </div>
    `;
  }

  navBarContent () {
    return html`
    <div id="nav-bar-container">
      <slot name="nav-bar-content"></slot>
    </div>
    `;
  }

  mainViewContent () {
    return html`
    <div id="main-view-container">
      <slot name="main-view-content"></slot>
    </div>
    `;
  }

  createTemplate () {
    return html`
    ${this.styleTemplate === 'full-header' ? html`
      <div id="header">
        ${this.headerContent()}
      </div>
      <div id="main-section" template-style=${this.styleTemplate}>        
        <div id="nav-bar">
          ${this.navBarContent()}
        </div>
  
        <div id="main-view" template-style=${this.styleTemplate}>
          ${this.mainViewContent()}
        </div>
      </div>
    ` : html`
          <div id="nav-bar">
            ${this.navBarContent()}
          </div>
          <div id="main-section" template-style=${this.styleTemplate}>        
            <div id="header">
              ${this.headerContent()}
            </div>
            <div id="main-view" template-style=${this.styleTemplate}>
              ${this.mainViewContent()}
            </div>
          </div>
    `}
    `;
  }

  render () {
    return html`
    <div id="main-container" template-style=${this.styleTemplate}>
      ${this.createTemplate()}
    </div>
    `;
  }
}
customElements.define('sophos-simple-template', SophosSimpleTemplate);