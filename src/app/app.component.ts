import { Component, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public customLayout: boolean;
  public sidebarWidget: boolean;

  constructor(
    private layoutService: LayoutService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    
  }
}
