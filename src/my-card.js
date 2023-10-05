import { LitElement, html, css } from 'lit';

class MyCard extends LitElement {
  static get properties() {
    return {
      name: { type: String, reflect: true },
      information: { type: String},
      variation: {
        type: Boolean,
        reflect: true,
      }
    }

  }

  static styles = css`

    .cardimage {
      height: 100%;
      width: 100%;
    }

    .card{
      margin: 0 auto;
      max-width: 300px;
      max-height: 400px;
      min-height: 10px;
      padding: 8px 8px 28px 8px;
      border-radius: 10px;
      overflow: hidden;
      background-color: beige;
    }

    :host([variation]) .card {
      background-color: white;
    }

    :host([name]) .name {
      display: block;
    }
  `;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.name = 'Christian Wasta';
    this.informtion = "test";
    this.variation = false;
  }

  render() {
    return html`
      <div class="card">
        <img class="cardimage" alt="Picture of Card" src="https://images.unsplash.com/photo-1586957960772-3e526c5e7cbd?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM0OTY0NDF8&ixlib=rb-4.0.3&q=85" />
        <h1 class="name">${this.name}</h1>
        <details class="cardDetails">
          <summary>Details</summary>
          <div class="cardDetailsContent">
            ${this.information}
            <slot name="slotbutton"></slot>
          </div>
        </details>
      </div>
    `;
  }

}

customElements.define('wasta-card', MyCard);
