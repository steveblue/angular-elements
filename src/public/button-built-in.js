class MyButtonElement extends HTMLButtonElement {
	constructor() {
		  super();
      const t = document.createElement('template');
      t.innerHTML = `<span></span>`;
      this.appendChild(t.content.cloneNode(true));
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
     this.setHeadline(this.getAttribute('model'));
     this.addEventListener('click', this.onClick);
  }
  setHeadline(val) {
    this.querySelector('span').innerHTML = val;
  }
  onClick(ev) {
    console.log(ev);
  }
}
customElements.define('my-button', MyButtonElement, {extends: 'button'});