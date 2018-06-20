import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaifuPageComponent } from './waifu-page.component';

describe('WaifuPageComponent', () => {
  let component: WaifuPageComponent;
  let fixture: ComponentFixture<WaifuPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaifuPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaifuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
