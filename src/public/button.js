class MyButtonElement extends HTMLElement {
	constructor() {
		  super(...arguments);
    	const shadowRoot: ShadowRoot = this.attachShadow({open: false});
      const t = document.createElement('template');
      t.innerHTML = html`
        <style>
            background: rgba(24, 24, 24, 1);
            cursor: pointer;
            color: white;
            font-weight: 400;
            padding-top: 4px;
            padding-bottom: 4px;
            padding-left: 8px;
            padding-right: 8px;
            border-radius: 4px;
            min-width: 120px;
            text-align: center;
            user-select: none;
        </style>

        <span></span>

      `;
      shadowRoot.appendChild(t.content.cloneNode(true));
  }
  observedAttributes() {
    return ['model'];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'model':
        this.setHeadline(newValue);
        break;
    }
  }
  connectedCallback() {
     this.addEventListener('click', this.onClick);
  }
  setHeadline(val) {
    this.shadowRoot.querySelector('span').innerHTML = val;
  }
  onClick(ev) {
    console.log(ev);
  }
}
customElements.define('my-button', MyButtonElement);