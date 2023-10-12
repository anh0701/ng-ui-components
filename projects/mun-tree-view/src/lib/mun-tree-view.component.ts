import { Component, Input } from '@angular/core';
import { MunTreeViewService } from './mun-tree-view.service';
import { Data } from './data';

@Component({
  selector: 'lib-mun-tree-view',
  templateUrl: './mun-tree-view.component.html',
  styles: [
  ],
  providers:  [ MunTreeViewService ]

})
export class MunTreeViewComponent {
  constructor(private service: MunTreeViewService){};
  @Input()
  data: Data[] = this.service.getItems();
  hidden: boolean = true

  showInputClick(){
    this.hidden = false;
  }

  addInputItem(event: Event){
    this.data.push({value: (event.target as HTMLInputElement).value, item: []})
  }
}
