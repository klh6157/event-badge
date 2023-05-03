import { LitElement, html, css } from "lit";
import "./event-badge";

export class EventList extends LitElement {
  static get tag() {
    return "event-list";

  }

  static get properties() {
    return {
        events: { type: Array },
       
    }
  }

  constructor() {
    super();
    this.events = [];
    this.updateEvents();
    
  }

  updateEvents() {
    const address = "../api/eventBadges";
    fetch(address).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return [];
    }).then((data) => {
      this.events = data;
    });
  }

  static get styles() {
    return css`
      .wrapper {
        display: 100%;
        border: 1px solid #ccc;
        display: block;
      }
      .tvCard {
        display: inline-block;
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        ${this.events.map((event) => html`
      <div class="tvCard">
        <event-badge
          name="${event.name}"
          line="${event.line}"
          line2="${event.line2}"
          media="${event.media}"
          image1="${event.image1}"
          image2="${event.image2}"
          sepia="${event.sepia}"
          greyscale="${event.greyscale}"
          tvColorStage="${event.tvColorStage}"
          tvTopColor="${event.tvTopColor}"
          tvTopColor2="${event.tvTopColor2}"
          tvTopColor3="${event.tvTopColor3}"
          tvTopColor4="${event.tvTopColor4}"
          tvTopColor5="${event.tvTopColor5}"
          tvTopColor6="${event.tvTopColor6}"
          tvTopColor7="${event.tvTopColor7}"
          tvBotColor="${event.tvBotColor}"
          tvBotColor2="${event.tvBotColor2}"
          tvBotColor3="${event.tvBotColor3}"
          tvBotColor4="${event.tvBotColor4}"
          tvBotColor5="${event.tvBotColor5}"
          tvBotColor6="${event.tvBotColor6}"
          tvBotColor7="${event.tvBotColor7}"
          background="${event.background}"
          knobColor="${event.knobColor}"
          fontColor="${event.fontColor}"
        ></event-badge>
      </div>
        `)}
      </div>
    `;
  }
}

customElements.define(EventList.tag, EventList);