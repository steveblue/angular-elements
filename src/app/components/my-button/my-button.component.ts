import { Component, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `
  <span>{{model}}</span>
  `,
  styles: [`
    :host {
        display: inline-block;
        background: rgba(24, 24, 24, 1);
        color: white;
        font-weight: 400;
        padding: 4px 8px;
        border-radius: 4px;
        min-width: 120px;
        text-align: center;
        user-select: none;
        cursor: pointer;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class MyButtonComponent {

  @Input() model: string;

  @HostListener('click', ['$event'])
  onClick(e) {
    console.log(e)
  }

  constructor() {}

}
