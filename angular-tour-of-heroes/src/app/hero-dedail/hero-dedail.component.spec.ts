import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDedailComponent } from './hero-dedail.component';

describe('HeroDedailComponent', () => {
  let component: HeroDedailComponent;
  let fixture: ComponentFixture<HeroDedailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDedailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDedailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
