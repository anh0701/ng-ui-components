import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MunTreeViewService {

  arrayTree: string[] = ['hoa', 'ngoc', 'hoa'];
  
  getItems(): string[]{
    return this.arrayTree;
  }
}
