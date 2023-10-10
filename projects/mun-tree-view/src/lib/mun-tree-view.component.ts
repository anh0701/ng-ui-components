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
  newitem = "";
  status: boolean = true;

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  onkeyDown(event: KeyboardEvent){
    if(event.key === "Enter"){
      this.init.push(this.newitem);
      this.newitem = '';
      this.status = true;
    }
  }
  onclick(event:Event): boolean{
    console.log(this.status);
    this.status = false;
    return this.status;
  }
}
