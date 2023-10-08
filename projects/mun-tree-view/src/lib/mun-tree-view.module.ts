import { NgModule } from '@angular/core';
import { MunTreeViewComponent } from './mun-tree-view.component';
import { MunButtonComponent } from './mun-button/mun-button.component';
import { MunTreeViewService } from './mun-tree-view.service';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    MunTreeViewComponent,
    MunButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    MunTreeViewComponent,
    MunButtonComponent
  ],
  providers:[MunTreeViewService]
})
export class MunTreeViewModule { }
