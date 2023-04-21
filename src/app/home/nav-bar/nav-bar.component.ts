import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor() { }
  toggle() {
    console.log('a')
    if ($("#layoutSidenav_nav").hasClass('toggle')) $("#layoutSidenav_nav").toggleClass("toggle")
    else $("#layoutSidenav_nav").addClass('toggle')
    // 
  }
}
