import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';


import { MyButtonComponent } from './components/my-button/my-button.component';

export const elements = [
  MyButtonComponent
];

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
     MyButtonComponent
  ],
  entryComponents: [
     MyButtonComponent
  ],
  providers: []
})
export class AppModule {

   constructor(private injector: Injector) {
     customElements.define('my-button', createCustomElement(MyButtonComponent, { injector }));
  }

   ngDoBootstrap() {}
}
