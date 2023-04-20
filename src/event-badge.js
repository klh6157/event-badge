import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class EventBadge extends LitElement {
  static properties = {
    title: { type: String },
    image: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
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

    .TV {
      width: 50vh;
      height: 50vh;
      background-color: white;
      position: flex;
      border: 1px solid black;
      border-radius: 10px;
      border-shadow: 10px 10px 5px grey;
    }

    title {
      color: white;
      position: flex;
      font-size: 50px;
      font-weight: bold;
      text-align: center;
      margin-top: 10px;
    }

    first-line-para {
      color: black;
      position: flex;
      font-size: 50px;
      font-weight: bold;
      margin-top: 10px;
    }
    
    .wrapper:hover .first-line-para {
      color: red;
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
    this.title = 'Media';
    this.image = 'https://www.bing.com/images/blob?bcid=SDnwGs.Os34FpQ';
  }

  render() {
    return html`
      <main>
        <div class="TV">
        <h1>${this.title}</h1>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>

        <div style="width:100%;height:100%;display:flex">
        <div xmlns="http://www.w3.org/1999/xhtml" contenteditable="true" class="first-line-para" 
        style="white-space:pre-wrap;text-align:left;border:0px solid #000000;padding-top:5px;width:100%">Type Stuff</div>
        </div>
        

      </main>
      <div>
      <svg width="1150" height="1500" id="outerSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1150 1500" class="img-fluid" style="vertical-align:top;overflow:visible;max-height:70vh;" data-v-b2c8125e data-v-a09c7bce>
        <defs data-v-b2c8125e="" data-v-a09c7bce="">
          <style data-v-b2c8125e="" data-v-a09c7bce="">


      </style>
      </defs>
      </svg>
      </div>
    `;
  }
}

customElements.define('event-badge', EventBadge);