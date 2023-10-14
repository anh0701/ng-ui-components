import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class MunTreeViewService {

  arrayTree: Data[] = [
    // {
    //   value: "k",
    //   item: [
    //     {
    //       value: "j",
    //       item: []
    //     }
    //   ]
    // }
  ];

  getItems(): Data[] {
    return this.arrayTree;
  }
}
