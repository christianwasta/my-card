import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: 100%;
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--my-card-background-color);
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

    main {
      flex-grow: 1;
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
        <button id="nob">Duplicate</button>
        <button id="background-color">Change Background Color</button>
        <button id="change-heading">Change Heading Text</button>
        <button id="delete-last-card">Delete Last Card</button>
        <div class="card">
          <img class="cardimage" alt="Picture of Card" src="https://images.unsplash.com/photo-1586957960772-3e526c5e7cbd?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTM0OTY0NDF8&ixlib=rb-4.0.3&q=85" />
          <h1>Christian Wasta</h1>

          <p>HAX is a paradigm shift for web publishing. It puts advanced authoring capabilities in the hands of everyone, regardless of technical ability and all items made are sustainability built in highly semantic HTML.</p>
          <button id="details">Details</button>
        </div>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('my-card', MyCard);