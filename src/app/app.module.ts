import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MyButtonComponent } from './components/my-button/my-button.component';

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
        const customElement = createCustomElement(MyButtonComponent, { injector });
        customElements.define('my-button', customElement);
   }

   ngDoBootstrap() {}
}
