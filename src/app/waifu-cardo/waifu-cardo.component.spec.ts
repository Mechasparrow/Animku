import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaifuCardoComponent } from './waifu-cardo.component';

describe('WaifuCardoComponent', () => {
  let component: WaifuCardoComponent;
  let fixture: ComponentFixture<WaifuCardoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaifuCardoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaifuCardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
