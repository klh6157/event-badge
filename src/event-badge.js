import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class EventBadge extends LitElement {
  static properties = {
    title: { type: String },
    image: { type: String },
    sepia: { type: Boolean, Reflect: true },

  }

  static styles = css`
    :host([sepia]) {
      filter: sepia(100%);
    }
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

    .wrapper {
      width: 50vh;
      height: 55vh;
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

    .domain {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 3;
      animation: app-logo-spin infinite 20s linear;
    }

    first-line-para {
      color: black;
      position: flex;
      font-size: 50px;
      font-weight: bold;
      margin-top: 10px;
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
        <div class="wrapper">
        <div xmlns="http://www.w3.org/1999/xhtml" contenteditable="true" style="white-space:pre-wrap;text-align:center;border:0px solid #000000;padding-top:5px;width:100%;font-size:100px">Media</div>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <div style="width:100%;height:100%;display:flex">
        <div xmlns="http://www.w3.org/1999/xhtml" contenteditable="true" class="first-line-para" 
        style="white-space:pre-wrap;text-align:left;border:0px solid #000000;padding-top:5px;width:50%;height:23%">Type Stuff<br>More Stuff<br>Other Stuff</div>
        </div>

        <div class="domain"><img alt="open-wc logo" src=${logo} /></div>

        <svg width="1150" height="1500" id="outerSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1150 1500" class="img-fluid" style="vertical-align:top;overflow:visible;max-height:70vh;" data-v-b2c8125e data-v-a09c7bce>
          @font-face {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');
          }
      </svg>
      </div>
    `;
  }
}

customElements.define('event-badge', EventBadge);