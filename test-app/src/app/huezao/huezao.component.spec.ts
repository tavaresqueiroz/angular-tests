import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuezaoComponent } from './huezao.component';

describe('HuezaoComponent', () => {
  let component: HuezaoComponent;
  let fixture: ComponentFixture<HuezaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuezaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuezaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
