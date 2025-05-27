import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import './trackboxd-header'; // Import the original header component

interface HeaderData {
  title: string;
}

export class TrackboxdHeaderWrapper extends LitElement {
  @property()
  src?: string;

  @state()
  headerData: HeaderData | null = null;

  connectedCallback() {
    super.connectedCallback();
    if (this.src) this.hydrate(this.src);
  }

  async hydrate(src: string) {
    try {
      const res = await fetch(src);
      const json = await res.json();
      this.headerData = json as HeaderData;
    } catch (err) {
      console.error('Failed to fetch header data:', err);
    }
  }

  render() {
    if (!this.headerData) {
      return html`<p>Loading...</p>`;
    }

    return html`
      <trackboxd-header>
        ${this.headerData.title}
      </trackboxd-header>
    `;
  }
}

customElements.define('trackboxd-header-wrapper', TrackboxdHeaderWrapper);
