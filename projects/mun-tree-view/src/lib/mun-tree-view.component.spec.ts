import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunTreeViewComponent } from './mun-tree-view.component';

describe('MunTreeViewComponent', () => {
  let component: MunTreeViewComponent;
  let fixture: ComponentFixture<MunTreeViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunTreeViewComponent]
    });
    fixture = TestBed.createComponent(MunTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
