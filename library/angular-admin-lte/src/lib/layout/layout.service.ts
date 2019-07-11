import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { RoutingService } from '../services/routing.service';

@Injectable()
export class LayoutService {
  public isCustomLayout: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public isSidebarWidget: BehaviorSubject<boolean> = new BehaviorSubject(true);

  private customLayout: boolean;
  private sidebarWidget: boolean;


  /**
   * @method constructor
   * @param routingService [description]
   */
  constructor(
    private routingService: RoutingService
  ) {
    this.init();
  }

  /**
   * [init description]
   * @method init
   * @return [description]
   */
  private init() {
    this.routingService.onChange.subscribe((value) => {
      console.log( value );
      if (value && value[value.length - 1]) {
        if (this.customLayout === undefined || this.customLayout !== value[value.length - 1].data['disableLayout']) {
          this.isCustomLayout.next(!!value[value.length - 1].data['customLayout']);
        }
        this.customLayout = value[value.length - 1].data['customLayout'];

        if (this.sidebarWidget === undefined || this.sidebarWidget !== value[value.length - 1].data['disableSidebar']) {
          this.isSidebarWidget.next(!!value[value.length - 1].data['sidebarWidget']);
        }
        this.sidebarWidget = value[value.length - 1].data['sidebarWidget'];
      }
    });
  }
}
