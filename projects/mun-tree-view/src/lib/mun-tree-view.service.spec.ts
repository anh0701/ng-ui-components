import { TestBed } from '@angular/core/testing';

import { MunTreeViewService } from './mun-tree-view.service';

describe('MunTreeViewService', () => {
  let service: MunTreeViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunTreeViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
