import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [BrowserModule],
  entryComponents: [NavbarComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const appNavbar = createCustomElement(NavbarComponent, { injector });
    customElements.define('app-navbar', appNavbar);
  }

  ngDoBootstrap() {}
}
