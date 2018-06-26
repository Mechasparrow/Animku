import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaifuViewComponent } from './waifu-view.component';

describe('WaifuViewComponent', () => {
  let component: WaifuViewComponent;
  let fixture: ComponentFixture<WaifuViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaifuViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaifuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
