import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsTabComponent } from './components/products-tab/products-tab.component';
import { ContactUsTabComponent } from './components/contact-us-tab/contact-us-tab.component';
import { ProveedoresTabComponent } from './components/proveedores-tab/proveedores-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsTabComponent,
    ContactUsTabComponent,
    ProveedoresTabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
