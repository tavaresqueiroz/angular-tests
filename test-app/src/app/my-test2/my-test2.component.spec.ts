import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTest2Component } from './my-test2.component';

describe('MyTest2Component', () => {
  let component: MyTest2Component;
  let fixture: ComponentFixture<MyTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
