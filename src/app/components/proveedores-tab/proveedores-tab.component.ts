import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores-tab',
  templateUrl: './proveedores-tab.component.html',
  styleUrls: ['./proveedores-tab.component.css']
})
export class ProveedoresTabComponent implements OnInit {
  isActive = true;
  constructor() { }

  ngOnInit(): void {
  }
  switchUp(){
    this.isActive = this.isActive;
  }
}
