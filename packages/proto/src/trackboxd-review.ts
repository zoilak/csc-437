import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class TrackboxdReviewElement extends LitElement {
  @property() rating = "";

  static styles = css`
    :host {
      display: block;
      border: 1px solid #ccc;
      padding: 1rem;
      margin: 0.5rem 0;
      border-radius: 8px;
      background: var(--color-background-card, #f9f9f9);
      font-family: "Noticia Text", serif;
    }

    .rating {
      font-weight: bold;
      color: var(--color-accent, #c62d2d);
      font-size: 1.1rem;
    }

    ::slotted([slot="review-text"]) {
      display: block;
      margin-top: 0.5rem;
      font-size: 1rem;
    }
  `;

  override render() {
    return html`
      <p class="rating">⭐ ${this.rating}/5</p>
      <p><slot name="review-text"></slot></p>
    `;
  }
}
