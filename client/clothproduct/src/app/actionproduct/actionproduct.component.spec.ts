import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionproductComponent } from './actionproduct.component';

describe('ActionproductComponent', () => {
  let component: ActionproductComponent;
  let fixture: ComponentFixture<ActionproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
