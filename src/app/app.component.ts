import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';
  productsVisible = true;
  contactUsVisible = false;
  proveedoresVisible = false;
  
  // productsStyle = {
  //     'visibility': this.productsVisible ? 'visible' : 'hidden' 
  // }
  // contactUsStyle = {
  //   'visibility': this.contactUsVisible ? 'visible' : 'hidden' 
  // }
  // proveedoresStyle = {
  //   'visibility': this.proveedoresVisible ? 'visible' : 'hidden' 
  // }
  setActive(tab:string)
  {
    this.productsVisible = false;
    this.contactUsVisible = false;
    this.proveedoresVisible = false;
    switch (tab) {
      case 'products':
        this.productsVisible = true;
        break;
      case 'contact':
        this.contactUsVisible = true;
        break;
      case 'proveedores':
        this.proveedoresVisible = true;
        break;
      default:
        break;
    }

  }

  constructor(){
  }
}

