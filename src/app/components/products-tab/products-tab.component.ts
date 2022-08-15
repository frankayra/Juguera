import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-tab',
  templateUrl: './products-tab.component.html',
  styleUrls: ['./products-tab.component.css']
})
export class ProductsTabComponent implements OnInit {
  isActive = true;
  constructor() { }
  
  ngOnInit(): void {
  }
  switchUp(){
    this.isActive = this.isActive;
  }
}
