import { html } from 'lit';
import '../src/event-badge.js';

export default {
  title: 'EventBadge',
  component: 'event-badge',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <event-badge
      style="--event-badge-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </event-badge>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
