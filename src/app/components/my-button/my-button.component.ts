import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `
  <span>{{model}}</span>
  `,
  styles: [`
  :host {
    background: rgba(24, 24, 24, 1);
    cursor: pointer;
    color: white;
    font-weight: 400;
  }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class MyButtonComponent {

  public model: string;

  @HostListener('click', ['$event'])
  onClick(e) {
    console.log(e)
  }

  constructor() {
    this.model = 'Click';
  }

}
