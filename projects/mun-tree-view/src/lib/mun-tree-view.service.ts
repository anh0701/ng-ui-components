import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MunTreeViewService {

  arrayTree: string[] = [];
  
  getItems(): string[]{
    return this.arrayTree;
  }
}
