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
          line2="${event.line2}"
          line3="${event.line3}"
          media="${event.media}"
          mainimage="${event.mainimage}"
          secimage="${event.secimage}"
          sepia="${event.sepia}"
          bw="${event.bw}"
          tvcolor="${event.tvcolor}"
          topcolor1="${event.topcolor1}"
          topcolor2="${event.topcolor2}"
          topcolor3="${event.topcolor3}"
          topcolor4="${event.topcolor4}"
          topcolor5="${event.topcolor5}"
          topcolor6="${event.topcolor6}"
          topcolor7="${event.topcolor7}"
          bottomcolor1="${event.bottomcolor1}"
          bottomcolor2="${event.bottomcolor2}"
          bottomcolor3="${event.bottomcolor3}"
          bottomcolor4="${event.bottomcolor4}"
          bottomcolor5="${event.bottomcolor5}"
          bottomcolor6="${event.bottomcolor6}"
          bottomcolor7="${event.bottomcolor7}"
          backgroundcolor="${event.backgroundcolor}"
          knobscolor="${event.knobscolor}"
          fontcolor="${event.fontcolor}"
        ></event-badge>
      </div>
        `)}
      </div>
    `;
  }
}

customElements.define(EventList.tag, EventList);