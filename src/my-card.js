import { LitElement, html, css } from 'lit';

class MyCard extends LitElement {
  static properties = {
    header: { type: String },

  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static styles = css`
    :host {
      text-align: center;
    }

    .cardimage {
      height: 100%;
      width: 100%;
    }

    a {
      text-decoration: none;
      text-align: center;
      color: black;
    }

    #nob:hover, #nob:focus {
      background-color: black;
      color: white;
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

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  render() {
    return html`
      <main>
        <button id="nob" @click=${this.duplicate}>Duplicate</button>
        <button id="background-color" @click=${this.backgroundColor}>Change Background Color</button>
        <button id="change-heading" @click=${this.changeHeading}>Change Heading Text</button>
        <button id="delete-last-card" @click=${this.deleteLastCard}>Delete Last Card</button>
        <div class="card">
          <img class="cardimage" alt="Picture of Card" src="https://images.unsplash.com/photo-1586957960772-3e526c5e7cbd?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM0OTY0NDF8&ixlib=rb-4.0.3&q=85" />
          <h1>Christian Wasta</h1>

          <p>HAX is a paradigm shift for web publishing. It puts advanced authoring capabilities in the hands of everyone, regardless of technical ability and all items made are sustainability built in highly semantic HTML.</p>
          <button id="details" @click=${this.details}>Details</button>
        </div>
      </main>
    `;
  }

  duplicate() {
    const elem = this.shadowRoot.querySelector(".card");
    const clone = elem.cloneNode(true);
    this.shadowRoot.appendChild(clone);
  };


  backgroundColor() {
    const elem = this.shadowRoot.querySelector(".card");
    const backgroundColor = elem.style.backgroundColor;

    if (backgroundColor === 'beige') {
      elem.style.backgroundColor = 'green';
    } else {
      elem.style.backgroundColor = 'beige';
    }
  };

  changeHeading() {
    const elem = this.shadowRoot.querySelector("h1");
    if (elem.innerHTML === "Christian Wasta") {
      elem.innerHTML = "New Heading";
    } else {
      elem.innerHTML = "Christian Wasta";
    }
  };

  deleteLastCard() {
    const elem = this.shadowRoot.querySelectorAll(".card");
    if (elem.length > 1) {
      elem[elem.length - 1].remove();
    }
  };

  details() {
    const elem = this.shadowRoot.querySelector(".card p");
    const display = elem.style.display;

    if (display === 'none') {
      elem.style.display = 'block';
    } else {
      elem.style.display = 'none';
    }
  };
}

customElements.define('my-card', MyCard);