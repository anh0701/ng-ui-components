import { Component } from '@angular/core';
import { MunTreeViewService } from './mun-tree-view.service';

@Component({
  selector: 'lib-mun-tree-view',
  templateUrl: './mun-tree-view.component.html',
  styles: [
  ],
  providers:  [ MunTreeViewService ]

})
export class MunTreeViewComponent {
  constructor(private service: MunTreeViewService){};
  init = this.service.getItems();
}
