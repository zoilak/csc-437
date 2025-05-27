import { LitElement, html, css } from "lit";

export class TrackboxdHeader extends LitElement {
  static styles = css`
    h1 {
      text-align: center;
      font-family: 'Bungee Shade', sans-serif;
      font-size: 2rem;
      margin-top: 20px;
    }

    .icon {
      width: 40px;
      height: 40px;
      vertical-align: middle;
      margin-left: 10px;
    }
  `;

  render() {
    return html`
      <h1>
      <slot>Welcome to TrackBoxd</slot>
        <svg class="icon">
          <use href="/icons/icons.svg#album-cover"></use>
        </svg>
      </h1>
    `;
  }
}
