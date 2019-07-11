import { Component, ViewChild } from '@angular/core';
// import { OptionsInput } from 'fullcalendar';

@Component({
  selector: 'app-sidebar-left-inner',
  templateUrl: './sidebar-left-inner.component.html',
  styleUrls: ['./sidebar-left-inner.component.scss']
})
export class SidebarLeftInnerComponent {
  option = {
    header: {
      left: 'title',
      right: 'prev,next'
    }
  }

  constructor(  ){

  }
}
