import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkwayComponent } from './milkway.component';

describe('MilkwayComponent', () => {
  let component: MilkwayComponent;
  let fixture: ComponentFixture<MilkwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
