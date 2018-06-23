import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentCardoComponent } from './entertainment-cardo.component';

describe('EntertainmentCardoComponent', () => {
  let component: EntertainmentCardoComponent;
  let fixture: ComponentFixture<EntertainmentCardoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentCardoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentCardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
