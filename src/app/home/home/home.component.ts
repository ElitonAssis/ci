import { Component } from '@angular/core';
import * as $ from 'jquery'
import { SideBarComponent } from '../side-bar/side-bar.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  openOrClose = false;

  constructor(

  ) { }


}