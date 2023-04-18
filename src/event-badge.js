import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class EventBadge extends LitElement {
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
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--event-badge-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  constructor() {
    super();
    this.header = 'HAX the Web: Headless Authoring eXperience';
    this.title = 'HAX';
  }

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.title}</h1>

      </main>
      <svg width="1150" height="1500" id="remix-this" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1150 1500" data-v-b2c8125e="" data-v-a09c7bce="">
        <defs data-v-b2c8125e="" data-v-a09c7bce="">
          <style data-v-b2c8125e="" data-v-a09c7bce="">
            @font-face {
              font-family: 'Robo  to';
              font-style: normal;
              font-weight: 400;
              src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kvnz.woff2) format('woff2');
            }
        
      </style>
      </defs>
      </svg>
    `;
  }
}

customElements.define('event-badge', EventBadge);