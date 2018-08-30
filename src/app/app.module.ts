import { LayoutModule } from '@angular/cdk/layout';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  entryComponents: [NavbarComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const appNavbar = createCustomElement(NavbarComponent, { injector });
    customElements.define('app-navbar', appNavbar);
  }

  ngDoBootstrap() {}
}
