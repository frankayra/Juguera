import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us-tab',
  templateUrl: './contact-us-tab.component.html',
  styleUrls: ['./contact-us-tab.component.css']
})
export class ContactUsTabComponent implements OnInit {
  isActive = false;
  constructor() { }

  ngOnInit(): void {
  }
  switchUp(){
    this.isActive = this.isActive;
  }
}
