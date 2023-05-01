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
    const address = ".../api/eventList";

  render() {
    return html`
      <div class="event-list">
        ${this.events.map(
          (event) => html`<event-badge .event=${event}></event-badge>`
        )}
      </div>
    `;
  }
}