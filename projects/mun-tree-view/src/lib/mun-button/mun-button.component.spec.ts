import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunButtonComponent } from './mun-button.component';

describe('MunButtonComponent', () => {
  let component: MunButtonComponent;
  let fixture: ComponentFixture<MunButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunButtonComponent]
    });
    fixture = TestBed.createComponent(MunButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
