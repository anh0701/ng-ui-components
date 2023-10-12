import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class MunTreeViewService {

  arrayTree: Data[] = [
    {
      value: "Thinh",
      item: [
        {
          value: "deu", 
          item: []
        }
      ]
    }
  ];
  
  getItems(): Data[]{
    return this.arrayTree;
  }
}
